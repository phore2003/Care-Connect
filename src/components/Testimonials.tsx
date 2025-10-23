import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Martinez",
      role: "Marketing Manager",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwxfHx8fDE3NTk2ODUyNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial: "Healthy Clinic has completely transformed how I manage my healthcare. The online booking system is incredibly easy to use, and I love being able to consult with doctors from the comfort of my home. The doctors are professional and thorough.",
      location: "New York, NY",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Michael Johnson",
      role: "Software Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzU5Njg1MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial: "As someone with a busy schedule, Healthy Clinic has been a game-changer. I can book appointments during lunch breaks and get quality medical advice without taking time off work. The digital health records feature is fantastic!",
      location: "San Francisco, CA",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Teacher",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFzaWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5Njg1MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial: "The peace of mind that Healthy Clinic provides is invaluable. Having 24/7 access to healthcare professionals means I can get help whenever I need it. The platform is user-friendly and the doctors are incredibly knowledgeable.",
      location: "Chicago, IL",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Small Business Owner",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGhpc3BhbmljfGVufDF8fHx8MTc1OTY4NTI2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial: "Running a business means I can't always get to a doctor's office during regular hours. Healthy Clinic's flexible scheduling and telemedicine options have been perfect for my lifestyle. Highly recommend to other entrepreneurs!",
      location: "Austin, TX",
      date: "1 week ago"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#C8E6C9]/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300A86B' fill-opacity='0.1'%3E%3Cpath d='M30 0c16.569 0 30 13.431 30 30S46.569 60 30 60 0 46.569 0 30 13.431 0 30 0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#C8E6C9]/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-[#00A86B] fill-current" />
            <span className="text-sm font-semibold text-[#00A86B]">Patient Reviews</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
            What Our Patients{' '}
            <span className="text-[#00A86B] relative">
              Say
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#C8E6C9] rounded-full" />
            </span>
          </h2>
          
          <p className="text-xl text-[#333333]/70 max-w-3xl mx-auto leading-relaxed">
            Real experiences from thousands of satisfied patients who trust Healthy Clinic 
            for their healthcare needs.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-[#00A86B]/10 relative overflow-hidden">
            
            {/* Background Quote */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-24 h-24 text-[#00A86B]" />
            </div>
            
            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-[#333333] leading-relaxed text-center mb-8 font-medium">
                "{testimonials[currentTestimonial].testimonial}"
              </blockquote>
              
              {/* Patient Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#C8E6C9]/30">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center">
                  <h4 className="text-lg font-bold text-[#333333]">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-[#00A86B] font-semibold">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-sm text-[#333333]/60">
                    {testimonials[currentTestimonial].location} • {testimonials[currentTestimonial].date}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-[#00A86B]/20 flex items-center justify-center hover:bg-[#00A86B] hover:text-white transition-all duration-200 group"
          >
            <ChevronLeft className="w-6 h-6 text-[#00A86B] group-hover:text-white" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-[#00A86B]/20 flex items-center justify-center hover:bg-[#00A86B] hover:text-white transition-all duration-200 group"
          >
            <ChevronRight className="w-6 h-6 text-[#00A86B] group-hover:text-white" />
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentTestimonial
                  ? 'bg-[#00A86B] scale-125'
                  : 'bg-[#C8E6C9] hover:bg-[#00A86B]/50'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group bg-white/40 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:shadow-lg cursor-pointer ${
                index === currentTestimonial
                  ? 'border-[#00A86B] shadow-lg scale-105'
                  : 'border-[#00A86B]/10 hover:border-[#00A86B]/30'
              }`}
              onClick={() => goToTestimonial(index)}
            >
              {/* Patient Avatar & Info */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#C8E6C9]/30">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#333333] text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-[#00A86B]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Preview */}
              <p className="text-sm text-[#333333]/70 leading-relaxed line-clamp-3">
                "{testimonial.testimonial.substring(0, 120)}..."
              </p>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#00A86B]/10">
            <div className="text-3xl font-bold text-[#00A86B] mb-2">4.9★</div>
            <p className="text-[#333333]/70 font-medium">Average Rating</p>
            <p className="text-sm text-[#333333]/50">From 10,000+ reviews</p>
          </div>
          <div className="text-center bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#00A86B]/10">
            <div className="text-3xl font-bold text-[#00A86B] mb-2">98%</div>
            <p className="text-[#333333]/70 font-medium">Satisfaction Rate</p>
            <p className="text-sm text-[#333333]/50">Patient satisfaction</p>
          </div>
          <div className="text-center bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#00A86B]/10">
            <div className="text-3xl font-bold text-[#00A86B] mb-2">50K+</div>
            <p className="text-[#333333]/70 font-medium">Happy Patients</p>
            <p className="text-sm text-[#333333]/50">Trusted by families</p>
          </div>
        </div>
      </div>
    </section>
  );
}