import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

const ContactSection = () => {
  const kenyanCounties = [
    "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", 
    "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", 
    "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", 
    "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", 
    "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", 
    "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans Nzoia", 
    "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your water project? Get in touch for a free consultation and quote
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Get a Free Quote</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Phone Number" />
              </div>
              <Input placeholder="Email Address" />
              <Select>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select County/Location" />
                </SelectTrigger>
                <SelectContent className="bg-background border shadow-lg z-50 max-h-60">
                  {kenyanCounties.map((county) => (
                    <SelectItem key={county} value={county} className="cursor-pointer hover:bg-accent">
                      {county}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea 
                placeholder="Tell us about your water drilling needs..."
                className="min-h-[120px]"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+254 781 091551</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">bilalwaterdrillingcompany@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Office</h3>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Working Hours</h3>
                    <p className="text-muted-foreground">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us Now
                </Button>
              </CardContent>
            </Card>
            
            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle>Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We provide water drilling services across Kenya including:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>• Nairobi County</div>
                  <div>• Kiambu County</div>
                  <div>• Nakuru County</div>
                  <div>• Machakos County</div>
                  <div>• Kajiado County</div>
                  <div>• Meru County</div>
                  <div>• Laikipia County</div>
                  <div>• And more...</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;