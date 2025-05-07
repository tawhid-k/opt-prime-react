export default function Stats() {
  const stats = [
    { value: "37%", label: "Average Conversion Lift" },
    { value: "100+", label: "Happy Clients" },
    { value: "5.3M", label: "Optimized Visits" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
