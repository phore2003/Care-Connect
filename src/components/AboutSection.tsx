import { Shield, Clock, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#E3F2FD] to-[#F5F5F5] rounded-3xl p-12 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#007C91] to-[#43A047] rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#007C91]" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-md inline-block">
                  <span className="text-[#007C91] font-semibold">📊 Clinic Dashboard</span>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md inline-block ml-4">
                  <span className="text-[#43A047] font-semibold">📅 Appointment Booking</span>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md inline-block">
                  <span className="text-[#7E57C2] font-semibold">📋 Patient Records</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-[#212121] mb-6">
                Why Choose Our System?
              </h2>
              <p className="text-lg text-[#555555] leading-relaxed mb-8">
                Our comprehensive clinic management system streamlines your healthcare operations, 
                making it easier to focus on what matters most - your patients.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#007C91] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#212121] mb-2">Secure & Compliant</h3>
                  <p className="text-[#555555]">
                    HIPAA compliant with end-to-end encryption to protect patient data and maintain privacy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#43A047] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#212121] mb-2">Time-Saving Automation</h3>
                  <p className="text-[#555555]">
                    Automate scheduling, reminders, and administrative tasks to save hours every day.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#7E57C2] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#212121] mb-2">Better Patient Experience</h3>
                  <p className="text-[#555555]">
                    Provide seamless booking, instant confirmations, and easy access to medical records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}