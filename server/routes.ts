import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact form submission
      const contact = {
        ...validatedData,
        createdAt: new Date().toISOString(),
      };
      
      await storage.saveContact(contact);
      
      res.status(200).json({ success: true, message: "Form submitted successfully" });
    } catch (error: any) {
      console.error("Error processing contact form:", error);
      
      if (error.errors) {
        // Zod validation error
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
