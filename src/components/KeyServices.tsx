import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Video, 
  Pill, 
  FlaskConical, 
  FileText, 
  Scissors,
  Shield
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Online Doctor Consultation",
    description: "Consult with certified doctors via secure video calls or chat. Available 24/7 for your convenience.",
    icon: Video,
    color: "bg-blue-50 text-blue-600 border-blue-200",
    features: ["HD Video Calls", "Secure Chat", "24/7 Availability", "Prescription Delivery"],
  },
  {
    id: 2,
    title: "Medicine Ordering",
    description: "Order prescribed medicines online with attractive discounts. Fast delivery to your doorstep.",
    icon: Pill,
    color: "bg-green-50 text-green-600 border-green-200",
    features: ["Up to 25% Discount", "Genuine Medicines", "Fast Delivery", "Prescription Upload"],
  },
  {
    id: 3,
    title: "Lab Test Booking",
    description: "Book lab tests online with home sample collection. Get reports digitally within 24-48 hours.",
    icon: FlaskConical,
    color: "bg-purple-50 text-purple-600 border-purple-200",
    features: ["Home Collection", "Digital Reports", "NABL Certified Labs", "Fasting Not Required"],
  },
  {
    id: 4,
    title: "Digital Health Records",
    description: "Store all your medical records, prescriptions, and test reports securely in one place.",
    icon: FileText,
    color: "bg-orange-50 text-orange-600 border-orange-200",
    features: ["Secure Storage", "Easy Access", "Share with Doctors", "Backup & Sync"],
  },
  {
    id: 5,
    title: "Surgery Assistance",
    description: "Get specialized support for surgical procedures with expert consultation and care coordination.",
    icon: Scissors,
    color: "bg-red-50 text-red-600 border-red-200",
    features: ["Expert Consultation", "Hospital Network", "Care Coordination", "Post-op Support"],
  },
  {
    id: 6,
    title: "Health Insurance",
    description: "Comprehensive health insurance plans to protect you and your family's healthcare needs.",
    icon: Shield,
    color: "bg-teal-50 text-teal-600 border-teal-200",
    features: ["Family Coverage", "Cashless Treatment", "No Pre-medical", "Tax Benefits"],
  },
];

export function KeyServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Complete Healthcare Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From consultation to treatment, we provide end-to-end healthcare services designed for your convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className={`group hover:shadow-xl transition-all duration-300 border-2 ${service.color} hover:scale-[1.02]`}>
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need help choosing the right service?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our healthcare experts are here to guide you. Get personalized recommendations based on your health needs.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Talk to Health Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}