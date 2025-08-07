import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Mwangi",
      location: "Nakuru County",
      rating: 5,
      text: "Bilal Water Drilling Co. transformed our community. They drilled a 200-meter borehole that has provided clean water for over 300 families. Professional, reliable, and affordable."
    },
    {
      name: "Sarah Wanjiku", 
      location: "Kiambu County",
      rating: 5,
      text: "Excellent service from start to finish. They completed our school's borehole project in just 4 days, and the water quality is exceptional. Highly recommended!"
    },
    {
      name: "David Kimani",
      location: "Machakos County", 
      rating: 5,
      text: "Their solar pump installation has been working perfectly for 2 years now. Great technical expertise and ongoing support. Best decision we made for our farm."
    },
    {
      name: "Grace Njeri",
      location: "Murang'a County",
      rating: 5,
      text: "Outstanding work! They helped us drill a borehole for our hospital. Clean water access has improved patient care significantly. Very professional team."
    },
    {
      name: "Peter Otieno",
      location: "Kisumu County",
      rating: 5,
      text: "Fast and reliable service. Our hotel now has consistent water supply thanks to their expert drilling and pump installation. Excellent value for money."
    },
    {
      name: "Mary Wambui",
      location: "Nyeri County",
      rating: 5,
      text: "They completed our church borehole project efficiently. The community now has access to clean water. Professional, punctual, and affordable pricing."
    }
  ];

  return (
    <section className="py-16 bg-earth-brown-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by hundreds of satisfied customers across Kenya
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;