import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, Award, Clock, MapPin, ChevronRight } from "lucide-react";

interface MeetDoctorsProps {
  onBookAppointment?: () => void;
}

export function MeetDoctors({ onBookAppointment }: MeetDoctorsProps) {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15+ years",
      rating: 4.9,
      reviews: 324,
      location: "New York",
      availability: "Available Now",
      image: "https://images.unsplash.com/photo-1758691463605-f4a3a92d6d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1OTY4NDcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      verified: true,
      languages: ["English", "Spanish"],
      consultationFee: "$75"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatologist",
      experience: "12+ years",
      rating: 4.8,
      reviews: 256,
      location: "Los Angeles",
      availability: "Available in 2h",
      image: "https://images.unsplash.com/photo-1758691463605-f4a3a92d6d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1OTY4NDcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      verified: true,
      languages: ["English", "Mandarin"],
      consultationFee: "$65"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      experience: "10+ years",
      rating: 5.0,
      reviews: 189,
      location: "Chicago",
      availability: "Available Now",
      image: "https://images.unsplash.com/photo-1758691463605-f4a3a92d6d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1OTY4NDcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      verified: true,
      languages: ["English", "Spanish"],
      consultationFee: "$60"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedic",
      experience: "18+ years",
      rating: 4.9,
      reviews: 412,
      location: "Houston",
      availability: "Available Tomorrow",
      image: "https://images.unsplash.com/photo-1758691463605-f4a3a92d6d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1OTY4NDcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      verified: true,
      languages: ["English"],
      consultationFee: "$80"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300A86B' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#C8E6C9]/30 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-[#00A86B]" />
            <span className="text-sm font-semibold text-[#00A86B]">Expert Healthcare</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
            Meet Our{' '}
            <span className="text-[#00A86B] relative">
              Doctors
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#C8E6C9] rounded-full" />
            </span>
          </h2>
          
          <p className="text-xl text-[#333333]/70 max-w-3xl mx-auto leading-relaxed">
            Connect with certified healthcare professionals who are committed to providing 
            exceptional medical care and personalized treatment.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#00A86B]/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-[#00A86B]/30"
            >
              {/* Doctor Image */}
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-[#C8E6C9]/30 group-hover:ring-[#00A86B]/50 transition-all duration-300">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Verification Badge */}
                {doctor.verified && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#00A86B] rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                )}
                
                {/* Availability Status */}
                <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                  doctor.availability.includes('Now') 
                    ? 'bg-[#00A86B] text-white' 
                    : 'bg-white text-[#333333] border border-[#00A86B]/20'
                }`}>
                  <div className="flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${
                      doctor.availability.includes('Now') ? 'bg-white animate-pulse' : 'bg-[#00A86B]'
                    }`} />
                    <span>{doctor.availability.replace('Available ', '')}</span>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="text-center space-y-3">
                <div>
                  <h3 className="font-bold text-[#333333] group-hover:text-[#00A86B] transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-[#00A86B] font-semibold">
                    {doctor.specialty}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-[#333333]">{doctor.rating}</span>
                  <span className="text-xs text-[#333333]/60">({doctor.reviews} reviews)</span>
                </div>

                {/* Experience & Location */}
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-1">
                    <Clock className="w-3 h-3 text-[#00A86B]" />
                    <span className="text-xs text-[#333333]/70">{doctor.experience}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <MapPin className="w-3 h-3 text-[#00A86B]" />
                    <span className="text-xs text-[#333333]/70">{doctor.location}</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex flex-wrap justify-center gap-1">
                  {doctor.languages.map((lang, langIndex) => (
                    <Badge key={langIndex} variant="secondary" className="text-xs bg-[#C8E6C9]/30 text-[#00A86B] border-[#00A86B]/20">
                      {lang}
                    </Badge>
                  ))}
                </div>

                {/* Consultation Fee */}
                <div className="text-center">
                  <span className="text-lg font-bold text-[#00A86B]">{doctor.consultationFee}</span>
                  <span className="text-xs text-[#333333]/60 ml-1">per session</span>
                </div>

                {/* Book Now Button */}
                <Button 
                  onClick={onBookAppointment}
                  className="w-full bg-[#00A86B] hover:bg-[#008A5C] text-white font-semibold py-2 rounded-lg transition-all duration-200 transform group-hover:scale-105"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Doctors CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-full p-2 border border-[#00A86B]/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-[#00A86B] text-white px-6 py-3 rounded-full font-semibold cursor-pointer hover:bg-[#008A5C] transition-colors flex items-center space-x-2">
              <span>View All Doctors</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <span className="text-[#333333] pr-4">100+ verified professionals</span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#00A86B]/10">
            <div className="text-3xl font-bold text-[#00A86B] mb-2">500+</div>
            <p className="text-[#333333]/70 font-medium">Verified Doctors</p>
          </div>
          <div className="text-center bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#00A86B]/10">
            <div className="text-3xl font-bold text-[#00A86B] mb-2">50K+</div>
            <p className="text-[#333333]/70 font-medium">Happy Patients</p>
          </div>
          <div className="text-center bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#00A86B]/10">
            <div className="text-3xl font-bold text-[#00A86B] mb-2">4.9★</div>
            <p className="text-[#333333]/70 font-medium">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}