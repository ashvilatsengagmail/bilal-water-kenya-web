import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/lovable-uploads/6f2fdfc6-ea20-4fdb-ba7d-393b799d26d9.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Reliable Water Drilling 
          <span className="block text-water-blue-light">Solutions in Kenya</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Delivering affordable and efficient borehole drilling across counties
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
            <Phone className="mr-2 h-5 w-5" />
            Get a Quote
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
          >
            View Our Work
          </Button>
        </div>
        
        {/* WhatsApp Quick Contact */}
        <div className="mt-8">
          <Button 
            variant="secondary" 
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp: +254 XXX XXX XXX
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;