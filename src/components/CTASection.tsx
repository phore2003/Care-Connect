import { Button } from "./ui/button";
import { ArrowRight, Check, Star, Shield, Clock } from "lucide-react";

interface CTASectionProps {
  onGetStarted: () => void;
}

export function CTASection({ onGetStarted }: CTASectionProps) {
  const benefits = [
    {
      icon: Check,
      text: "Instant appointment booking"
    },
    {
      icon: Shield,
      text: "100% secure & HIPAA compliant"
    },
    {
      icon: Clock,
      text: "24/7 medical support"
    },
    {
      icon: Star,
      text: "Verified healthcare professionals"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#C8E6C9]/20 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300A86B' fill-opacity='0.1'%3E%3Cpath d='M20 20h40v40H20zm40 0h40v40H60zm0 40h40v40H60zm-40 0h40v40H20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }} />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#C8E6C9]/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#00A86B]/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#C8E6C9]/30 rounded-full blur-lg animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main CTA Container */}
        <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-[#00A86B]/20 overflow-hidden">
          
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C8E6C9]/30 via-transparent to-[#00A86B]/10 rounded-3xl" />
          
          {/* Decorative Elements */}
          <div className="absolute top-8 right-8 w-24 h-24 bg-[#C8E6C9]/20 rounded-full blur-2xl" />
          <div className="absolute bottom-8 left-8 w-32 h-32 bg-[#00A86B]/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Content */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-[#00A86B]/10 backdrop-blur-sm border border-[#00A86B]/20 rounded-full px-4 py-2">
                  <Star className="w-4 h-4 text-[#00A86B] fill-current" />
                  <span className="text-sm font-semibold text-[#00A86B]">Join 50,000+ Happy Patients</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] leading-tight">
                    Ready to Transform Your{' '}
                    <span className="text-[#00A86B] relative">
                      Healthcare Experience?
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#C8E6C9] rounded-full" />
                    </span>
                  </h2>
                  
                  <p className="text-xl text-[#333333]/70 leading-relaxed">
                    Join thousands of patients who have revolutionized their healthcare journey with 
                    Healthy Clinic. Start your path to better health today.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-white/40 backdrop-blur-sm rounded-lg p-3 border border-[#00A86B]/10"
                    >
                      <div className="w-8 h-8 bg-[#C8E6C9]/30 rounded-full flex items-center justify-center">
                        <benefit.icon className="w-4 h-4 text-[#00A86B]" />
                      </div>
                      <span className="text-[#333333] font-medium text-sm">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={onGetStarted}
                    className="bg-[#00A86B] hover:bg-[#008A5C] text-white px-8 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group flex items-center justify-center"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="border-2 border-[#00A86B] text-[#00A86B] hover:bg-[#00A86B] hover:text-white px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Watch Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center space-x-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00A86B]">4.9★</div>
                    <p className="text-xs text-[#333333]/60">App Store Rating</p>
                  </div>
                  <div className="w-px h-12 bg-[#C8E6C9]" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00A86B]">50K+</div>
                    <p className="text-xs text-[#333333]/60">Active Users</p>
                  </div>
                  <div className="w-px h-12 bg-[#C8E6C9]" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00A86B]">24/7</div>
                    <p className="text-xs text-[#333333]/60">Support</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual Elements */}
              <div className="relative">
                
                {/* Main Card Stack */}
                <div className="relative max-w-md mx-auto">
                  
                  {/* Background Cards */}
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg transform rotate-3 scale-95" />
                  <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl shadow-lg transform -rotate-2 scale-90" />
                  
                  {/* Main Card */}
                  <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-[#00A86B]/20">
                    
                    {/* Card Header */}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-[#00A86B] rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <div className="w-8 h-8 text-white">
                          {/* Medical cross icon */}
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                            <path d="M19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#333333]">Start Your Health Journey</h3>
                      <p className="text-[#333333]/70 text-sm">Quick & Easy Registration</p>
                    </div>

                    {/* Progress Steps */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-[#00A86B] rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[#333333] font-medium">Create Account</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-[#00A86B] rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[#333333] font-medium">Choose Your Doctor</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-[#C8E6C9] rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-[#00A86B] rounded-full animate-pulse" />
                        </div>
                        <span className="text-[#333333]/70">Book First Appointment</span>
                      </div>
                    </div>

                    {/* Get Started Button */}
                    <button
                      onClick={onGetStarted}
                      className="w-full mt-6 bg-[#00A86B] hover:bg-[#008A5C] text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Get Started Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#00A86B]/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce">
                    <Star className="w-6 h-6 text-[#00A86B] fill-current" />
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#00A86B]/20">
                    <Shield className="w-8 h-8 text-[#00A86B]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <p className="text-[#333333]/60 mb-6">
            Trusted by leading healthcare providers worldwide
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#00A86B]/10">
              <div className="text-3xl font-bold text-[#00A86B] mb-2">500+</div>
              <p className="text-[#333333]/70">Expert Doctors</p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#00A86B]/10">
              <div className="text-3xl font-bold text-[#00A86B] mb-2">1M+</div>
              <p className="text-[#333333]/70">Consultations</p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#00A86B]/10">
              <div className="text-3xl font-bold text-[#00A86B] mb-2">50+</div>
              <p className="text-[#333333]/70">Countries Served</p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#00A86B]/10">
              <div className="text-3xl font-bold text-[#00A86B] mb-2">98%</div>
              <p className="text-[#333333]/70">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}