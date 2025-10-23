import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { CoreFeatures } from "./components/CoreFeatures";
import { HowItWorks } from "./components/HowItWorks";
import { ContactSupport } from "./components/ContactSupport";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { ChatWidget } from "./components/ChatWidget";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { DoctorDashboard } from "./components/DoctorDashboard";
import { PatientDashboard } from "./components/PatientDashboard";
import { AboutUsPage } from "./components/AboutUsPage";
import { FindDoctorPage } from "./components/FindDoctorPage";
import { BookAppointmentPage } from "./components/BookAppointmentPage";
import { DoctorProfileCardDemo } from "./components/DoctorProfileCardDemo";
import { DoctorProfileSectionDemo } from "./components/DoctorProfileSectionDemo";

type CurrentView = 'landing' | 'about' | 'find-doctor' | 'book-appointment' | 'login' | 'register' | 'doctor-dashboard' | 'patient-dashboard' | 'profile-demo' | 'profile-section-demo';
type UserRole = 'doctor' | 'patient' | null;

interface User {
  role: UserRole;
  name: string;
}

export default function App() {
  const [currentView, setCurrentView] = useState<CurrentView>('landing');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (role: 'doctor' | 'patient', email: string, password: string) => {
    // In a real app, this would make an API call to authenticate
    console.log('Login attempt:', { role, email, password });
    
    // Mock authentication - extract name from email
    const name = email.split('@')[0].replace('.', ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    setUser({ role, name });
    setCurrentView(role === 'doctor' ? 'doctor-dashboard' : 'patient-dashboard');
  };

  const handleRegister = (role: 'doctor' | 'patient', formData: any) => {
    // In a real app, this would make an API call to register
    console.log('Registration attempt:', { role, formData });
    
    setUser({ role, name: formData.fullName });
    setCurrentView(role === 'doctor' ? 'doctor-dashboard' : 'patient-dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('landing');
  };

  const handleGoToLogin = () => {
    setCurrentView('login');
  };

  const handleGoToRegister = () => {
    setCurrentView('register');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  const handleNavigate = (view: string) => {
    setCurrentView(view as CurrentView);
  };

  // Render based on current view
  if (currentView === 'profile-demo') {
    return (
      <DoctorProfileCardDemo onBack={handleBackToLanding} />
    );
  }

  if (currentView === 'profile-section-demo') {
    return (
      <DoctorProfileSectionDemo onBack={handleBackToLanding} />
    );
  }

  if (currentView === 'about') {
    return (
      <AboutUsPage 
        onBack={handleBackToLanding} 
        onBookAppointment={() => setCurrentView('book-appointment')}
      />
    );
  }

  if (currentView === 'find-doctor') {
    return (
      <FindDoctorPage 
        onBack={handleBackToLanding} 
        onBookAppointment={() => setCurrentView('book-appointment')}
      />
    );
  }

  if (currentView === 'book-appointment') {
    return (
      <BookAppointmentPage onBack={handleBackToLanding} />
    );
  }

  if (currentView === 'login') {
    return (
      <LoginPage 
        onBack={handleBackToLanding}
        onGoToRegister={handleGoToRegister}
        onLogin={handleLogin}
      />
    );
  }

  if (currentView === 'register') {
    return (
      <RegisterPage 
        onBack={handleBackToLanding}
        onGoToLogin={handleGoToLogin}
        onRegister={handleRegister}
      />
    );
  }

  if (currentView === 'doctor-dashboard' && user?.role === 'doctor') {
    return (
      <DoctorDashboard 
        doctorName={user.name}
        onLogout={handleLogout}
        onBackToHome={handleBackToLanding}
      />
    );
  }

  if (currentView === 'patient-dashboard' && user?.role === 'patient') {
    return (
      <PatientDashboard 
        patientName={user.name}
        onLogout={handleLogout}
      />
    );
  }

  // Default landing page
  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentView={currentView}
        onNavigate={handleNavigate}
        onLogin={handleGoToLogin}
        onRegister={handleGoToRegister}
      />
      <main>
        <HeroSection 
          onBookAppointment={() => setCurrentView('book-appointment')}
          onViewDoctors={() => setCurrentView('find-doctor')}
        />
        <CoreFeatures />
        <HowItWorks onBookAppointment={() => setCurrentView('book-appointment')} />
        <ContactSupport />
        <CTASection onGetStarted={handleGoToRegister} />
      </main>
      <Footer 
        onBookAppointment={() => setCurrentView('book-appointment')}
        onFindDoctors={() => setCurrentView('find-doctor')}
      />
      <ChatWidget />
    </div>
  );
}