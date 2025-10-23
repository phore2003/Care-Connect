import { Clock, Smartphone, Globe, Heart, Check } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    "Saves Time",
    "Easy Digital Prescriptions", 
    "Access Anytime, Anywhere",
    "Better Patient Care"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#E3F2FD] to-[#F5F5F5] rounded-3xl p-12 text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-[#007C91] to-[#43A047] rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <Smartphone className="w-12 h-12 text-[#007C91]" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-md flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-[#007C91]" />
                  <span className="text-[#212121] font-semibold">Efficient Scheduling</span>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md flex items-center space-x-3 ml-8">
                  <Globe className="w-6 h-6 text-[#43A047]" />
                  <span className="text-[#212121] font-semibold">Cloud Access</span>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-[#7E57C2]" />
                  <span className="text-[#212121] font-semibold">Patient Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-[#212121] mb-6">
                Why Our System is Better
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed mb-8">
                Experience the difference with our comprehensive clinic management solution 
                designed to enhance efficiency and improve patient satisfaction.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#43A047] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-[#212121] font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#007C91]/10 to-[#43A047]/10 rounded-2xl p-6 border border-[#007C91]/20">
              <h3 className="text-xl font-semibold text-[#212121] mb-3">
                🚀 Ready to Transform Your Clinic?
              </h3>
              <p className="text-[#555555] mb-4">
                Join thousands of healthcare providers who have already modernized their practice with our platform.
              </p>
              <div className="flex items-center space-x-2 text-[#007C91] font-semibold">
                <span>Starting at just $29/month</span>
                <span className="text-[#43A047]">✓ 30-day free trial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}