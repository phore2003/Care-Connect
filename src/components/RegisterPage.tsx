import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Progress } from "./ui/progress";
import { 
  Mail, Lock, User, Phone, Calendar, Stethoscope, Heart, Shield, ArrowLeft, 
  Hospital, MapPin, Eye, EyeOff, Upload, FileText, Users, Building, 
  Award, Clock, Droplets, AlertTriangle, Pill, UserPlus, Star, Activity,
  CheckCircle2, ArrowRight, Sparkles
} from "lucide-react";

interface RegisterPageProps {
  onBack: () => void;
  onGoToLogin: () => void;
  onRegister: (role: 'doctor' | 'patient', formData: any) => void;
}

export function RegisterPage({ onBack, onGoToLogin, onRegister }: RegisterPageProps) {
  const [selectedRole, setSelectedRole] = useState<'doctor' | 'patient'>('patient');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  
  const [formData, setFormData] = useState({
    // Common fields
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
    
    // Doctor-specific fields
    licenseNumber: '',
    specialization: '',
    yearsOfExperience: '',
    hospitalName: '',
    workAddress: '',
    
    // Patient-specific fields
    bloodGroup: '',
    address: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelation: '',
  });

  const specializations = [
    'Cardiology', 'Dermatology', 'Pediatrics', 'Orthopedics', 'Gynecology', 
    'Neurology', 'Psychiatry', 'General Medicine', 'Oncology', 'Radiology',
    'Anesthesiology', 'Emergency Medicine', 'Internal Medicine', 'Surgery'
  ];

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const genders = ['Male', 'Female', 'Other', 'Prefer not to say'];
  const relations = ['Spouse', 'Parent', 'Sibling', 'Child', 'Friend', 'Other'];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step: number) => {
    const newErrors: {[key: string]: string} = {};
    
    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    }
    
    if (step === 2) {
      if (!formData.password) newErrors.password = 'Password is required';
      else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
      
      if (selectedRole === 'doctor') {
        if (!formData.licenseNumber.trim()) newErrors.licenseNumber = 'Medical license number is required';
        if (!formData.specialization) newErrors.specialization = 'Specialization is required';
        if (!formData.yearsOfExperience) newErrors.yearsOfExperience = 'Years of experience is required';
        if (!formData.hospitalName.trim()) newErrors.hospitalName = 'Hospital/Clinic name is required';
        if (!formData.workAddress.trim()) newErrors.workAddress = 'Work address is required';
      } else {
        if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood group is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.emergencyContactName.trim()) newErrors.emergencyContactName = 'Emergency contact name is required';
        if (!formData.emergencyContactPhone.trim()) newErrors.emergencyContactPhone = 'Emergency contact phone is required';
        if (!formData.emergencyContactRelation) newErrors.emergencyContactRelation = 'Emergency contact relation is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getPasswordStrength = () => {
    if (formData.password.length === 0) return 0;
    let strength = 0;
    if (formData.password.length >= 8) strength += 25;
    if (/[A-Z]/.test(formData.password)) strength += 25;
    if (/[0-9]/.test(formData.password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(formData.password)) strength += 25;
    return strength;
  };

  const getPasswordStrengthColor = () => {
    const strength = getPasswordStrength();
    if (strength < 25) return 'bg-red-500';
    if (strength < 50) return 'bg-orange-500';
    if (strength < 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    const strength = getPasswordStrength();
    if (strength < 25) return 'Weak';
    if (strength < 50) return 'Fair';
    if (strength < 75) return 'Good';
    return 'Strong';
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(2) || !termsAccepted) {
      if (!termsAccepted) {
        setErrors(prev => ({ ...prev, terms: 'You must agree to Terms & Privacy Policy' }));
      }
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      onRegister(selectedRole, formData);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#f0fdf7] via-white to-[#f8fffe]">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#00A86B]/15 to-[#43A047]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#00A86B]/10 to-[#43A047]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/6 text-[#00A86B]/20 animate-bounce delay-300">
          <Heart className="w-10 h-10" />
        </div>
        <div className="absolute top-1/3 right-1/5 text-[#43A047]/20 animate-bounce delay-700">
          <Activity className="w-8 h-8" />
        </div>
        <div className="absolute bottom-1/3 left-1/5 text-[#00A86B]/15 animate-bounce delay-1000">
          <Star className="w-9 h-9" />
        </div>
        <div className="absolute bottom-1/4 right-1/6 text-[#43A047]/15 animate-bounce delay-500">
          <Sparkles className="w-7 h-7" />
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex items-center justify-between p-6">
        <button 
          onClick={onBack}
          className="group flex items-center space-x-2 px-6 py-3 bg-white/80 backdrop-blur-lg border border-[#00A86B]/20 rounded-2xl text-[#00A86B] hover:bg-[#00A86B] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-semibold">Back to Home</span>
        </button>

        <button 
          onClick={onGoToLogin}
          className="text-sm text-[#00A86B] hover:text-[#43A047] hover:underline transition-all font-medium"
        >
          Already a member? Sign in
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4 py-8">
        <div className="w-full max-w-2xl mx-auto">
          <RegisterCard />
        </div>
      </div>
    </div>
  );

  function RegisterCard() {
    return (
      <div className="relative">
        {/* Enhanced Glassmorphism Card */}
        <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-8 transform transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00A86B]/10 via-transparent to-[#43A047]/10 rounded-3xl blur-xl opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/20 to-white/50 rounded-3xl"></div>
          
          <div className="relative z-10 space-y-8">
            {/* Header with Steps */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00A86B] to-[#43A047] rounded-2xl flex items-center justify-center shadow-lg">
                  <UserPlus className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[#00A86B] to-[#43A047] bg-clip-text text-transparent">
                  Join Healthy Clinic
                </h1>
                <p className="text-[#555555] mt-2">Create your account in just 2 simple steps</p>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-center space-x-4 mt-6">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  currentStep === 1 ? 'bg-[#00A86B]/20 border-2 border-[#00A86B]' : currentStep > 1 ? 'bg-[#43A047]/20' : 'bg-gray-100'
                }`}>
                  {currentStep > 1 ? (
                    <CheckCircle2 className="w-5 h-5 text-[#43A047]" />
                  ) : (
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                      currentStep === 1 ? 'bg-[#00A86B] text-white' : 'bg-gray-400 text-white'
                    }`}>1</span>
                  )}
                  <span className={`text-sm font-medium ${currentStep === 1 ? 'text-[#00A86B]' : currentStep > 1 ? 'text-[#43A047]' : 'text-gray-500'}`}>
                    Personal Info
                  </span>
                </div>
                
                <div className={`h-px w-12 transition-all duration-300 ${currentStep > 1 ? 'bg-[#43A047]' : 'bg-gray-300'}`}></div>
                
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  currentStep === 2 ? 'bg-[#00A86B]/20 border-2 border-[#00A86B]' : 'bg-gray-100'
                }`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                    currentStep === 2 ? 'bg-[#00A86B] text-white' : 'bg-gray-400 text-white'
                  }`}>2</span>
                  <span className={`text-sm font-medium ${currentStep === 2 ? 'text-[#00A86B]' : 'text-gray-500'}`}>
                    Account Setup
                  </span>
                </div>
              </div>
            </div>

            {/* Role Selector - Always Visible */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#212121] text-center">Choose Your Role</h3>
              <div className="relative bg-[#f8fffe] rounded-2xl p-2">
                <div 
                  className={`absolute top-2 h-[calc(100%-16px)] bg-gradient-to-r from-[#00A86B] to-[#43A047] rounded-xl transition-all duration-300 ease-in-out shadow-lg ${
                    selectedRole === 'doctor' ? 'left-2 w-[calc(50%-4px)]' : 'left-[calc(50%+4px)] w-[calc(50%-4px)]'
                  }`}
                />
                
                <div className="relative flex">
                  <button
                    type="button"
                    onClick={() => setSelectedRole('doctor')}
                    className={`flex-1 flex flex-col items-center justify-center py-6 px-4 rounded-xl transition-all duration-300 ${
                      selectedRole === 'doctor'
                        ? 'text-white transform scale-105'
                        : 'text-[#555555] hover:text-[#00A86B]'
                    }`}
                  >
                    <Hospital className={`w-8 h-8 mb-3 transition-all duration-300 ${selectedRole === 'doctor' ? 'animate-bounce' : ''}`} />
                    <span className="font-bold text-lg">Doctor</span>
                    <span className="text-xs mt-1 opacity-80">Medical Professional</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedRole('patient')}
                    className={`flex-1 flex flex-col items-center justify-center py-6 px-4 rounded-xl transition-all duration-300 ${
                      selectedRole === 'patient'
                        ? 'text-white transform scale-105'
                        : 'text-[#555555] hover:text-[#00A86B]'
                    }`}
                  >
                    <User className={`w-8 h-8 mb-3 transition-all duration-300 ${selectedRole === 'patient' ? 'animate-bounce' : ''}`} />
                    <span className="font-bold text-lg">Patient</span>
                    <span className="text-xs mt-1 opacity-80">Healthcare Seeker</span>
                  </button>
                </div>
              </div>
              
              <p className="text-xs text-center text-[#555555] bg-[#f8fffe] rounded-lg p-3">
                {selectedRole === 'doctor' 
                  ? '🩺 Join as a medical professional and help patients with your expertise'
                  : '💙 Register to book appointments and manage your health records easily'
                }
              </p>
            </div>

            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <form className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#212121] border-b border-[#00A86B]/20 pb-2">
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-semibold text-[#212121]">Full Name *</Label>
                      <div className="relative mt-2">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#555555] h-5 w-5" />
                        <Input
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          placeholder="Enter your full name"
                          className={`pl-12 h-14 border-2 rounded-xl transition-all duration-300 ${
                            errors.fullName ? 'border-red-400 ring-4 ring-red-100' : 'border-[#e5e7eb] hover:border-[#00A86B]/50 focus:border-[#00A86B] focus:ring-4 focus:ring-[#00A86B]/20'
                          }`}
                        />
                        {errors.fullName && <p className="text-xs text-red-500 mt-2">{errors.fullName}</p>}
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-[#212121]">Email Address *</Label>
                      <div className="relative mt-2">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#555555] h-5 w-5" />
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email"
                          className={`pl-12 h-14 border-2 rounded-xl transition-all duration-300 ${
                            errors.email ? 'border-red-400 ring-4 ring-red-100' : 'border-[#e5e7eb] hover:border-[#00A86B]/50 focus:border-[#00A86B] focus:ring-4 focus:ring-[#00A86B]/20'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-2">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-[#212121]">Phone Number *</Label>
                      <div className="relative mt-2">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#555555] h-5 w-5" />
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Enter your phone number"
                          className={`pl-12 h-14 border-2 rounded-xl transition-all duration-300 ${
                            errors.phone ? 'border-red-400 ring-4 ring-red-100' : 'border-[#e5e7eb] hover:border-[#00A86B]/50 focus:border-[#00A86B] focus:ring-4 focus:ring-[#00A86B]/20'
                          }`}
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-2">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-[#212121]">Gender *</Label>
                      <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                        <SelectTrigger className={`h-14 mt-2 border-2 rounded-xl ${
                          errors.gender ? 'border-red-400' : 'border-[#e5e7eb] hover:border-[#00A86B]/50'
                        }`}>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          {genders.map((gender) => (
                            <SelectItem key={gender} value={gender}>{gender}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.gender && <p className="text-xs text-red-500 mt-2">{errors.gender}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <Label className="text-sm font-semibold text-[#212121]">Date of Birth *</Label>
                      <div className="relative mt-2">
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#555555] h-5 w-5" />
                        <Input
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                          className={`pl-12 h-14 border-2 rounded-xl transition-all duration-300 ${
                            errors.dateOfBirth ? 'border-red-400 ring-4 ring-red-100' : 'border-[#e5e7eb] hover:border-[#00A86B]/50 focus:border-[#00A86B] focus:ring-4 focus:ring-[#00A86B]/20'
                          }`}
                        />
                        {errors.dateOfBirth && <p className="text-xs text-red-500 mt-2">{errors.dateOfBirth}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full h-14 rounded-xl font-bold text-white bg-gradient-to-r from-[#00A86B] to-[#43A047] hover:from-[#43A047] hover:to-[#00A86B] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    Continue to Account Setup
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </span>
                </Button>
              </form>
            )}

            {/* Step 2: Account Setup & Role-specific info */}
            {currentStep === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Password Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#212121] border-b border-[#00A86B]/20 pb-2">
                    Account Security
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-semibold text-[#212121]">Password *</Label>
                      <div className="relative mt-2">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#555555] h-5 w-5" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          placeholder="Create a strong password"
                          className={`pl-12 pr-12 h-14 border-2 rounded-xl transition-all duration-300 ${
                            errors.password ? 'border-red-400 ring-4 ring-red-100' : 'border-[#e5e7eb] hover:border-[#00A86B]/50 focus:border-[#00A86B] focus:ring-4 focus:ring-[#00A86B]/20'
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#555555] hover:text-[#00A86B] transition-colors"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                      
                      {formData.password && (
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[#555555]">Password strength:</span>
                            <span className={`font-medium ${getPasswordStrength() > 50 ? 'text-green-600' : 'text-orange-600'}`}>
                              {getPasswordStrengthText()}
                            </span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                              style={{ width: `${getPasswordStrength()}%` }}
                            />
                          </div>
                        </div>
                      )}
                      
                      {errors.password && <p className="text-xs text-red-500 mt-2">{errors.password}</p>}
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-[#212121]">Confirm Password *</Label>
                      <div className="relative mt-2">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#555555] h-5 w-5" />
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          placeholder="Confirm your password"
                          className={`pl-12 pr-12 h-14 border-2 rounded-xl transition-all duration-300 ${
                            errors.confirmPassword ? 'border-red-400 ring-4 ring-red-100' : 'border-[#e5e7eb] hover:border-[#00A86B]/50 focus:border-[#00A86B] focus:ring-4 focus:ring-[#00A86B]/20'
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#555555] hover:text-[#00A86B] transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                      {errors.confirmPassword && <p className="text-xs text-red-500 mt-2">{errors.confirmPassword}</p>}
                    </div>
                  </div>
                </div>

                {/* Role-specific Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#212121] border-b border-[#00A86B]/20 pb-2">
                    {selectedRole === 'doctor' ? 'Professional Details' : 'Medical Information'}
                  </h3>
                  
                  {selectedRole === 'doctor' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-semibold text-[#212121]">Medical License *</Label>
                        <div className="relative mt-2">
                          <Award className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#555555] h-5 w-5" />
                          <Input
                            value={formData.licenseNumber}
                            onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                            placeholder="Enter license number"
                            className={`pl-12 h-14 border-2 rounded-xl transition-all duration-300 ${
                              errors.licenseNumber ? 'border-red-400 ring-4 ring-red-100' : 'border-[#e5e7eb] hover:border-[#00A86B]/50 focus:border-[#00A86B] focus:ring-4 focus:ring-[#00A86B]/20'
                            }`}
                          />
                          {errors.licenseNumber && <p className="text-xs text-red-500 mt-2">{errors.licenseNumber}</p>}
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-semibold text-[#212121]">Specialization *</Label>
                        <Select value={formData.specialization} onValueChange={(value) => handleInputChange('specialization', value)}>
                          <SelectTrigger className={`h-14 mt-2 border-2 rounded-xl ${
                            errors.specialization ? 'border-red-400' : 'border-[#e5e7eb] hover:border-[#00A86B]/50'
                          }`}>
                            <SelectValue placeholder="Select specialization" />
                          </SelectTrigger>
                          <SelectContent>
                            {specializations.map((spec) => (
                              <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.specialization && <p className="text-xs text-red-500 mt-2">{errors.specialization}</p>}
                      </div>

                      <div>
                        <Label className="text-sm font-semibold text-[#212121]">Years of Experience *</Label>
                        <div className="relative mt-2">
                          <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#555555] h-5 w-5" />
                          <Input
                            type="number"
                            value={formData.yearsOfExperience}
                            onChange={(e) => handleInputChange('yearsOfExperience', e.target.value)}
                            placeholder="Years"
                            min="0"
                            max="50"
                            className={`pl-12 h-14 border-2 rounded-xl transition-all duration-300 ${
                              errors.yearsOfExperience ? 'border-red-400 ring-4 ring-red-100' : 'border-[#e5e7eb] hover:border-[#00A86B]/50 focus:border-[#00A86B] focus:ring-4 focus:ring-[#00A86B]/20'
                            }`}
                          />
                          {errors.yearsOfExperience && <p className="text-xs text-red-500 mt-2">{errors.yearsOfExperience}</p>}
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-semibold text-[#212121]">Hospital/Clinic *</Label>
                        <div className="relative mt-2">
                          <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#555555] h-5 w-5" />
                          <Input
                            value={formData.hospitalName}
                            onChange={(e) => handleInputChange('hospitalName', e.target.value)}
                            placeholder="Hospital/clinic name"
                            className={`pl-12 h-14 border-2 rounded-xl transition-all duration-300 ${
                              errors.hospitalName ? 'border-red-400 ring-4 ring-red-100' : 'border-[#e5e7eb] hover:border-[#00A86B]/50 focus:border-[#00A86B] focus:ring-4 focus:ring-[#00A86B]/20'
                            }`}
                          />
                          {errors.hospitalName && <p className="text-xs text-red-500 mt-2">{errors.hospitalName}</p>}
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <Label className="text-sm font-semibold text-[#212121]">Work Address *</Label>
                        <div className="relative mt-2">
                          <MapPin className="absolute left-4 top-4 text-[#555555] h-5 w-5" />
                          <Textarea
                            value={formData.workAddress}
                            onChange={(e) => handleInputChange('workAddress', e.target.value)}
                            placeholder="Enter complete work address"
                            className={`pl-12 min-h-[100px] resize-none border-2 rounded-xl transition-all duration-300 ${
                              errors.workAddress ? 'border-red-400 ring-4 ring-red-100' : 'border-[#e5e7eb] hover:border-[#00A86B]/50 focus:border-[#00A86B] focus:ring-4 focus:ring-[#00A86B]/20'
                            }`}
                          />
                          {errors.workAddress && <p className="text-xs text-red-500 mt-2">{errors.workAddress}</p>}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-semibold text-[#212121]">Blood Group *</Label>
                        <div className="relative mt-2">
                          <Droplets className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#555555] h-5 w-5" />
                          <Select value={formData.bloodGroup} onValueChange={(value) => handleInputChange('bloodGroup', value)}>
                            <SelectTrigger className={`h-14 pl-12 border-2 rounded-xl ${
                              errors.bloodGroup ? 'border-red-400' : 'border-[#e5e7eb] hover:border-[#00A86B]/50'
                            }`}>
                              <SelectValue placeholder="Select blood group" />
                            </SelectTrigger>
                            <SelectContent>
                              {bloodGroups.map((bg) => (
                                <SelectItem key={bg} value={bg}>{bg}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.bloodGroup && <p className="text-xs text-red-500 mt-2">{errors.bloodGroup}</p>}
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-semibold text-[#212121]">Emergency Contact *</Label>
                        <div className="relative mt-2">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#555555] h-5 w-5" />
                          <Input
                            value={formData.emergencyContactName}
                            onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                            placeholder="Contact person name"
                            className={`pl-12 h-14 border-2 rounded-xl transition-all duration-300 ${
                              errors.emergencyContactName ? 'border-red-400 ring-4 ring-red-100' : 'border-[#e5e7eb] hover:border-[#00A86B]/50 focus:border-[#00A86B] focus:ring-4 focus:ring-[#00A86B]/20'
                            }`}
                          />
                          {errors.emergencyContactName && <p className="text-xs text-red-500 mt-2">{errors.emergencyContactName}</p>}
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-semibold text-[#212121]">Emergency Phone *</Label>
                        <div className="relative mt-2">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#555555] h-5 w-5" />
                          <Input
                            type="tel"
                            value={formData.emergencyContactPhone}
                            onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
                            placeholder="Emergency contact number"
                            className={`pl-12 h-14 border-2 rounded-xl transition-all duration-300 ${
                              errors.emergencyContactPhone ? 'border-red-400 ring-4 ring-red-100' : 'border-[#e5e7eb] hover:border-[#00A86B]/50 focus:border-[#00A86B] focus:ring-4 focus:ring-[#00A86B]/20'
                            }`}
                          />
                          {errors.emergencyContactPhone && <p className="text-xs text-red-500 mt-2">{errors.emergencyContactPhone}</p>}
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-semibold text-[#212121]">Relation *</Label>
                        <Select value={formData.emergencyContactRelation} onValueChange={(value) => handleInputChange('emergencyContactRelation', value)}>
                          <SelectTrigger className={`h-14 mt-2 border-2 rounded-xl ${
                            errors.emergencyContactRelation ? 'border-red-400' : 'border-[#e5e7eb] hover:border-[#00A86B]/50'
                          }`}>
                            <SelectValue placeholder="Select relation" />
                          </SelectTrigger>
                          <SelectContent>
                            {relations.map((rel) => (
                              <SelectItem key={rel} value={rel}>{rel}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.emergencyContactRelation && <p className="text-xs text-red-500 mt-2">{errors.emergencyContactRelation}</p>}
                      </div>

                      <div className="md:col-span-2">
                        <Label className="text-sm font-semibold text-[#212121]">Address *</Label>
                        <div className="relative mt-2">
                          <MapPin className="absolute left-4 top-4 text-[#555555] h-5 w-5" />
                          <Textarea
                            value={formData.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            placeholder="Enter your complete address"
                            className={`pl-12 min-h-[100px] resize-none border-2 rounded-xl transition-all duration-300 ${
                              errors.address ? 'border-red-400 ring-4 ring-red-100' : 'border-[#e5e7eb] hover:border-[#00A86B]/50 focus:border-[#00A86B] focus:ring-4 focus:ring-[#00A86B]/20'
                            }`}
                          />
                          {errors.address && <p className="text-xs text-red-500 mt-2">{errors.address}</p>}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Terms and Privacy */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-[#f8fffe] rounded-xl border border-[#00A86B]/20">
                    <Checkbox
                      id="terms"
                      checked={termsAccepted}
                      onCheckedChange={setTermsAccepted}
                      className="border-[#00A86B]/30 data-[state=checked]:bg-[#00A86B] data-[state=checked]:border-[#00A86B] rounded-md mt-1"
                    />
                    <div className="flex-1">
                      <label htmlFor="terms" className="text-sm text-[#555555] cursor-pointer">
                        I agree to the{' '}
                        <a href="#" className="text-[#00A86B] hover:text-[#43A047] hover:underline font-medium">
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-[#00A86B] hover:text-[#43A047] hover:underline font-medium">
                          Privacy Policy
                        </a>
                      </label>
                      {errors.terms && <p className="text-xs text-red-500 mt-1">{errors.terms}</p>}
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-xs text-[#555555]">
                    <Shield className="w-4 h-4 text-[#43A047]" />
                    <span>Your information is secure and encrypted</span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex space-x-4">
                  <Button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    variant="outline"
                    className="flex-1 h-14 rounded-xl border-2 border-[#00A86B]/20 text-[#00A86B] hover:bg-[#00A86B]/10"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  
                  <Button
                    type="submit"
                    disabled={!termsAccepted || isLoading}
                    className={`flex-1 h-14 rounded-xl font-bold text-white transition-all duration-300 transform ${
                      termsAccepted && !isLoading
                        ? 'bg-gradient-to-r from-[#00A86B] to-[#43A047] hover:from-[#43A047] hover:to-[#00A86B] hover:scale-105 hover:shadow-xl active:scale-95'
                        : 'bg-[#9ca3af] cursor-not-allowed'
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Creating Account...</span>
                      </div>
                    ) : (
                      <span className="flex items-center justify-center">
                        Create Account
                        <UserPlus className="w-5 h-5 ml-2" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
}