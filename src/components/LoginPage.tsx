import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { ArrowLeft, Eye, EyeOff, Mail, Lock, Shield, User, Hospital, Apple, Heart, Activity, Star, Users } from "lucide-react";

interface LoginPageProps {
  onBack: () => void;
  onGoToRegister: () => void;
  onLogin: (role: 'doctor' | 'patient', email: string, password: string) => void;
}

export function LoginPage({ onBack, onGoToRegister, onLogin }: LoginPageProps) {
  const [selectedRole, setSelectedRole] = useState<'doctor' | 'patient'>('patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{email?: string; password?: string}>({});
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const validateForm = () => {
    const newErrors: {email?: string; password?: string} = {};
    
    if (!email) {
      newErrors.email = 'Email or phone is required';
    } else if (!/\S+@\S+\.\S+/.test(email) && !/^[+]?[\d\s-()]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email or phone number';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onLogin(selectedRole, email, password);
      setIsLoading(false);
    }, 1500);
  };

  const isFormValid = email && password && !errors.email && !errors.password;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#f0fdf7] via-white to-[#f8fffe]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Circle */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#00A86B]/10 to-[#43A047]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#00A86B]/5 to-[#43A047]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Medical Icons */}
        <div className="absolute top-1/4 left-1/4 text-[#00A86B]/20 animate-bounce delay-300">
          <Heart className="w-8 h-8" />
        </div>
        <div className="absolute top-1/3 right-1/4 text-[#43A047]/20 animate-bounce delay-700">
          <Activity className="w-6 h-6" />
        </div>
        <div className="absolute bottom-1/3 left-1/6 text-[#00A86B]/15 animate-bounce delay-1000">
          <Star className="w-7 h-7" />
        </div>
        <div className="absolute bottom-1/4 right-1/6 text-[#43A047]/15 animate-bounce delay-500">
          <Users className="w-5 h-5" />
        </div>
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
      
      {/* Back to Home Button */}
      <div className="relative z-10 p-6">
        <button 
          onClick={onBack}
          className="group flex items-center space-x-2 px-6 py-3 bg-white/80 backdrop-blur-lg border border-[#00A86B]/20 rounded-2xl text-[#00A86B] hover:bg-[#00A86B] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-semibold">Back to Home</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full max-w-7xl mx-auto items-center">
          {/* Left Side - Hero Content */}
          <div className="flex-1 flex items-center justify-center pr-16">
            <div className="text-center space-y-8 max-w-md">
              {/* Animated Logo */}
              <div className="relative">
                <div className="w-32 h-32 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00A86B] to-[#43A047] rounded-3xl rotate-6 animate-pulse"></div>
                  <div className="absolute inset-2 bg-white rounded-2xl flex items-center justify-center">
                    <div className="relative">
                      <Heart className="w-12 h-12 text-[#00A86B] animate-bounce" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#43A047] rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-[#00A86B] to-[#43A047] bg-clip-text text-transparent">
                  Welcome Back to
                  <br />Healthy Clinic
                </h1>
                <p className="text-lg text-[#555555] leading-relaxed">
                  Your trusted healthcare companion. Sign in to access personalized medical care and manage your health journey.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00A86B]">1000+</div>
                  <div className="text-sm text-[#555555]">Doctors</div>
                </div>
                <div className="w-px h-12 bg-[#00A86B]/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#43A047]">50K+</div>
                  <div className="text-sm text-[#555555]">Patients</div>
                </div>
                <div className="w-px h-12 bg-[#00A86B]/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#7E57C2]">24/7</div>
                  <div className="text-sm text-[#555555]">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-[480px] flex-shrink-0">
            <LoginCard />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden w-full max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A86B] to-[#43A047] rounded-2xl rotate-3 animate-pulse"></div>
              <div className="absolute inset-1 bg-white rounded-xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-[#00A86B]" />
              </div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00A86B] to-[#43A047] bg-clip-text text-transparent mb-2">
              Healthy Clinic
            </h1>
            <p className="text-[#555555]">Sign in to your account</p>
          </div>
          <LoginCard />
        </div>
      </div>
    </div>
  );

  function LoginCard() {
    return (
      <div className="relative">
        {/* Enhanced Glassmorphism Card */}
        <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-8 transform transition-all duration-500 hover:scale-[1.02]">
          {/* Gradient borders */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00A86B]/20 via-transparent to-[#43A047]/20 rounded-3xl blur-xl opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/20 to-white/50 rounded-3xl"></div>
          
          <div className="relative z-10 space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-[#00A86B]">Sign In</h2>
              <p className="text-[#555555]">Choose your role to continue</p>
            </div>

            {/* Enhanced Role Selector */}
            <div className="space-y-4">
              <div className="relative bg-[#f8fffe] rounded-2xl p-2">
                <div 
                  className={`absolute top-2 h-[calc(50%-4px)] bg-gradient-to-r from-[#00A86B] to-[#43A047] rounded-xl transition-all duration-300 ease-in-out shadow-lg ${
                    selectedRole === 'doctor' ? 'left-2 w-[calc(50%-4px)]' : 'left-[calc(50%+4px)] w-[calc(50%-4px)]'
                  }`}
                />
                
                <div className="relative flex">
                  <button
                    type="button"
                    onClick={() => setSelectedRole('doctor')}
                    className={`flex-1 flex flex-col items-center justify-center py-4 px-4 rounded-xl transition-all duration-300 ${
                      selectedRole === 'doctor'
                        ? 'text-white transform scale-105'
                        : 'text-[#555555] hover:text-[#00A86B]'
                    }`}
                  >
                    <Hospital className={`w-6 h-6 mb-2 transition-all duration-300 ${selectedRole === 'doctor' ? 'animate-bounce' : ''}`} />
                    <span className="font-semibold">Doctor</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedRole('patient')}
                    className={`flex-1 flex flex-col items-center justify-center py-4 px-4 rounded-xl transition-all duration-300 ${
                      selectedRole === 'patient'
                        ? 'text-white transform scale-105'
                        : 'text-[#555555] hover:text-[#00A86B]'
                    }`}
                  >
                    <User className={`w-6 h-6 mb-2 transition-all duration-300 ${selectedRole === 'patient' ? 'animate-bounce' : ''}`} />
                    <span className="font-semibold">Patient</span>
                  </button>
                </div>
              </div>
              
              <p className="text-xs text-center text-[#555555] bg-[#f8fffe] rounded-lg p-2">
                {selectedRole === 'doctor' 
                  ? '🩺 Access your practice dashboard and patient management tools'
                  : '💙 Book appointments, view records, and connect with doctors'
                }
              </p>
            </div>

            {/* Enhanced Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#212121]">Email or Phone</label>
                <div className="relative group">
                  <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-all duration-300 ${
                    emailFocused ? 'text-[#00A86B] scale-110' : 'text-[#555555]'
                  }`} />
                  <Input
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                    }}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    placeholder="Enter email or phone number"
                    className={`pl-12 h-14 border-2 rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                      emailFocused
                        ? 'border-[#00A86B] shadow-lg ring-4 ring-[#00A86B]/20 scale-[1.02]'
                        : errors.email
                        ? 'border-red-400 shadow-lg ring-4 ring-red-100'
                        : 'border-[#e5e7eb] hover:border-[#00A86B]/50 hover:shadow-md'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-2 flex items-center animate-shake">
                      <span className="inline-block w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#212121]">Password</label>
                <div className="relative group">
                  <Lock className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-all duration-300 ${
                    passwordFocused ? 'text-[#00A86B] scale-110' : 'text-[#555555]'
                  }`} />
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors(prev => ({ ...prev, password: undefined }));
                    }}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    placeholder="Enter your password"
                    className={`pl-12 pr-12 h-14 border-2 rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                      passwordFocused
                        ? 'border-[#00A86B] shadow-lg ring-4 ring-[#00A86B]/20 scale-[1.02]'
                        : errors.password
                        ? 'border-red-400 shadow-lg ring-4 ring-red-100'
                        : 'border-[#e5e7eb] hover:border-[#00A86B]/50 hover:shadow-md'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                      passwordFocused ? 'text-[#00A86B] scale-110' : 'text-[#555555] hover:text-[#00A86B]'
                    }`}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                  {errors.password && (
                    <p className="text-xs text-red-500 mt-2 flex items-center animate-shake">
                      <span className="inline-block w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={setRememberMe}
                    className="border-[#00A86B]/30 data-[state=checked]:bg-[#00A86B] data-[state=checked]:border-[#00A86B] rounded-md"
                  />
                  <label htmlFor="remember" className="text-sm text-[#555555] cursor-pointer">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-[#00A86B] hover:text-[#43A047] transition-colors duration-300 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              {/* Enhanced Sign In Button */}
              <Button
                type="submit"
                disabled={!isFormValid || isLoading}
                className={`w-full h-14 rounded-xl font-bold text-white shadow-xl transition-all duration-300 transform ${
                  isFormValid && !isLoading
                    ? 'bg-gradient-to-r from-[#00A86B] to-[#43A047] hover:from-[#43A047] hover:to-[#00A86B] hover:scale-105 hover:shadow-2xl active:scale-95'
                    : 'bg-[#9ca3af] cursor-not-allowed'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <span className="flex items-center justify-center">
                    Sign In
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>

              {/* Social Login */}
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#00A86B]/20" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-[#555555]">Or continue with</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-white border border-[#00A86B]/20 rounded-xl hover:bg-[#f8fffe] hover:border-[#00A86B]/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-sm font-medium text-[#555555]">Google</span>
                  </button>
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-white border border-[#00A86B]/20 rounded-xl hover:bg-[#f8fffe] hover:border-[#00A86B]/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <Apple className="w-5 h-5 text-[#212121]" />
                    <span className="text-sm font-medium text-[#555555]">Apple</span>
                  </button>
                </div>
              </div>

              {/* Security & Links */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="w-4 h-4 text-[#43A047]" />
                  <span className="text-xs text-[#555555]">Your data is encrypted and secure</span>
                </div>

                <div className="text-center">
                  <span className="text-sm text-[#555555]">Don't have an account? </span>
                  <button
                    type="button"
                    onClick={onGoToRegister}
                    className="text-sm text-[#00A86B] hover:text-[#43A047] font-semibold transition-colors duration-300 hover:underline"
                  >
                    Sign up now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}