import { Clock, Shield, Heart, Calendar, Video, FileText, Phone, Globe, Star } from "lucide-react";

export function CoreFeatures() {
  const features = [
    {
      icon: Calendar,
      title: "Instant Online Booking",
      description: "Book appointments in seconds with verified doctors. Choose your preferred time slot and get instant confirmation.",
      color: "bg-[#00A86B]",
      bgColor: "bg-[#C8E6C9]/20",
      borderColor: "border-[#00A86B]/20"
    },
    {
      icon: Clock,
      title: "24/7 Consultation",
      description: "Access healthcare anytime, anywhere. Our doctors are available round the clock for your medical needs.",
      color: "bg-[#00A86B]",
      bgColor: "bg-[#C8E6C9]/20",
      borderColor: "border-[#00A86B]/20"
    },
    {
      icon: FileText,
      title: "Digital Health Records",
      description: "Securely store and access your medical reports online. All your health data in one convenient place.",
      color: "bg-[#00A86B]",
      bgColor: "bg-[#C8E6C9]/20",
      borderColor: "border-[#00A86B]/20"
    }
  ];

  const additionalFeatures = [
    {
      icon: Video,
      title: "Video Consultations",
      description: "Face-to-face consultations from the comfort of your home"
    },
    {
      icon: Phone,
      title: "Emergency Support",
      description: "24/7 emergency helpline for urgent medical assistance"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "End-to-end encryption ensures your data stays protected"
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Available in multiple languages for better accessibility"
    },
    {
      icon: Star,
      title: "Verified Doctors",
      description: "All doctors are licensed and verified professionals"
    },
    {
      icon: Heart,
      title: "Health Monitoring",
      description: "Track your health progress with detailed analytics"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#C8E6C9]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#C8E6C9]/30 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-[#00A86B]" />
            <span className="text-sm font-semibold text-[#00A86B]">Key Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
            Why Choose{' '}
            <span className="text-[#00A86B] relative">
              Healthy Clinic
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#C8E6C9] rounded-full" />
            </span>
          </h2>
          
          <p className="text-xl text-[#333333]/70 max-w-3xl mx-auto leading-relaxed">
            Experience healthcare like never before with our comprehensive digital platform designed 
            for your convenience and peace of mind.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border ${feature.borderColor} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 rounded-2xl" 
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300A86B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                   }} />
              
              {/* Icon */}
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 text-[#00A86B]`} />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-[#333333] mb-4 group-hover:text-[#00A86B] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-[#333333]/70 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-[#00A86B]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C8E6C9]/20 via-transparent to-[#C8E6C9]/20 rounded-3xl" />
          
          <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl border border-[#00A86B]/10 p-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-[#333333] mb-4">
                Complete Healthcare Solutions
              </h3>
              <p className="text-[#333333]/70 max-w-2xl mx-auto">
                Discover all the features that make Healthy Clinic your trusted healthcare partner
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-[#00A86B]/10 hover:bg-[#C8E6C9]/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-10 h-10 bg-[#C8E6C9]/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#00A86B] group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-[#00A86B] group-hover:text-white transition-colors" />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#333333] mb-1 group-hover:text-[#00A86B] transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[#333333]/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-full p-2 border border-[#00A86B]/20 shadow-lg">
            <div className="bg-[#00A86B] text-white px-6 py-3 rounded-full font-semibold cursor-pointer hover:bg-[#008A5C] transition-colors">
              Get Started Today
            </div>
            <span className="text-[#333333] pr-4">Experience the difference</span>
          </div>
        </div>
      </div>
    </section>
  );
}