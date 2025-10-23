import { Button } from "./ui/button";
import { ArrowLeft, Heart, Users, Award, Target } from "lucide-react";

interface AboutUsPageProps {
  onBack: () => void;
  onBookAppointment?: () => void;
}

export function AboutUsPage({ onBack, onBookAppointment }: AboutUsPageProps) {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      specialty: "Cardiology",
      image: "👩‍⚕️"
    },
    {
      name: "Dr. Michael Chen",
      role: "Head of Technology",
      specialty: "Digital Health",
      image: "👨‍⚕️"
    },
    {
      name: "Dr. Emily Brown",
      role: "Patient Care Director",
      specialty: "General Medicine",
      image: "👩‍⚕️"
    },
    {
      name: "James Wilson",
      role: "CEO & Founder",
      specialty: "Healthcare Innovation",
      image: "👨‍💼"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-[#007C91]" />,
      title: "Patient-Centered Care",
      description: "Every decision we make is guided by what's best for our patients' health and wellbeing."
    },
    {
      icon: <Users className="w-8 h-8 text-[#43A047]" />,
      title: "Collaborative Approach",
      description: "We believe in bringing together the best medical professionals for comprehensive care."
    },
    {
      icon: <Award className="w-8 h-8 text-[#7E57C2]" />,
      title: "Excellence in Service",
      description: "We strive for the highest standards in medical care and patient experience."
    },
    {
      icon: <Target className="w-8 h-8 text-[#007C91]" />,
      title: "Innovation Focus",
      description: "We leverage cutting-edge technology to make healthcare more accessible and efficient."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#E3F2FD] relative overflow-hidden">
        {/* Back button */}
        <div className="absolute top-8 left-8 z-10">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-[#007C91] hover:text-[#006b7d] hover:bg-white/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#007C91] mb-6">
              About Us
            </h1>
            <p className="text-xl text-[#555555] max-w-3xl mx-auto">
              Simplifying healthcare with digital solutions that connect patients with trusted medical professionals
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-[#007C91]/10 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#43A047]/10 rounded-full"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-[#7E57C2]/10 rounded-full"></div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Illustration placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#E3F2FD] to-[#F5F5F5] rounded-3xl p-12 text-center">
                <div className="space-y-6">
                  <div className="text-6xl">🏥</div>
                  <div className="flex justify-center space-x-4">
                    <div className="text-4xl">👨‍⚕️</div>
                    <div className="text-4xl">👩‍⚕️</div>
                    <div className="text-4xl">👨‍⚕️</div>
                  </div>
                  <div className="text-2xl">💻</div>
                  <p className="text-[#555555] font-medium">
                    Digital Healthcare Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#212121] mb-4">Our Mission</h2>
                <p className="text-[#555555] text-lg leading-relaxed">
                  We aim to make healthcare easier by connecting doctors and patients digitally, 
                  saving time and improving care. Our platform bridges the gap between traditional 
                  healthcare and modern technology, ensuring that quality medical care is accessible 
                  to everyone, anywhere, anytime.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#212121] mb-4">Our Vision</h2>
                <p className="text-[#555555] text-lg leading-relaxed">
                  To create a world where healthcare is seamlessly integrated into daily life, 
                  where patients can access quality medical care with just a few clicks, and where 
                  healthcare professionals can provide the best possible care using cutting-edge technology.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#212121] mb-4">Our Goals</h2>
                <ul className="space-y-3 text-[#555555] text-lg">
                  <li className="flex items-start">
                    <span className="text-[#43A047] mr-3 mt-1">✓</span>
                    Reduce waiting times and improve appointment scheduling
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#43A047] mr-3 mt-1">✓</span>
                    Enhance doctor-patient communication through digital tools
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#43A047] mr-3 mt-1">✓</span>
                    Provide secure and accessible health record management
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#43A047] mr-3 mt-1">✓</span>
                    Make quality healthcare affordable and accessible to all
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#212121] mb-4">Our Values</h2>
            <p className="text-xl text-[#555555] max-w-2xl mx-auto">
              The principles that guide everything we do in transforming healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E3F2FD] to-[#F5F5F5] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#212121] mb-4">{value.title}</h3>
                <p className="text-[#555555] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#212121] mb-4">Meet Our Team</h2>
            <p className="text-xl text-[#555555] max-w-2xl mx-auto">
              Dedicated professionals working together to revolutionize healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-[#007C91] to-[#43A047] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{member.image}</span>
                </div>
                <h3 className="text-lg font-bold text-[#212121] mb-2">{member.name}</h3>
                <p className="text-[#007C91] font-medium mb-1">{member.role}</p>
                <p className="text-[#555555] text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#007C91] to-[#43A047]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of patients and doctors who trust our platform for their healthcare needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#007C91] hover:bg-gray-100 px-8 py-3 rounded-full font-bold shadow-lg">
              Find a Doctor
            </Button>
            <Button 
              onClick={onBookAppointment}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#007C91] px-8 py-3 rounded-full font-bold"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}