import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChevronDown, User, Edit, LogOut, Star, Clock } from "lucide-react";

interface DoctorProfileSectionProps {
  doctorName: string;
  specialty: string;
  institution: string;
  yearsExperience: number;
  rating: number;
  isOnline?: boolean;
  nextAppointment?: {
    time: string;
    patientName: string;
  };
  profileImage?: string;
  onViewProfile?: () => void;
  onEdit?: () => void;
  onLogout?: () => void;
}

export function DoctorProfileSection({
  doctorName,
  specialty,
  institution,
  yearsExperience,
  rating,
  isOnline = true,
  nextAppointment,
  profileImage,
  onViewProfile,
  onEdit,
  onLogout,
}: DoctorProfileSectionProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-white rounded-2xl p-6 transition-all duration-200"
      style={{ 
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 16px 0px',
        border: isHovered ? '1px solid #0078D7' : '1px solid transparent',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dropdown Button - Top Right */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-150 hover:bg-blue-50"
        style={{ color: '#6B7280' }}
      >
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div 
          className="absolute top-16 right-6 bg-white rounded-xl border z-50 overflow-hidden min-w-[180px] animate-in fade-in slide-in-from-top-2 duration-200"
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 8px 24px 0px',
            borderColor: '#E5E7EB'
          }}
        >
          {onViewProfile && (
            <button
              onClick={() => {
                onViewProfile();
                setShowDropdown(false);
              }}
              className="w-full flex items-center space-x-3 px-4 py-3 transition-all duration-150 hover:bg-blue-50"
              style={{ color: '#444444' }}
            >
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#E0F2FE' }}
              >
                <User className="w-4 h-4" style={{ color: '#0078D7' }} />
              </div>
              <span className="text-sm font-medium">View Profile</span>
            </button>
          )}

          {onEdit && (
            <button
              onClick={() => {
                onEdit();
                setShowDropdown(false);
              }}
              className="w-full flex items-center space-x-3 px-4 py-3 transition-all duration-150 hover:bg-blue-50"
              style={{ color: '#444444' }}
            >
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#E0F2FE' }}
              >
                <Edit className="w-4 h-4" style={{ color: '#0078D7' }} />
              </div>
              <span className="text-sm font-medium">Edit</span>
            </button>
          )}

          {onLogout && (
            <>
              <hr className="border-gray-100" />
              <button
                onClick={() => {
                  onLogout();
                  setShowDropdown(false);
                }}
                className="w-full flex items-center space-x-3 px-4 py-3 transition-all duration-150 hover:bg-red-50"
                style={{ color: '#dc2626' }}
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#FEE2E2' }}
                >
                  <LogOut className="w-4 h-4" style={{ color: '#dc2626' }} />
                </div>
                <span className="text-sm font-medium">Logout</span>
              </button>
            </>
          )}
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Profile Photo with Online Status */}
        <div className="relative">
          <Avatar className="w-20 h-20 border-4" style={{ borderColor: '#E0F2FE' }}>
            <AvatarImage 
              src={profileImage || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"} 
              alt={doctorName}
            />
            <AvatarFallback 
              className="text-xl"
              style={{ backgroundColor: '#E0F2FE', color: '#0078D7' }}
            >
              {doctorName.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          {/* Online Status Badge */}
          {isOnline && (
            <div 
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex items-center space-x-1.5 px-3 py-1 rounded-full border-2 border-white"
              style={{ backgroundColor: '#10b981' }}
            >
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              <span className="text-xs font-medium text-white">Online</span>
            </div>
          )}
        </div>

        {/* Doctor Information */}
        <div className="space-y-1">
          <h2 className="text-xl font-bold" style={{ color: '#1A1A1A' }}>
            {doctorName}
          </h2>
          <p className="text-sm font-medium" style={{ color: '#444444' }}>
            {specialty}
          </p>
          <p className="text-xs" style={{ color: '#6B7280' }}>
            {institution}
          </p>
        </div>

        {/* Experience & Rating */}
        <div className="flex items-center space-x-3 text-xs" style={{ color: '#6B7280' }}>
          <span className="font-medium">{yearsExperience} years experience</span>
          <span>•</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-current" style={{ color: '#FFA500' }} />
            <span className="font-medium" style={{ color: '#1A1A1A' }}>{rating}</span>
            <span>rating</span>
          </div>
        </div>

        {/* Next Appointment */}
        {nextAppointment && (
          <div 
            className="w-full mt-4 pt-4 border-t"
            style={{ borderColor: '#E5E7EB' }}
          >
            <div className="flex items-center justify-center space-x-2 text-xs">
              <Clock className="w-4 h-4" style={{ color: '#00A3A3' }} />
              <span className="font-medium" style={{ color: '#444444' }}>
                Next:
              </span>
              <span style={{ color: '#0078D7' }} className="font-semibold">
                {nextAppointment.time}
              </span>
              <span style={{ color: '#6B7280' }}>–</span>
              <span style={{ color: '#444444' }}>
                {nextAppointment.patientName}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
