import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { 
  Heart, 
  Baby, 
  Brain, 
  Smile, 
  Bone, 
  Users, 
  Eye, 
  Stethoscope 
} from "lucide-react";

const specialties = [
  {
    id: 1,
    name: "Cardiologist",
    description: "Heart & cardiovascular issues",
    icon: Heart,
    color: "text-red-500 bg-red-50",
  },
  {
    id: 2,
    name: "Pediatrician", 
    description: "Child health & development",
    icon: Baby,
    color: "text-pink-500 bg-pink-50",
  },
  {
    id: 3,
    name: "Dermatologist",
    description: "Skin & hair issues",
    icon: Eye,
    color: "text-green-500 bg-green-50",
  },
  {
    id: 4,
    name: "Dentist",
    description: "Dental & oral health",
    icon: Smile,
    color: "text-blue-500 bg-blue-50",
  },
  {
    id: 5,
    name: "Orthopedic",
    description: "Bone & joint problems",
    icon: Bone,
    color: "text-orange-500 bg-orange-50",
  },
  {
    id: 6,
    name: "Gynecologist",
    description: "Women's health specialist",
    icon: Users,
    color: "text-purple-500 bg-purple-50",
  },
  {
    id: 7,
    name: "Psychiatrist",
    description: "Mental health & wellness",
    icon: Brain,
    color: "text-indigo-500 bg-indigo-50",
  },
  {
    id: 8,
    name: "General Physician",
    description: "Primary healthcare",
    icon: Stethoscope,
    color: "text-teal-500 bg-teal-50",
  },
];

export function PopularSpecialties() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Book an appointment for an in-clinic consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find experienced doctors across all specialties
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specialties.map((specialty) => {
            const IconComponent = specialty.icon;
            return (
              <Card key={specialty.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-blue-200">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${specialty.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{specialty.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{specialty.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            View All Specialties
          </Button>
        </div>
      </div>
    </section>
  );
}