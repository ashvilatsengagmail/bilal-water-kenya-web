import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-kenya-sky">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src={`${import.meta.env.BASE_URL}lovable-uploads/4a3ce73f-4fac-46e6-bf3c-0604c2711d08.png`}
              alt="Water drilling in Kenya"
              loading="lazy"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Bilal Water Drilling Co.
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6">
              With over 10 years of experience in water drilling and borehole construction, 
              Bilal Water Drilling Co. has become Kenya's trusted partner for reliable water solutions. 
              We specialize in providing clean, sustainable water access to communities, schools, 
              hospitals, and commercial properties across Kenya.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Operating in 20+ counties across Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">500+ successful borehole projects completed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Licensed and certified drilling experts</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Modern drilling equipment and technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;