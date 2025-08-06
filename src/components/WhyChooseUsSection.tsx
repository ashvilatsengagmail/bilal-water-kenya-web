import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Clock, Shield, MapPin } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive rates with transparent pricing and no hidden costs. We provide value for money without compromising quality."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick project completion with minimal disruption. Most borehole projects completed within 3-5 days."
    },
    {
      icon: Shield,
      title: "Licensed Experts",
      description: "Certified drilling professionals with years of experience and proper licensing from relevant authorities."
    },
    {
      icon: MapPin,
      title: "Local Knowledge",
      description: "Deep understanding of Kenya's geology and water table patterns across different regions and counties."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by communities and businesses across Kenya for reliable water solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-kenya-sky">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-foreground">{reason.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;