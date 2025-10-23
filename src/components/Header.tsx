import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Heart } from "lucide-react";

interface HeaderProps {
  currentView?: string;
  onNavigate?: (view: string) => void;
  onLogin: () => void;
  onRegister: () => void;
}

export function Header({ currentView, onNavigate, onLogin, onRegister }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', value: 'landing' },
    { label: 'About Us', value: 'about' }
  ];

  const handleNavClick = (value: string) => {
    onNavigate?.(value);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'h-16 bg-white/95 backdrop-blur-xl shadow-lg border-b border-[#00A86B]/10' 
            : 'h-20 bg-white/80 backdrop-blur-md shadow-sm'
        }`}
      >
        {/* Green accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00A86B] to-transparent opacity-60" />
        
        {/* Glassmorphism overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/60 to-white/40 backdrop-blur-sm" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
          <div className="flex items-center justify-between h-full">
            
            {/* Left Section - Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => handleNavClick('landing')}
                className="group flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-[#00A86B]/20 rounded-lg p-2 transition-all duration-200"
              >
                {/* Logo Icon - Stethoscope Heart */}
                <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                  {/* Background circle with glassmorphism */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00A86B] to-[#008A5C] rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
                  <div className="absolute inset-0 bg-white/20 rounded-xl" />
                  
                  {/* Stethoscope Heart Icon */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-7 h-7 text-white relative">
                      {/* Custom stethoscope-heart hybrid icon */}
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        {/* Stethoscope elements */}
                        <circle cx="6" cy="8" r="1.5" fill="currentColor" opacity="0.8"/>
                        <circle cx="18" cy="8" r="1.5" fill="currentColor" opacity="0.8"/>
                        <path d="M6 9.5v3c0 0.5 0.5 1 1 1h2" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.9"/>
                        <path d="M18 9.5v3c0 0.5-0.5 1-1 1h-2" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.9"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Pulse effect on hover */}
                  <div className="absolute inset-0 bg-[#00A86B] rounded-xl opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-opacity duration-300" />
                </div>
                
                {/* Logo Text */}
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold text-[#00A86B] leading-tight group-hover:text-[#008A5C] transition-colors duration-200">
                    Healthy Clinic
                  </h1>
                  <span className="text-xs text-[#333333]/70 leading-tight font-medium">
                    Your Health, Just One Click Away
                  </span>
                </div>
              </button>
            </div>

            {/* Center Section - Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <button
                  key={link.value}
                  onClick={() => handleNavClick(link.value)}
                  className={`relative px-4 py-2 text-base font-medium transition-all duration-200 group ${
                    currentView === link.value
                      ? 'text-[#00A86B]'
                      : 'text-[#333333] hover:text-[#00A86B]'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  
                  {/* Hover underline animation */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#00A86B] transform transition-transform duration-300 ${
                    currentView === link.value 
                      ? 'scale-x-100' 
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                  
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-[#00A86B]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </button>
              ))}
            </nav>

            {/* Right Section - Action Buttons (Desktop) */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Login Button - Outlined */}
              <Button
                onClick={onLogin}
                variant="ghost"
                className="relative px-6 py-2.5 text-[#00A86B] border-2 border-[#00A86B] rounded-lg font-semibold transition-all duration-300 hover:bg-[#00A86B] hover:text-white hover:shadow-lg hover:scale-105 group overflow-hidden"
              >
                <span className="relative z-10">Login</span>
                
                {/* Hover fill animation */}
                <div className="absolute inset-0 bg-[#00A86B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
              
              {/* Register Button - Solid */}
              <Button
                onClick={onRegister}
                className="relative px-6 py-2.5 bg-[#00A86B] hover:bg-[#008A5C] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform group overflow-hidden"
              >
                <span className="relative z-10">Register</span>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00A86B] to-[#008A5C] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                variant="ghost"
                className="w-10 h-10 text-[#333333] hover:text-[#00A86B] hover:bg-[#00A86B]/10 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 w-80 h-full bg-white/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#00A86B]/10">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00A86B] to-[#008A5C] rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-[#00A86B]">Healthy Clinic</span>
              </div>
              <Button
                onClick={() => setIsMobileMenuOpen(false)}
                variant="ghost"
                className="w-8 h-8 text-[#333333] hover:text-[#00A86B]"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Navigation Links */}
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => handleNavClick(link.value)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    currentView === link.value
                      ? 'bg-[#00A86B]/10 text-[#00A86B] border-l-4 border-[#00A86B]'
                      : 'text-[#333333] hover:bg-[#00A86B]/5 hover:text-[#00A86B]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            {/* Mobile Action Buttons */}
            <div className="p-6 space-y-3 border-t border-[#00A86B]/10">
              <Button
                onClick={() => {
                  onLogin();
                  setIsMobileMenuOpen(false);
                }}
                variant="ghost"
                className="w-full border-2 border-[#00A86B] text-[#00A86B] hover:bg-[#00A86B] hover:text-white rounded-lg py-3 font-semibold transition-all duration-200"
              >
                Login
              </Button>
              
              <Button
                onClick={() => {
                  onRegister();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-[#00A86B] hover:bg-[#008A5C] text-white rounded-lg py-3 font-semibold shadow-lg transition-all duration-200"
              >
                Register
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="p-6 border-t border-[#00A86B]/10">
              <p className="text-sm text-[#333333]/70 mb-2">Need help?</p>
              <p className="text-sm text-[#00A86B] font-semibold">+1 (555) 123-HEALTH</p>
              <p className="text-sm text-[#00A86B]">support@healthyclinic.com</p>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content overlap */}
      <div className={`${isScrolled ? 'h-16' : 'h-20'} transition-all duration-300`} />
    </>
  );
}