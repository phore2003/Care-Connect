import { Search, Calendar, CheckCircle, Video, ArrowRight } from "lucide-react";

interface HowItWorksProps {
  onBookAppointment?: () => void;
}

export function HowItWorks({ onBookAppointment }: HowItWorksProps) {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: "Choose Doctor",
      description: "Browse our network of verified healthcare professionals and select the right specialist for your needs.",
      color: "bg-[#00A86B]",
      bgColor: "bg-[#C8E6C9]/20",
      delay: "0ms"
    },
    {
      step: 2,
      icon: Calendar,
      title: "Select Date & Time",
      description: "Pick your preferred appointment slot from available times that fit your schedule perfectly.",
      color: "bg-[#00A86B]",
      bgColor: "bg-[#C8E6C9]/20",
      delay: "200ms"
    },
    {
      step: 3,
      icon: CheckCircle,
      title: "Confirm Appointment",
      description: "Complete your booking with secure payment and receive instant confirmation via email and SMS.",
      color: "bg-[#00A86B]",
      bgColor: "bg-[#C8E6C9]/20",
      delay: "400ms"
    },
    {
      step: 4,
      icon: Video,
      title: "Join Consultation",
      description: "Connect with your doctor through our secure video platform for professional medical consultation.",
      color: "bg-[#00A86B]",
      bgColor: "bg-[#C8E6C9]/20",
      delay: "600ms"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#C8E6C9]/10 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300A86B' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0zm40 40h40v40H40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#C8E6C9]/30 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-[#00A86B]" />
            <span className="text-sm font-semibold text-[#00A86B]">Simple Process</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
            Easy Appointment{' '}
            <span className="text-[#00A86B] relative">
              Steps
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#C8E6C9] rounded-full" />
            </span>
          </h2>
          
          <p className="text-xl text-[#333333]/70 max-w-3xl mx-auto leading-relaxed">
            Book your healthcare appointment in just 4 simple steps. Quick, secure, and convenient 
            for all your medical consultation needs.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#C8E6C9]/30 via-[#00A86B] to-[#C8E6C9]/30 rounded-full" />
          
          {/* Steps Grid */}
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="group relative"
                style={{ animationDelay: step.delay }}
              >
                {/* Step Card */}
                <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#00A86B]/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1">
                  
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C8E6C9]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#00A86B] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg font-bold text-white">{step.step}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto mt-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <step.icon className="w-8 h-8 text-[#00A86B]" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center relative z-10">
                    <h3 className="text-xl font-bold text-[#333333] mb-4 group-hover:text-[#00A86B] transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-[#333333]/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Pulse Animation */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-[#00A86B] animate-pulse transition-opacity duration-300" />
                </div>

                {/* Arrow Connector - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 z-20">
                    <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[#00A86B]">
                      <ArrowRight className="w-4 h-4 text-[#00A86B]" />
                    </div>
                  </div>
                )}

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <div className="w-8 h-8 bg-[#C8E6C9]/30 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-[#00A86B] rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-[#00A86B]/20 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#333333] mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-[#333333]/70 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied patients who trust Healthy Clinic for their healthcare needs. 
              Book your first appointment today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={onBookAppointment}
                className="bg-[#00A86B] hover:bg-[#008A5C] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Book Your First Appointment</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <div className="text-sm text-[#333333]/60">
                <span className="font-semibold text-[#00A86B]">Free consultation</span> for first-time users
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#00A86B]/10">
            <div className="text-2xl font-bold text-[#00A86B] mb-2">2 min</div>
            <p className="text-sm text-[#333333]/70">Average Booking Time</p>
          </div>
          <div className="text-center bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#00A86B]/10">
            <div className="text-2xl font-bold text-[#00A86B] mb-2">24/7</div>
            <p className="text-sm text-[#333333]/70">Support Available</p>
          </div>
          <div className="text-center bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#00A86B]/10">
            <div className="text-2xl font-bold text-[#00A86B] mb-2">99.9%</div>
            <p className="text-sm text-[#333333]/70">Uptime Guarantee</p>
          </div>
          <div className="text-center bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#00A86B]/10">
            <div className="text-2xl font-bold text-[#00A86B] mb-2">Secure</div>
            <p className="text-sm text-[#333333]/70">HIPAA Compliant</p>
          </div>
        </div>
      </div>
    </section>
  );
}