import { DoctorProfileSection } from "./DoctorProfileSection";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface DoctorProfileSectionDemoProps {
  onBack: () => void;
}

export function DoctorProfileSectionDemo({ onBack }: DoctorProfileSectionDemoProps) {
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
            Doctor Profile Section Component
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
              Modern Doctor Profile Section UI Card
            </h2>
            <p className="text-sm" style={{ color: '#6B7280' }}>
              A comprehensive professional dashboard aesthetic showing doctor profile with experience, 
              rating, online status, and next appointment information. Features a clean white card with 
              rounded corners, soft shadows, and calm blue/teal accents.
            </p>
          </div>

          {/* Main Profile Examples */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dr. Arjun Mehta - Primary Example */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#1A1A1A' }}>
                Featured Profile
              </h3>
              <DoctorProfileSection
                doctorName="Dr. Arjun Mehta"
                specialty="Cardiologist"
                institution="Medicare Heart Institute"
                yearsExperience={12}
                rating={4.8}
                isOnline={true}
                nextAppointment={{
                  time: "10:30 AM",
                  patientName: "Rakesh Sharma"
                }}
                onViewProfile={() => alert('View Profile clicked')}
                onEdit={() => alert('Edit clicked')}
                onLogout={() => alert('Logout clicked')}
              />
            </div>

            {/* Dr. Sarah Johnson */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#1A1A1A' }}>
                Online Status
              </h3>
              <DoctorProfileSection
                doctorName="Dr. Sarah Johnson"
                specialty="Neurologist"
                institution="Metro Medical Center"
                yearsExperience={8}
                rating={4.9}
                isOnline={true}
                nextAppointment={{
                  time: "2:00 PM",
                  patientName: "Priya Patel"
                }}
                onViewProfile={() => alert('View Profile clicked')}
                onEdit={() => alert('Edit clicked')}
                onLogout={() => alert('Logout clicked')}
              />
            </div>

            {/* Dr. Michael Chen - Offline */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#1A1A1A' }}>
                Offline Status
              </h3>
              <DoctorProfileSection
                doctorName="Dr. Michael Chen"
                specialty="Pediatrician"
                institution="Children's Care Hospital"
                yearsExperience={15}
                rating={4.7}
                isOnline={false}
                nextAppointment={{
                  time: "11:00 AM",
                  patientName: "Aarav Kumar"
                }}
                onViewProfile={() => alert('View Profile clicked')}
                onEdit={() => alert('Edit clicked')}
                onLogout={() => alert('Logout clicked')}
              />
            </div>

            {/* Dr. Emily Davis */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#1A1A1A' }}>
                No Next Appointment
              </h3>
              <DoctorProfileSection
                doctorName="Dr. Emily Davis"
                specialty="Orthopedic Surgeon"
                institution="Sports Medicine Institute"
                yearsExperience={10}
                rating={4.6}
                isOnline={true}
                onViewProfile={() => alert('View Profile clicked')}
                onEdit={() => alert('Edit clicked')}
                onLogout={() => alert('Logout clicked')}
              />
            </div>

            {/* Dr. James Wilson */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#1A1A1A' }}>
                High Rating
              </h3>
              <DoctorProfileSection
                doctorName="Dr. James Wilson"
                specialty="General Physician"
                institution="Community Health Center"
                yearsExperience={20}
                rating={5.0}
                isOnline={true}
                nextAppointment={{
                  time: "3:15 PM",
                  patientName: "Amit Singh"
                }}
                onViewProfile={() => alert('View Profile clicked')}
                onEdit={() => alert('Edit clicked')}
                onLogout={() => alert('Logout clicked')}
              />
            </div>

            {/* Dr. Lisa Thompson */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#1A1A1A' }}>
                Early Career
              </h3>
              <DoctorProfileSection
                doctorName="Dr. Lisa Thompson"
                specialty="Dermatologist"
                institution="Advanced Skin Care Clinic"
                yearsExperience={5}
                rating={4.5}
                isOnline={true}
                nextAppointment={{
                  time: "9:00 AM",
                  patientName: "Sneha Reddy"
                }}
                onViewProfile={() => alert('View Profile clicked')}
                onEdit={() => alert('Edit clicked')}
                onLogout={() => alert('Logout clicked')}
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="bg-white rounded-2xl p-6" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#1A1A1A' }}>
              Component Features & Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Visual Design */}
              <div className="space-y-3">
                <h4 className="font-semibold" style={{ color: '#0078D7' }}>
                  Visual Design
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: '#444444' }}>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>White card with 16px rounded corners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Soft shadow (rgba(0,0,0,0.05))</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Circular profile photo (80px)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Centered balanced layout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Hover effect with blue border</span>
                  </li>
                </ul>
              </div>

              {/* Content Elements */}
              <div className="space-y-3">
                <h4 className="font-semibold" style={{ color: '#0078D7' }}>
                  Content Elements
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: '#444444' }}>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Doctor name, specialty, institution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Years of experience display</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Star rating with icon (★ 4.8)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Online status with green dot</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Next appointment information</span>
                  </li>
                </ul>
              </div>

              {/* Interactive Features */}
              <div className="space-y-3">
                <h4 className="font-semibold" style={{ color: '#0078D7' }}>
                  Interactive Features
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: '#444444' }}>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Dropdown menu (top-right)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>View Profile action</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Edit functionality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Logout with red accent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Smooth animations (200ms)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="bg-white rounded-2xl p-6" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#1A1A1A' }}>
              Color Palette & Accents
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-full h-20 rounded-lg mb-2" style={{ backgroundColor: '#0078D7' }}></div>
                <p className="text-xs font-medium" style={{ color: '#444444' }}>Primary Blue</p>
                <p className="text-xs" style={{ color: '#6B7280' }}>#0078D7</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 rounded-lg mb-2" style={{ backgroundColor: '#00A3A3' }}></div>
                <p className="text-xs font-medium" style={{ color: '#444444' }}>Teal Accent</p>
                <p className="text-xs" style={{ color: '#6B7280' }}>#00A3A3</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 rounded-lg mb-2 border" style={{ backgroundColor: '#F7F9FC', borderColor: '#E5E7EB' }}></div>
                <p className="text-xs font-medium" style={{ color: '#444444' }}>Background</p>
                <p className="text-xs" style={{ color: '#6B7280' }}>#F7F9FC</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 rounded-lg mb-2" style={{ backgroundColor: '#10b981' }}></div>
                <p className="text-xs font-medium" style={{ color: '#444444' }}>Online Status</p>
                <p className="text-xs" style={{ color: '#6B7280' }}>#10b981</p>
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
{`<DoctorProfileSection
  doctorName="Dr. Arjun Mehta"
  specialty="Cardiologist"
  institution="Medicare Heart Institute"
  yearsExperience={12}
  rating={4.8}
  isOnline={true}
  nextAppointment={{
    time: "10:30 AM",
    patientName: "Rakesh Sharma"
  }}
  onViewProfile={() => console.log('View Profile')}
  onEdit={() => console.log('Edit')}
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
