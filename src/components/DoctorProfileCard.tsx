import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChevronDown, User, Settings, LogOut } from "lucide-react";

interface DoctorProfileCardProps {
  doctorName: string;
  designation: string;
  hospitalName: string;
  profileImage?: string;
  isOnline?: boolean;
  onViewProfile?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
  size?: 'small' | 'medium' | 'large';
}

export function DoctorProfileCard({
  doctorName,
  designation,
  hospitalName,
  profileImage,
  isOnline = true,
  onViewProfile,
  onSettings,
  onLogout,
  size = 'medium'
}: DoctorProfileCardProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const sizeConfig = {
    small: {
      avatar: 'w-12 h-12',
      name: 'text-sm',
      designation: 'text-xs',
      hospital: 'text-xs',
      statusDot: 'w-2.5 h-2.5',
    },
    medium: {
      avatar: 'w-14 h-14',
      name: 'text-base',
      designation: 'text-sm',
      hospital: 'text-xs',
      statusDot: 'w-3 h-3',
    },
    large: {
      avatar: 'w-16 h-16',
      name: 'text-lg',
      designation: 'text-base',
      hospital: 'text-sm',
      statusDot: 'w-3.5 h-3.5',
    }
  };

  const config = sizeConfig[size];

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full bg-white rounded-2xl p-4 border border-transparent transition-all duration-200 ease-in-out"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px',
          backgroundColor: isHovered ? '#F0F7FF' : '#FFFFFF',
          borderColor: isHovered ? '#0078D7' : 'transparent',
        }}
      >
        <div className="flex items-center space-x-3">
          {/* Profile Image with Status Indicator */}
          <div className="relative">
            <Avatar className={config.avatar}>
              <AvatarImage src={profileImage || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"} />
              <AvatarFallback 
                className="font-semibold"
                style={{ backgroundColor: '#E0F2FE', color: '#0078D7' }}
              >
                {doctorName.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            {/* Online Status Indicator */}
            {isOnline && (
              <div 
                className={`absolute bottom-0 right-0 ${config.statusDot} rounded-full border-2 border-white`}
                style={{ backgroundColor: '#10b981' }}
              />
            )}
          </div>

          {/* Doctor Information */}
          <div className="flex-1 text-left min-w-0">
            <div className="flex items-center space-x-2">
              <h3 
                className={`${config.name} font-bold truncate`}
                style={{ color: '#1A1A1A' }}
              >
                {doctorName}
              </h3>
            </div>
            <p 
              className={`${config.designation} font-medium truncate`}
              style={{ color: '#444444' }}
            >
              {designation}
            </p>
            <p 
              className={`${config.hospital} truncate`}
              style={{ color: '#6B7280' }}
            >
              {hospitalName}
            </p>
          </div>

          {/* Dropdown Icon */}
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
            style={{ color: '#6B7280' }}
          />
        </div>
      </button>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div 
          className="absolute top-full mt-2 w-full bg-white rounded-xl border z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
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

          {onSettings && (
            <button
              onClick={() => {
                onSettings();
                setShowDropdown(false);
              }}
              className="w-full flex items-center space-x-3 px-4 py-3 transition-all duration-150 hover:bg-blue-50"
              style={{ color: '#444444' }}
            >
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#E0F2FE' }}
              >
                <Settings className="w-4 h-4" style={{ color: '#0078D7' }} />
              </div>
              <span className="text-sm font-medium">Settings</span>
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
    </div>
  );
}