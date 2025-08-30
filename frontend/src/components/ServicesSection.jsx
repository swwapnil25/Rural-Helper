import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  { title: "Grocery Delivery", icon: "🛒", description: "Daily essentials at your doorstep" },
  { title: "Medicine Supply", icon: "💊", description: "Health support for your family" },
  { title: "Farming Tools", icon: "⚒️", description: "Equipments to boost productivity" },
  { title: "Water Supply", icon: "🚰", description: "Safe and reliable water access" },
  { title: "Transport Assistance", icon: "🚜", description: "Helping farmers connect to markets" },
];

const ServicesSection = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="grid">
        {services.map((service, i) => (
          <ServiceCard
            key={i}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
