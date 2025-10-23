import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, HeadphonesIcon, AlertCircle } from "lucide-react";
import { useState } from "react";

export function ContactSupport() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
    setFormData({ name: '', email: '', message: '' });
  };

  const supportOptions = [
    {
      icon: HeadphonesIcon,
      title: "Customer Support",
      description: "Get help with your account, bookings, and technical issues",
      contact: "support@healthyclinic.com",
      availability: "24/7"
    },
    {
      icon: Phone,
      title: "Emergency Hotline",
      description: "Immediate medical assistance for urgent health concerns",
      contact: "+1 (555) 911-HELP",
      availability: "24/7"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support through our website chat widget",
      contact: "Available on all pages",
      availability: "Mon-Fri 9AM-6PM"
    }
  ];

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "Simply choose your doctor, select a date and time, and confirm your booking. It takes less than 2 minutes!"
    },
    {
      question: "Are the consultations secure?",
      answer: "Yes, all consultations are HIPAA compliant with end-to-end encryption to protect your privacy."
    },
    {
      question: "Can I cancel or reschedule?",
      answer: "You can cancel or reschedule appointments up to 24 hours before your scheduled time through your dashboard."
    },
    {
      question: "Do you accept insurance?",
      answer: "We accept most major insurance plans. Check with your provider or contact our support team for verification."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300A86B' fill-opacity='0.1'%3E%3Cpath d='M54.627 36.627l-12.728-12.728L29.627 36.627l12.728 12.728z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#C8E6C9]/30 rounded-full px-4 py-2 mb-6">
            <Phone className="w-4 h-4 text-[#00A86B]" />
            <span className="text-sm font-semibold text-[#00A86B]">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
            Contact &{' '}
            <span className="text-[#00A86B] relative">
              Support
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#C8E6C9] rounded-full" />
            </span>
          </h2>
          
          <p className="text-xl text-[#333333]/70 max-w-3xl mx-auto leading-relaxed">
            Need help? Our dedicated support team is here to assist you 24/7. 
            Reach out through any of our convenient channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#00A86B]/10">
              <h3 className="text-2xl font-bold text-[#333333] mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-[#333333] mb-2 block">Your Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    className="h-12 border-2 border-[#C8E6C9]/50 focus:border-[#00A86B] transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-[#333333] mb-2 block">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    className="h-12 border-2 border-[#C8E6C9]/50 focus:border-[#00A86B] transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-[#333333] mb-2 block">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us how we can help you..."
                    className="min-h-[120px] border-2 border-[#C8E6C9]/50 focus:border-[#00A86B] transition-colors resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#00A86B] hover:bg-[#008A5C] text-white h-12 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map Widget Placeholder */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#00A86B]/10">
              <h3 className="text-xl font-bold text-[#333333] mb-4">Our Locations</h3>
              <div className="bg-[#C8E6C9]/20 rounded-lg h-48 flex items-center justify-center border border-[#00A86B]/20">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#00A86B] mx-auto mb-2" />
                  <p className="text-[#333333] font-medium">Interactive Map</p>
                  <p className="text-sm text-[#333333]/60">Clinic locations worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Options & FAQ */}
          <div className="space-y-8">
            
            {/* Support Options */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#333333] mb-6">Quick Support</h3>
              
              {supportOptions.map((option, index) => (
                <div
                  key={index}
                  className="group bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#00A86B]/10 hover:shadow-xl hover:border-[#00A86B]/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#C8E6C9]/30 rounded-lg flex items-center justify-center group-hover:bg-[#00A86B] group-hover:scale-110 transition-all duration-300">
                      <option.icon className="w-6 h-6 text-[#00A86B] group-hover:text-white transition-colors" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-[#333333] mb-2 group-hover:text-[#00A86B] transition-colors">
                        {option.title}
                      </h4>
                      <p className="text-[#333333]/70 text-sm mb-2">
                        {option.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#00A86B] font-semibold text-sm">
                          {option.contact}
                        </span>
                        <span className="text-xs text-[#333333]/60 bg-[#C8E6C9]/20 px-2 py-1 rounded-full">
                          {option.availability}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#00A86B]/10">
              <h3 className="text-xl font-bold text-[#333333] mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-[#C8E6C9]/30 pb-4 last:border-b-0"
                  >
                    <h4 className="font-semibold text-[#333333] mb-2 flex items-start">
                      <AlertCircle className="w-4 h-4 text-[#00A86B] mr-2 mt-0.5 flex-shrink-0" />
                      {faq.question}
                    </h4>
                    <p className="text-[#333333]/70 text-sm leading-relaxed ml-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-[#C8E6C9]/30">
                <p className="text-sm text-[#333333]/60 text-center">
                  Need more help?{' '}
                  <span className="text-[#00A86B] font-semibold cursor-pointer hover:underline">
                    Visit our Help Center
                  </span>
                </p>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-red-800 mb-2">Medical Emergency?</h4>
                  <p className="text-red-700 text-sm mb-3">
                    If you're experiencing a medical emergency, please call 911 immediately or visit your nearest emergency room.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2">
                    Call Emergency Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-16 bg-[#00A86B] text-white rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <Clock className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-bold">24/7 Available</h4>
              <p className="text-sm opacity-90">Round the clock support</p>
            </div>
            <div className="space-y-2">
              <Phone className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-bold">+1 (555) 123-HEALTH</h4>
              <p className="text-sm opacity-90">Main support line</p>
            </div>
            <div className="space-y-2">
              <Mail className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-bold">support@healthyclinic.com</h4>
              <p className="text-sm opacity-90">Email us anytime</p>
            </div>
            <div className="space-y-2">
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-bold">Worldwide</h4>
              <p className="text-sm opacity-90">Serving 50+ countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}