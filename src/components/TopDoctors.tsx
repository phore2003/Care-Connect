import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Clock, MapPin, Video } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TopDoctorsProps {
  onBookAppointment?: () => void;
}

const doctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    qualification: "MBBS, MD - Dermatology",
    specialty: "Dermatologist",
    experience: "15 years",
    rating: 4.9,
    reviews: 2847,
    consultationType: ["Online", "In-clinic"],
    fee: 800,
    nextAvailable: "Today",
    image: "https://images.unsplash.com/photo-1587557983735-f05198060b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFscyUyMGhlYWx0aGNhcmUlMjB0ZWFtfGVufDF8fHx8MTc1OTM0MTAyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Mumbai",
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    qualification: "MBBS, MS - Cardiology",
    specialty: "Cardiologist",
    experience: "20 years",
    rating: 4.8,
    reviews: 1923,
    consultationType: ["Online", "In-clinic"],
    fee: 1200,
    nextAvailable: "Tomorrow",
    image: "https://images.unsplash.com/photo-1587557983735-f05198060b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFscyUyMGhlYWx0aGNhcmUlMjB0ZWFtfGVufDF8fHx8MTc1OTM0MTAyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Delhi",
  },
  {
    id: 3,
    name: "Dr. Anita Desai",
    qualification: "MBBS, MD - Pediatrics",
    specialty: "Pediatrician",
    experience: "12 years",
    rating: 4.9,
    reviews: 3156,
    consultationType: ["Online", "In-clinic"],
    fee: 600,
    nextAvailable: "Today",
    image: "https://images.unsplash.com/photo-1587557983735-f05198060b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFscyUyMGhlYWx0aGNhcmUlMjB0ZWFtfGVufDF8fHx8MTc1OTM0MTAyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Bangalore",
  },
  {
    id: 4,
    name: "Dr. Vikram Singh",
    qualification: "MBBS, MS - Orthopedics",
    specialty: "Orthopedic Surgeon",
    experience: "18 years",
    rating: 4.7,
    reviews: 2234,
    consultationType: ["In-clinic"],
    fee: 1000,
    nextAvailable: "Tomorrow",
    image: "https://images.unsplash.com/photo-1587557983735-f05198060b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFscyUyMGhlYWx0aGNhcmUlMjB0ZWFtfGVufDF8fHx8MTc1OTM0MTAyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Chennai",
  },
];

export function TopDoctors({ onBookAppointment }: TopDoctorsProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Top-rated doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consult with our most experienced and highly-rated healthcare professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200">
              <CardContent className="p-0">
                {/* Doctor Image */}
                <div className="relative">
                  <ImageWithFallback
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-green-500 text-white">
                      {doctor.nextAvailable}
                    </Badge>
                  </div>
                </div>

                <div className="p-4">
                  {/* Doctor Info */}
                  <h3 className="font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{doctor.qualification}</p>
                  <p className="text-sm text-blue-600 mb-3">{doctor.specialty}</p>

                  {/* Experience */}
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Clock className="h-4 w-4 mr-1" />
                    {doctor.experience} experience
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-900">{doctor.rating}</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({doctor.reviews} reviews)</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {doctor.location}
                  </div>

                  {/* Consultation Types */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {doctor.consultationType.map((type) => (
                      <Badge key={type} variant="secondary" className="text-xs">
                        {type === "Online" && <Video className="h-3 w-3 mr-1" />}
                        {type}
                      </Badge>
                    ))}
                  </div>

                  {/* Fee & CTA */}
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold text-gray-900">₹{doctor.fee}</span>
                      <span className="text-sm text-gray-600 ml-1">consultation</span>
                    </div>
                  </div>

                  <Button 
                    onClick={onBookAppointment}
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                  >
                    Book Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
}