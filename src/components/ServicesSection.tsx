import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Drill, Settings, Search, Wrench } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Drill,
      title: "Borehole Drilling",
      description: "Professional water borehole drilling services using state-of-the-art equipment for reliable water access.",
      image: "/lovable-uploads/7ee5fd12-a2a3-48b0-9e8b-5f0dfd6d77e7.png"
    },
    {
      icon: Settings,
      title: "Pump Installation",
      description: "Complete pump installation and setup services including submersible and solar-powered systems.",
      image: "/lovable-uploads/f7fd5684-04a0-4b66-a8e9-2aa0f0f7e2ef.png"
    },
    {
      icon: Search,
      title: "Site Survey",
      description: "Comprehensive geological surveys and water table analysis to identify optimal drilling locations.",
      image: "/lovable-uploads/016a9021-21f0-409b-b1e8-726a2a227c89.png"
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Regular maintenance and repair services to ensure your water systems operate efficiently year-round.",
      image: "/lovable-uploads/1472e636-4b4d-4f96-a926-306b5b5fe7aa.png"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive water drilling and pump solutions tailored to meet your specific needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;