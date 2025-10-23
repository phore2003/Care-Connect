import { Heart, Mail, Phone, MapPin, ChevronUp, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface FooterProps {
  onBookAppointment?: () => void;
  onFindDoctors?: () => void;
}

export function Footer({ onBookAppointment, onFindDoctors }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    aboutUs: [
      { label: "Our Story", href: "#" },
      { label: "Mission & Vision", href: "#" },
      { label: "Leadership Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press & Media", href: "#" }
    ],
    quickLinks: [
      { label: "Book Appointment", href: "#" },
      { label: "Find Doctors", href: "#" },
      { label: "Health Records", href: "#" },
      { label: "Prescriptions", href: "#" },
      { label: "Lab Results", href: "#" }
    ],
    support: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Live Chat", href: "#" },
      { label: "Emergency", href: "#" },
      { label: "Technical Support", href: "#" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "HIPAA Compliance", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Data Security", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#00A86B] to-[#008A5C] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 text-white relative">
                    {/* Stethoscope icon */}
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M8.2 14c0-2.4-1.6-4-4-4s-4 1.6-4 4 1.6 4 4 4 4-1.6 4-4m0 0c0 1.4-.4 2.8-1.2 4L12 22l5-4c-.8-1.2-1.2-2.6-1.2-4 0-2.4 1.6-4 4-4s4 1.6 4 4-1.6 4-4 4c-.6 0-1.2-.1-1.7-.4L12 22l-6.1-4.6c-.5.3-1.1.6-1.7.6-2.4 0-4-1.6-4-4s1.6-4 4-4c.9 0 1.7.3 2.3.8L12 6l5.7 4.8c.6-.5 1.4-.8 2.3-.8 2.4 0 4 1.6 4 4"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Healthy Clinic</h3>
                  <p className="text-white/80 text-sm">Your Health, Just One Click Away</p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-white/80 leading-relaxed max-w-md">
                Experience the future of healthcare with our comprehensive digital platform. 
                Connect with certified doctors, book appointments instantly, and manage your 
                health records securely.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-white/60" />
                  <span className="text-white/80">+1 (555) 123-HEALTH</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-white/60" />
                  <span className="text-white/80">support@healthyclinic.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-white/60" />
                  <span className="text-white/80">Serving 50+ countries worldwide</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 transform hover:scale-110"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-bold text-lg mb-6">About Us</h4>
              <ul className="space-y-3">
                {footerLinks.aboutUs.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        if (link.label === "Book Appointment") {
                          onBookAppointment?.();
                        } else if (link.label === "Find Doctors") {
                          onFindDoctors?.();
                        }
                      }}
                      className="text-white/80 hover:text-white transition-colors duration-200 text-sm text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Emergency Notice */}
              <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h5 className="font-semibold text-sm mb-2 flex items-center">
                  <Heart className="w-4 h-4 mr-2 text-red-300" />
                  Emergency?
                </h5>
                <p className="text-xs text-white/80 mb-2">
                  For medical emergencies, call 911 immediately.
                </p>
                <a
                  href="tel:911"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                >
                  Call 911
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 py-8">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">Stay Updated with Health Tips</h4>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest health insights, wellness tips, 
              and updates from Healthy Clinic.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 w-full sm:w-auto px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="bg-white text-[#00A86B] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm">
                © 2025 Healthy Clinic. All Rights Reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                HIPAA Compliant • SOC 2 Certified • ISO 27001 Certified
              </p>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#00A86B] hover:bg-[#008A5C] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </footer>
  );
}