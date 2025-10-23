import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Progress } from "./ui/progress";
import { Footer } from "./Footer";
import { 
  ArrowLeft, 
  Calendar as CalendarIcon, 
  Clock, 
  Upload, 
  User, 
  Phone, 
  Mail, 
  MapPin,
  Stethoscope,
  Heart,
  CheckCircle,
  AlertCircle,
  FileText,
  X
} from "lucide-react";
// Simple date formatting utility
const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

interface BookAppointmentPageProps {
  onBack: () => void;
}

interface FormData {
  // Personal Information
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: Date | undefined;
  
  // Appointment Details
  department: string;
  doctor: string;
  preferredDate: Date | undefined;
  timeSlot: string;
  consultationType: string;
  
  // Additional Information
  symptoms: string;
  uploadedFiles: File[];
  
  // Confirmation
  detailsConfirmed: boolean;
  termsAccepted: boolean;
}

export function BookAppointmentPage({ onBack }: BookAppointmentPageProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfBirth: undefined,
    department: '',
    doctor: '',
    preferredDate: undefined,
    timeSlot: '',
    consultationType: 'in-clinic',
    symptoms: '',
    uploadedFiles: [],
    detailsConfirmed: false,
    termsAccepted: false
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  // Mock data for dropdowns
  const departments = [
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'dermatology', label: 'Dermatology' },
    { value: 'neurology', label: 'Neurology' },
    { value: 'orthopedics', label: 'Orthopedics' },
    { value: 'pediatrics', label: 'Pediatrics' },
    { value: 'gynecology', label: 'Gynecology' },
    { value: 'psychiatry', label: 'Psychiatry' },
    { value: 'general', label: 'General Medicine' }
  ];

  const doctors = {
    cardiology: [
      { value: 'dr-johnson', label: 'Dr. Sarah Johnson' },
      { value: 'dr-martinez', label: 'Dr. Carlos Martinez' }
    ],
    dermatology: [
      { value: 'dr-chen', label: 'Dr. Lisa Chen' },
      { value: 'dr-brown', label: 'Dr. Michael Brown' }
    ],
    neurology: [
      { value: 'dr-davis', label: 'Dr. Emily Davis' },
      { value: 'dr-wilson', label: 'Dr. James Wilson' }
    ],
    orthopedics: [
      { value: 'dr-garcia', label: 'Dr. Ana Garcia' },
      { value: 'dr-thompson', label: 'Dr. Robert Thompson' }
    ],
    pediatrics: [
      { value: 'dr-lee', label: 'Dr. Jennifer Lee' },
      { value: 'dr-taylor', label: 'Dr. David Taylor' }
    ],
    gynecology: [
      { value: 'dr-white', label: 'Dr. Michelle White' },
      { value: 'dr-moore', label: 'Dr. Patricia Moore' }
    ],
    psychiatry: [
      { value: 'dr-anderson', label: 'Dr. Kevin Anderson' },
      { value: 'dr-thomas', label: 'Dr. Susan Thomas' }
    ],
    general: [
      { value: 'dr-jackson', label: 'Dr. Mark Jackson' },
      { value: 'dr-harris', label: 'Dr. Laura Harris' }
    ]
  };

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
  ];

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files && files.length > 0) {
      const newFiles = Array.from(files);
      setUploadProgress(0);
      
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 100);
      
      setTimeout(() => {
        setFormData(prev => ({
          ...prev,
          uploadedFiles: [...prev.uploadedFiles, ...newFiles]
        }));
      }, 1000);
    }
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      uploadedFiles: prev.uploadedFiles.filter((_, i) => i !== index)
    }));
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    // Personal Information
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    
    // Appointment Details
    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.doctor) newErrors.doctor = 'Doctor selection is required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required';
    if (!formData.timeSlot) newErrors.timeSlot = 'Time slot is required';
    
    // Additional Information
    if (!formData.symptoms.trim()) newErrors.symptoms = 'Please describe your symptoms or reason for visit';
    
    // Confirmation
    if (!formData.detailsConfirmed) newErrors.detailsConfirmed = 'Please confirm your details are correct';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'Please accept the terms and privacy policy';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Show success message or redirect
      alert('Appointment booked successfully! We will send you a confirmation email shortly.');
      onBack();
    }, 2000);
  };

  const FormSection = ({ title, children, icon }: { title: string; children: React.ReactNode; icon: React.ReactNode }) => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 pb-2 border-b border-[#00A86B]/10">
        <div className="w-6 h-6 text-[#00A86B]">{icon}</div>
        <h3 className="font-semibold text-[#333333]">{title}</h3>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f8fffe] to-[#f0fdf7]">

      {/* Back to Home Button */}
      <div className="relative z-10 px-6 pt-6">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-[#00A86B]/20 rounded-lg text-[#00A86B] hover:bg-[#00A86B] hover:text-white transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="font-semibold">Back to Home</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00A86B] to-[#008A5C] rounded-2xl flex items-center justify-center shadow-lg">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#00A86B] mb-2">Book Your Appointment</h1>
          <p className="text-[#555555] max-w-2xl mx-auto">
            Choose your doctor, select your date, and confirm your appointment in just a few clicks.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00A86B] to-[#008A5C] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Form Card */}
        <div className="relative">
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A86B]/5 via-transparent to-[#008A5C]/5 rounded-2xl"></div>
          
          {/* Form Content */}
          <div className="relative z-10 p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Section 1: Personal Information */}
              <FormSection title="Personal Information" icon={<User />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-[#333333]">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className={`bg-white/50 border-[#00A86B]/20 focus:border-[#00A86B] focus:ring-[#00A86B]/20 ${errors.fullName ? 'border-red-500' : ''}`}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.fullName}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#333333]">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`bg-white/50 border-[#00A86B]/20 focus:border-[#00A86B] focus:ring-[#00A86B]/20 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.email}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#333333]">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`bg-white/50 border-[#00A86B]/20 focus:border-[#00A86B] focus:ring-[#00A86B]/20 ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.phone}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-[#333333]">Gender *</Label>
                    <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                      <SelectTrigger className={`bg-white/50 border-[#00A86B]/20 focus:border-[#00A86B] focus:ring-[#00A86B]/20 ${errors.gender ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.gender && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.gender}</p>}
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label className="text-[#333333]">Date of Birth *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full justify-start text-left font-normal bg-white/50 border-[#00A86B]/20 hover:bg-white/70 ${errors.dateOfBirth ? 'border-red-500' : ''}`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-[#00A86B]" />
                          {formData.dateOfBirth ? formatDate(formData.dateOfBirth) : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.dateOfBirth}
                          onSelect={(date) => handleInputChange('dateOfBirth', date)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.dateOfBirth && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.dateOfBirth}</p>}
                  </div>
                </div>
              </FormSection>

              {/* Section 2: Appointment Details */}
              <FormSection title="Appointment Details" icon={<Stethoscope />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[#333333]">Select Department *</Label>
                    <Select value={formData.department} onValueChange={(value) => handleInputChange('department', value)}>
                      <SelectTrigger className={`bg-white/50 border-[#00A86B]/20 focus:border-[#00A86B] focus:ring-[#00A86B]/20 ${errors.department ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Choose department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept.value} value={dept.value}>{dept.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.department && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.department}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-[#333333]">Select Doctor *</Label>
                    <Select 
                      value={formData.doctor} 
                      onValueChange={(value) => handleInputChange('doctor', value)}
                      disabled={!formData.department}
                    >
                      <SelectTrigger className={`bg-white/50 border-[#00A86B]/20 focus:border-[#00A86B] focus:ring-[#00A86B]/20 ${errors.doctor ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Choose doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {formData.department && doctors[formData.department as keyof typeof doctors]?.map((doc) => (
                          <SelectItem key={doc.value} value={doc.value}>{doc.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.doctor && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.doctor}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-[#333333]">Preferred Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full justify-start text-left font-normal bg-white/50 border-[#00A86B]/20 hover:bg-white/70 ${errors.preferredDate ? 'border-red-500' : ''}`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-[#00A86B]" />
                          {formData.preferredDate ? formatDate(formData.preferredDate) : <span>Pick appointment date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.preferredDate}
                          onSelect={(date) => handleInputChange('preferredDate', date)}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.preferredDate && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.preferredDate}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-[#333333]">Preferred Time Slot *</Label>
                    <Select value={formData.timeSlot} onValueChange={(value) => handleInputChange('timeSlot', value)}>
                      <SelectTrigger className={`bg-white/50 border-[#00A86B]/20 focus:border-[#00A86B] focus:ring-[#00A86B]/20 ${errors.timeSlot ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Choose time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.timeSlot && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.timeSlot}</p>}
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label className="text-[#333333]">Type of Consultation *</Label>
                    <RadioGroup
                      value={formData.consultationType}
                      onValueChange={(value) => handleInputChange('consultationType', value)}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2 p-3 rounded-lg border border-[#00A86B]/20 bg-white/30">
                        <RadioGroupItem value="in-clinic" id="in-clinic" />
                        <Label htmlFor="in-clinic" className="flex items-center space-x-2 cursor-pointer">
                          <MapPin className="w-4 h-4 text-[#00A86B]" />
                          <span>In-Clinic Visit</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg border border-[#00A86B]/20 bg-white/30">
                        <RadioGroupItem value="online" id="online" />
                        <Label htmlFor="online" className="flex items-center space-x-2 cursor-pointer">
                          <Heart className="w-4 h-4 text-[#00A86B]" />
                          <span>Online Consultation</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </FormSection>

              {/* Section 3: Additional Information */}
              <FormSection title="Additional Information" icon={<FileText />}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="symptoms" className="text-[#333333]">Describe Your Symptoms / Reason for Visit *</Label>
                    <Textarea
                      id="symptoms"
                      placeholder="Please describe your symptoms, concerns, or reason for this appointment..."
                      value={formData.symptoms}
                      onChange={(e) => handleInputChange('symptoms', e.target.value)}
                      className={`bg-white/50 border-[#00A86B]/20 focus:border-[#00A86B] focus:ring-[#00A86B]/20 min-h-[100px] ${errors.symptoms ? 'border-red-500' : ''}`}
                    />
                    {errors.symptoms && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.symptoms}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-[#333333]">Upload Previous Reports (Optional)</Label>
                    <div className="border-2 border-dashed border-[#00A86B]/30 rounded-lg p-6 bg-white/30 hover:bg-white/50 transition-colors cursor-pointer">
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        onChange={(e) => handleFileUpload(e.target.files)}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <div className="text-center">
                          <Upload className="w-8 h-8 text-[#00A86B] mx-auto mb-2" />
                          <p className="text-[#333333] font-medium">Click to upload files</p>
                          <p className="text-[#555555] text-sm">Supports: PDF, JPG, PNG, DOC (Max 10MB each)</p>
                        </div>
                      </label>
                    </div>
                    
                    {uploadProgress > 0 && uploadProgress < 100 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Uploading...</span>
                          <span>{uploadProgress}%</span>
                        </div>
                        <Progress value={uploadProgress} className="h-2" />
                      </div>
                    )}
                    
                    {formData.uploadedFiles.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-[#333333]">Uploaded Files:</p>
                        <div className="space-y-2">
                          {formData.uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-white/50 rounded border border-[#00A86B]/20">
                              <span className="text-sm text-[#333333] truncate">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-red-500 hover:text-red-700 transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </FormSection>

              {/* Section 4: Confirmation */}
              <FormSection title="Confirmation" icon={<CheckCircle />}>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-white/30 rounded-lg border border-[#00A86B]/20">
                    <Checkbox
                      id="details-confirmed"
                      checked={formData.detailsConfirmed}
                      onCheckedChange={(checked) => handleInputChange('detailsConfirmed', checked)}
                      className="data-[state=checked]:bg-[#00A86B] data-[state=checked]:border-[#00A86B]"
                    />
                    <Label htmlFor="details-confirmed" className="text-sm text-[#333333] cursor-pointer">
                      I confirm that the above details are correct and accurate.
                    </Label>
                  </div>
                  {errors.detailsConfirmed && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.detailsConfirmed}</p>}
                  
                  <div className="flex items-start space-x-3 p-4 bg-white/30 rounded-lg border border-[#00A86B]/20">
                    <Checkbox
                      id="terms-accepted"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) => handleInputChange('termsAccepted', checked)}
                      className="data-[state=checked]:bg-[#00A86B] data-[state=checked]:border-[#00A86B]"
                    />
                    <Label htmlFor="terms-accepted" className="text-sm text-[#333333] cursor-pointer">
                      I agree to the <span className="text-[#00A86B] underline">Terms & Conditions</span> and <span className="text-[#00A86B] underline">Privacy Policy</span>.
                    </Label>
                  </div>
                  {errors.termsAccepted && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.termsAccepted}</p>}
                </div>
              </FormSection>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-[#00A86B] hover:bg-[#008A5C] text-white py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 group"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Booking Appointment...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Stethoscope className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <span>Book Appointment</span>
                    </div>
                  )}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={onBack}
                  className="flex-1 sm:flex-initial px-8 py-3 border-2 border-[#00A86B] text-[#00A86B] hover:bg-[#00A86B] hover:text-white rounded-lg font-semibold transition-all duration-200"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Visual Section */}
        <div className="mt-12 text-center">
          <div className="inline-block p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00A86B] to-[#008A5C] rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-[#333333]">Need Help?</h3>
                <p className="text-sm text-[#555555]">Our support team is here for you</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-[#00A86B] font-semibold">📞 +1 (555) 123-HEALTH</p>
              <p className="text-[#00A86B]">📧 support@healthyclinic.com</p>
              <p className="text-[#555555]">Available 24/7 for your convenience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}