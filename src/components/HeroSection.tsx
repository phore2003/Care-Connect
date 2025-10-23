import { Button } from "./ui/button";
import { ChevronRight, CheckCircle, Heart, Shield, Clock, Users } from "lucide-react";

interface HeroSectionProps {
  onBookAppointment?: () => void;
  onViewDoctors?: () => void;
}

export function HeroSection({ onBookAppointment, onViewDoctors }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwYnJpZ2h0JTIwY2xlYW4lMjBlbnZpcm9ubWVudCUyMGRvY3RvcnMlMjBwYXRpZW50c3xlbnwxfHx8fDE3NTk2ODQ3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300A86B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Main Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#C8E6C9]/20 backdrop-blur-sm border border-[#00A86B]/20 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-[#00A86B]" />
              <span className="text-sm font-medium text-[#333333]">Trusted by 50,000+ Patients</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#333333] leading-tight">
                Your Health,{' '}
                <span className="text-[#00A86B] relative">
                  Just One Click
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#C8E6C9] rounded-full" />
                </span>{' '}
                Away.
              </h1>
              
              <p className="text-xl text-[#333333]/80 leading-relaxed max-w-2xl">
                Book appointments online, consult certified doctors, and access healthcare from anywhere. 
                Experience the future of healthcare with our trusted platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onBookAppointment}
                className="bg-[#00A86B] hover:bg-[#008A5C] text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 group"
              >
                Book Appointment
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={onViewDoctors}
                variant="outline" 
                className="border-2 border-[#00A86B] text-[#00A86B] hover:bg-[#00A86B] hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                View Doctors
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-[#00A86B]/10">
                <div className="w-10 h-10 bg-[#C8E6C9] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#00A86B]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#333333]">Certified Clinics</p>
                  <p className="text-xs text-[#333333]/60">Verified & Licensed</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-[#00A86B]/10">
                <div className="w-10 h-10 bg-[#C8E6C9] rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#00A86B]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#333333]">Verified Doctors</p>
                  <p className="text-xs text-[#333333]/60">Expert Professionals</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-[#00A86B]/10">
                <div className="w-10 h-10 bg-[#C8E6C9] rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#00A86B]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#333333]">24/7 Support</p>
                  <p className="text-xs text-[#333333]/60">Always Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Healthcare Illustration */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main Illustration Container */}
              <div className="relative w-full max-w-lg mx-auto">
                {/* Background Glassmorphism Card */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 transform rotate-3" />
                
                {/* Main Content Card */}
                <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-8 transform -rotate-1">
                  {/* Doctor Consultation Image */}
                  <div className="relative mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1758691463620-188ca7c1a04f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBjb25zdWx0YXRpb24lMjBsYXB0b3AlMjB0ZWxlbWVkaWNpbmV8ZW58MXx8fHwxNzU5Njg0NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Online consultation"
                      className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                    
                    {/* Floating Status Cards */}
                    <div className="absolute -top-4 -right-4 bg-[#00A86B] text-white px-4 py-2 rounded-full shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        <span className="text-sm font-semibold">Online</span>
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm border border-[#00A86B]/20 px-4 py-2 rounded-full shadow-lg">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-[#00A86B]" />
                        <span className="text-sm font-semibold text-[#333333]">1,247 patients today</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Booking Interface Mockup */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-[#333333]">Book Your Appointment</h3>
                    
                    <div className="space-y-3">
                      <div className="bg-[#C8E6C9]/30 rounded-lg p-3 border border-[#00A86B]/20">
                        <p className="text-sm font-medium text-[#333333]">Dr. Sarah Johnson</p>
                        <p className="text-xs text-[#333333]/60">Cardiologist • Available Now</p>
                      </div>
                      
                      <div className="flex space-x-2">
                        <div className="flex-1 bg-[#C8E6C9]/30 rounded-lg p-3 border border-[#00A86B]/20">
                          <p className="text-xs text-[#333333]/60">Date</p>
                          <p className="text-sm font-medium text-[#333333]">Today</p>
                        </div>
                        <div className="flex-1 bg-[#C8E6C9]/30 rounded-lg p-3 border border-[#00A86B]/20">
                          <p className="text-xs text-[#333333]/60">Time</p>
                          <p className="text-sm font-medium text-[#333333]">3:30 PM</p>
                        </div>
                      </div>
                      
                      <button className="w-full bg-[#00A86B] text-white py-3 rounded-lg font-semibold hover:bg-[#008A5C] transition-colors">
                        Confirm Booking
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-8 left-8 w-16 h-16 bg-[#C8E6C9]/40 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                  <Heart className="w-8 h-8 text-[#00A86B]" />
                </div>
                
                <div className="absolute -bottom-8 right-8 w-20 h-20 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#00A86B]/20">
                  <Shield className="w-10 h-10 text-[#00A86B]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#00A86B] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#00A86B] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}