import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowLeft, Search, MapPin, Star, Calendar, User } from "lucide-react";

interface FindDoctorPageProps {
  onBack: () => void;
  onBookAppointment?: () => void;
}

export function FindDoctorPage({ onBack, onBookAppointment }: FindDoctorPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [showResults, setShowResults] = useState(false);

  const specializations = [
    'All Specialties',
    'Cardiologist',
    'Dermatologist', 
    'Pediatrician',
    'Neurologist',
    'Orthopedic',
    'Gynecologist',
    'Dentist',
    'Psychiatrist',
    'General Medicine'
  ];

  const mockDoctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      clinic: "Heart Care Center",
      location: "Downtown Medical",
      rating: 4.9,
      reviews: 127,
      experience: "15+ years",
      image: "👩‍⚕️",
      available: "Today",
      fee: "$150"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatologist",
      clinic: "Skin Health Clinic",
      location: "Metro Health Plaza",
      rating: 4.8,
      reviews: 89,
      experience: "12+ years",
      image: "👨‍⚕️",
      available: "Tomorrow",
      fee: "$120"
    },
    {
      id: 3,
      name: "Dr. Emily Brown",
      specialty: "Pediatrician",
      clinic: "Children's Medical Center",
      location: "Family Care Building",
      rating: 4.9,
      reviews: 156,
      experience: "18+ years",
      image: "👩‍⚕️",
      available: "Today",
      fee: "$100"
    },
    {
      id: 4,
      name: "Dr. David Wilson",
      specialty: "Neurologist",
      clinic: "Brain & Spine Institute",
      location: "Neuroscience Center",
      rating: 4.7,
      reviews: 93,
      experience: "20+ years",
      image: "👨‍⚕️",
      available: "Next Week",
      fee: "$200"
    },
    {
      id: 5,
      name: "Dr. Lisa Anderson",
      specialty: "Orthopedic",
      clinic: "Joint Care Specialists",
      location: "Sports Medicine Center",
      rating: 4.8,
      reviews: 112,
      experience: "14+ years",
      image: "👩‍⚕️",
      available: "Today",
      fee: "$180"
    },
    {
      id: 6,
      name: "Dr. Robert Lee",
      specialty: "General Medicine",
      clinic: "Primary Care Clinic",
      location: "Community Health Center",
      rating: 4.6,
      reviews: 201,
      experience: "10+ years",
      image: "👨‍⚕️",
      available: "Tomorrow",
      fee: "$80"
    }
  ];

  const handleSearch = () => {
    setShowResults(true);
  };

  const filteredDoctors = mockDoctors.filter(doctor => {
    const matchesSearch = searchQuery === '' || 
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.clinic.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSpecialty = selectedSpecialty === '' || 
      selectedSpecialty === 'All Specialties' ||
      doctor.specialty === selectedSpecialty;
    
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-[#E3F2FD] relative overflow-hidden">
        {/* Back button */}
        <div className="absolute top-8 left-8 z-10">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-[#7E57C2] hover:text-[#6a4c93] hover:bg-white/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#7E57C2] mb-6">
              Find a Doctor
            </h1>
            <p className="text-xl text-[#555555] max-w-3xl mx-auto mb-12">
              Search and book appointments with trusted specialists in your area
            </p>

            {/* Search Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {/* Search Input */}
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by name, specialty, or city"
                        className="pl-12 h-14 border-2 focus:border-[#7E57C2] text-lg"
                      />
                    </div>
                  </div>

                  {/* Specialty Filter */}
                  <div>
                    <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                      <SelectTrigger className="h-14 border-2 focus:border-[#7E57C2] text-lg">
                        <SelectValue placeholder="All Specialties" />
                      </SelectTrigger>
                      <SelectContent>
                        {specializations.map((specialty) => (
                          <SelectItem key={specialty} value={specialty}>
                            {specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  onClick={handleSearch}
                  className="w-full md:w-auto bg-[#43A047] hover:bg-[#2E7D32] text-white px-12 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search Doctors
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-[#7E57C2]/10 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#43A047]/10 rounded-full"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-[#007C91]/10 rounded-full"></div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-[#212121] mb-2">
                  Available Doctors
                </h2>
                <p className="text-[#555555]">
                  Found {filteredDoctors.length} doctors matching your search
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="border-[#007C91] text-[#007C91] hover:bg-[#007C91] hover:text-white">
                  Filter
                </Button>
                <Button variant="outline" className="border-[#007C91] text-[#007C91] hover:bg-[#007C91] hover:text-white">
                  Sort by
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                  {/* Doctor Image/Avatar */}
                  <div className="bg-gradient-to-br from-[#007C91] to-[#43A047] p-6 text-center">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">{doctor.image}</span>
                    </div>
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                      <p className="text-white/90">{doctor.specialty}</p>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-[#555555]">
                        <MapPin className="w-4 h-4 mr-2 text-[#007C91]" />
                        <span className="text-sm">{doctor.clinic}, {doctor.location}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                          <span className="font-semibold text-[#212121]">{doctor.rating}</span>
                          <span className="text-[#555555] text-sm ml-1">({doctor.reviews} reviews)</span>
                        </div>
                        <span className="text-[#43A047] font-semibold">{doctor.experience}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-[#555555]">
                          <Calendar className="w-4 h-4 mr-2 text-[#7E57C2]" />
                          <span className="text-sm">Available {doctor.available}</span>
                        </div>
                        <span className="font-bold text-[#212121]">{doctor.fee}</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        className="flex-1 border-[#007C91] text-[#007C91] hover:bg-[#007C91] hover:text-white"
                      >
                        <User className="w-4 h-4 mr-2" />
                        View Profile
                      </Button>
                      <Button 
                        onClick={onBookAppointment}
                        className="flex-1 bg-[#007C91] hover:bg-[#006b7d] text-white"
                      >
                        Book Appointment
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredDoctors.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-[#212121] mb-2">No doctors found</h3>
                <p className="text-[#555555] mb-6">Try adjusting your search criteria or browse all available doctors</p>
                <Button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedSpecialty('');
                    handleSearch();
                  }}
                  className="bg-[#43A047] hover:bg-[#2E7D32] text-white px-8 py-3 rounded-full"
                >
                  View All Doctors
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Quick Specialties Section */}
      {!showResults && (
        <section className="py-20 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#212121] mb-4">Popular Specialties</h2>
              <p className="text-xl text-[#555555]">Find doctors by their area of expertise</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {specializations.slice(1, 10).map((specialty, index) => (
                <button
                  key={specialty}
                  onClick={() => {
                    setSelectedSpecialty(specialty);
                    handleSearch();
                  }}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#007C91] transition-all duration-300 group"
                >
                  <div className="text-3xl mb-3">
                    {index % 4 === 0 ? '❤️' : index % 4 === 1 ? '🧠' : index % 4 === 2 ? '👶' : '🦴'}
                  </div>
                  <p className="font-semibold text-[#212121] group-hover:text-[#007C91] transition-colors">
                    {specialty}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}