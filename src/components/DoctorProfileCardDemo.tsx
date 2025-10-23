import { DoctorProfileCard } from "./DoctorProfileCard";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface DoctorProfileCardDemoProps {
  onBack: () => void;
}

export function DoctorProfileCardDemo({ onBack }: DoctorProfileCardDemoProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F9FC', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100"
              style={{ color: '#0078D7', border: '1px solid #E5E7EB' }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back</span>
            </Button>
          </div>
          <h1 className="text-2xl font-bold" style={{ color: '#1A1A1A' }}>
            Doctor Profile Card Components
          </h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="bg-white rounded-2xl p-6" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
            <h2 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
              Professional Doctor Profile Card Component
            </h2>
            <p className="text-sm" style={{ color: '#6B7280' }}>
              A modern, reusable doctor profile card component matching the doctor dashboard theme.
              Features include circular profile photos, status indicators, and interactive dropdown menus.
            </p>
          </div>

          {/* Small Size Examples */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#1A1A1A' }}>
              Small Size (Compact)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <DoctorProfileCard
                doctorName="Dr. Arjun Mehta"
                designation="Cardiologist"
                hospitalName="City General Hospital"
                isOnline={true}
                size="small"
                onViewProfile={() => alert('View Profile clicked')}
                onSettings={() => alert('Settings clicked')}
                onLogout={() => alert('Logout clicked')}
              />
              
              <DoctorProfileCard
                doctorName="Dr. Sarah Johnson"
                designation="Neurologist"
                hospitalName="Metro Medical Center"
                isOnline={false}
                size="small"
                onViewProfile={() => alert('View Profile clicked')}
                onSettings={() => alert('Settings clicked')}
                onLogout={() => alert('Logout clicked')}
              />

              <DoctorProfileCard
                doctorName="Dr. Michael Chen"
                designation="Pediatrician"
                hospitalName="Children's Care Hospital"
                isOnline={true}
                size="small"
                onViewProfile={() => alert('View Profile clicked')}
                onSettings={() => alert('Settings clicked')}
                onLogout={() => alert('Logout clicked')}
              />
            </div>
          </div>

          {/* Medium Size Examples */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#1A1A1A' }}>
              Medium Size (Default)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DoctorProfileCard
                doctorName="Dr. Emily Davis"
                designation="Orthopedic Surgeon"
                hospitalName="Sports Medicine Institute"
                isOnline={true}
                size="medium"
                onViewProfile={() => alert('View Profile clicked')}
                onSettings={() => alert('Settings clicked')}
                onLogout={() => alert('Logout clicked')}
              />
              
              <DoctorProfileCard
                doctorName="Dr. James Wilson"
                designation="General Physician"
                hospitalName="Community Health Center"
                isOnline={true}
                size="medium"
                onViewProfile={() => alert('View Profile clicked')}
                onSettings={() => alert('Settings clicked')}
                onLogout={() => alert('Logout clicked')}
              />
            </div>
          </div>

          {/* Large Size Examples */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#1A1A1A' }}>
              Large Size (Prominent)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DoctorProfileCard
                doctorName="Dr. Lisa Thompson"
                designation="Dermatologist"
                hospitalName="Advanced Skin Care Clinic"
                isOnline={true}
                size="large"
                onViewProfile={() => alert('View Profile clicked')}
                onSettings={() => alert('Settings clicked')}
                onLogout={() => alert('Logout clicked')}
              />
              
              <DoctorProfileCard
                doctorName="Dr. Robert Martinez"
                designation="Ophthalmologist"
                hospitalName="Vision Care Center"
                isOnline={false}
                size="large"
                onViewProfile={() => alert('View Profile clicked')}
                onSettings={() => alert('Settings clicked')}
                onLogout={() => alert('Logout clicked')}
              />
            </div>
          </div>

          {/* Features List */}
          <div className="bg-white rounded-2xl p-6" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#1A1A1A' }}>
              Component Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#0078D7' }}></div>
                  <div>
                    <p className="font-medium" style={{ color: '#444444' }}>Circular Profile Photos</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>48-64px with fallback initials</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#0078D7' }}></div>
                  <div>
                    <p className="font-medium" style={{ color: '#444444' }}>Online Status Indicator</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>Green dot for online status</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#0078D7' }}></div>
                  <div>
                    <p className="font-medium" style={{ color: '#444444' }}>Interactive Dropdown Menu</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>View Profile, Settings, Logout</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#00A3A3' }}></div>
                  <div>
                    <p className="font-medium" style={{ color: '#444444' }}>Hover Effects</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>Gentle blue tint on hover</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#00A3A3' }}></div>
                  <div>
                    <p className="font-medium" style={{ color: '#444444' }}>Responsive Sizes</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>Small, Medium, Large options</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#00A3A3' }}></div>
                  <div>
                    <p className="font-medium" style={{ color: '#444444' }}>Clean Design</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>16px rounded corners, subtle shadows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-white rounded-2xl p-6" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#1A1A1A' }}>
              Usage Example
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm" style={{ color: '#444444' }}>
{`<DoctorProfileCard
  doctorName="Dr. Arjun Mehta"
  designation="Cardiologist"
  hospitalName="City General Hospital"
  isOnline={true}
  size="medium"
  onViewProfile={() => console.log('View Profile')}
  onSettings={() => console.log('Settings')}
  onLogout={() => console.log('Logout')}
/>`}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}