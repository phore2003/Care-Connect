import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { DoctorProfileCard } from "./DoctorProfileCard";
import { DoctorProfileSection } from "./DoctorProfileSection";
import { 
  ArrowLeft,
  Settings,
  Bell,
  Users,
  Calendar,
  FileText,
  Activity,
  Heart,
  Stethoscope,
  Clock,
  TrendingUp,
  Eye,
  Edit,
  ChevronDown,
  MoreHorizontal,
  Filter,
  Search
} from "lucide-react";
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

interface DoctorDashboardProps {
  doctorName: string;
  onLogout: () => void;
  onBackToHome: () => void;
}

export function DoctorDashboard({ doctorName, onLogout, onBackToHome }: DoctorDashboardProps) {

  // Sample data for Weekly Patient Visits (Line Chart)
  const weeklyVisitsData = [
    { name: 'Mon', patients: 45 },
    { name: 'Tue', patients: 52 },
    { name: 'Wed', patients: 38 },
    { name: 'Thu', patients: 62 },
    { name: 'Fri', patients: 58 },
    { name: 'Sat', patients: 35 },
    { name: 'Sun', patients: 28 },
  ];

  // Sample data for Department-wise Consultations (Pie Chart)
  const departmentData = [
    { name: 'Cardiology', value: 35, color: '#0078D7' },
    { name: 'Neurology', value: 25, color: '#00A3A3' },
    { name: 'Orthopedics', value: 20, color: '#4A90E2' },
    { name: 'General', value: 15, color: '#7CB9E8' },
    { name: 'Other', value: 5, color: '#B8D4F0' },
  ];

  // Sample data for Recent Appointments Table
  const recentAppointments = [
    {
      id: 1,
      patientName: 'Sarah Johnson',
      age: 34,
      department: 'Cardiology',
      status: 'Completed',
      date: '2024-10-07',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      id: 2,
      patientName: 'Michael Chen',
      age: 28,
      department: 'Neurology',
      status: 'In Progress',
      date: '2024-10-07',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: 3,
      patientName: 'Emily Davis',
      age: 45,
      department: 'Orthopedics',
      status: 'Scheduled',
      date: '2024-10-08',
      statusColor: 'bg-yellow-100 text-yellow-700'
    },
    {
      id: 4,
      patientName: 'James Wilson',
      age: 52,
      department: 'General',
      status: 'Completed',
      date: '2024-10-06',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      id: 5,
      patientName: 'Lisa Thompson',
      age: 31,
      department: 'Cardiology',
      status: 'Cancelled',
      date: '2024-10-06',
      statusColor: 'bg-red-100 text-red-700'
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F9FC', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Top Bar Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px' }}>
        <div className="flex items-center justify-between">
          {/* Left Side - Back Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBackToHome}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100"
              style={{ color: '#0078D7', border: '1px solid #E5E7EB' }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back</span>
            </Button>
          </div>

          {/* Center - Title */}
          <div className="flex-1 text-center">
            <h1 className="text-2xl font-bold" style={{ color: '#1A1A1A' }}>
              Doctor Dashboard
            </h1>
          </div>

          {/* Right Side - Profile & Settings */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <Button
              variant="ghost"
              size="sm"
              className="p-2 rounded-lg transition-all duration-200 hover:bg-gray-100"
            >
              <Bell className="w-5 h-5" style={{ color: '#6B7280' }} />
            </Button>

            {/* Doctor Profile Card */}
            <div className="w-72">
              <DoctorProfileCard
                doctorName={doctorName}
                designation="Cardiologist"
                hospitalName="City General Hospital"
                isOnline={true}
                size="small"
                onViewProfile={() => console.log('View Profile')}
                onSettings={() => console.log('Settings')}
                onLogout={onLogout}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="p-6">
        {/* Doctor Profile Section - Prominent Card */}
        <div className="mb-6 max-w-md mx-auto">
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
            onViewProfile={() => console.log('View Profile')}
            onEdit={() => console.log('Edit Profile')}
            onLogout={onLogout}
          />
        </div>

        {/* Top Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Total Patients Card */}
          <Card className="bg-white rounded-2xl border-0 transition-all duration-200 hover:shadow-lg hover:-translate-y-1" 
                style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide" style={{ color: '#6B7280' }}>
                    TOTAL PATIENTS
                  </p>
                  <p className="text-3xl font-bold mt-2" style={{ color: '#1A1A1A' }}>
                    128
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#00A3A3' }}>
                    ↗ +12 this week
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E0F2FE' }}>
                  <Users className="w-6 h-6" style={{ color: '#0078D7' }} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Appointments Today Card */}
          <Card className="bg-white rounded-2xl border-0 transition-all duration-200 hover:shadow-lg hover:-translate-y-1" 
                style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide" style={{ color: '#6B7280' }}>
                    APPOINTMENTS TODAY
                  </p>
                  <p className="text-3xl font-bold mt-2" style={{ color: '#1A1A1A' }}>
                    14
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#00A3A3' }}>
                    3 pending
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E0F7FA' }}>
                  <Calendar className="w-6 h-6" style={{ color: '#00A3A3' }} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pending Lab Reports Card */}
          <Card className="bg-white rounded-2xl border-0 transition-all duration-200 hover:shadow-lg hover:-translate-y-1" 
                style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide" style={{ color: '#6B7280' }}>
                    PENDING LAB REPORTS
                  </p>
                  <p className="text-3xl font-bold mt-2" style={{ color: '#1A1A1A' }}>
                    6
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#f59e0b' }}>
                    Awaiting review
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                  <FileText className="w-6 h-6" style={{ color: '#f59e0b' }} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prescriptions Issued Card */}
          <Card className="bg-white rounded-2xl border-0 transition-all duration-200 hover:shadow-lg hover:-translate-y-1" 
                style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide" style={{ color: '#6B7280' }}>
                    PRESCRIPTIONS ISSUED
                  </p>
                  <p className="text-3xl font-bold mt-2" style={{ color: '#1A1A1A' }}>
                    23
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#10b981' }}>
                    This week
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
                  <Heart className="w-6 h-6" style={{ color: '#10b981' }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Weekly Patient Visits - Line Chart */}
          <Card className="bg-white rounded-2xl border-0" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold" style={{ color: '#1A1A1A' }}>
                Weekly Patient Visits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={weeklyVisitsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#111111aa',
                      border: 'none',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: '12px'
                    }}
                    cursor={{ stroke: '#0078D7', strokeWidth: 1 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="patients"
                    stroke="#0078D7"
                    strokeWidth={3}
                    dot={{ fill: '#0078D7', strokeWidth: 2, r: 5 }}
                    activeDot={{ r: 7, stroke: '#0078D7', strokeWidth: 2, fill: 'white' }}
                    style={{
                      filter: 'drop-shadow(0px 2px 4px rgba(0, 120, 215, 0.3))'
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Department-wise Consultations - Pie Chart */}
          <Card className="bg-white rounded-2xl border-0" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold" style={{ color: '#1A1A1A' }}>
                Department-Wise Consultations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="flex-1">
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie
                        data={departmentData}
                        cx="50%"
                        cy="50%"
                        outerRadius={90}
                        dataKey="value"
                        stroke="none"
                      >
                        {departmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#111111aa',
                          border: 'none',
                          borderRadius: '8px',
                          color: 'white',
                          fontSize: '12px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Legend */}
                <div className="ml-4 space-y-3">
                  {departmentData.map((entry, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: entry.color }}
                      />
                      <div>
                        <p className="text-sm font-medium" style={{ color: '#444444' }}>
                          {entry.name}
                        </p>
                        <p className="text-xs" style={{ color: '#6B7280' }}>
                          {entry.value}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Appointments Table */}
        <Card className="bg-white rounded-2xl border-0" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold" style={{ color: '#1A1A1A' }}>
                Recent Appointments
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-xs font-medium uppercase tracking-wide px-3 py-2" style={{ color: '#6B7280' }}>
                  <Filter className="w-4 h-4 mr-1" />
                  Filter
                </Button>
                <Button variant="ghost" size="sm" className="text-xs font-medium uppercase tracking-wide px-3 py-2" style={{ color: '#6B7280' }}>
                  <Search className="w-4 h-4 mr-1" />
                  Search
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 px-4 text-xs font-medium uppercase tracking-wide" style={{ color: '#6B7280' }}>
                      Patient Name
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium uppercase tracking-wide" style={{ color: '#6B7280' }}>
                      Age
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium uppercase tracking-wide" style={{ color: '#6B7280' }}>
                      Department
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium uppercase tracking-wide" style={{ color: '#6B7280' }}>
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium uppercase tracking-wide" style={{ color: '#6B7280' }}>
                      Date
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium uppercase tracking-wide" style={{ color: '#6B7280' }}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentAppointments.map((appointment, index) => (
                    <tr 
                      key={appointment.id} 
                      className={`border-b border-gray-50 transition-colors duration-150 hover:bg-blue-50 hover:bg-opacity-30 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50 bg-opacity-30'
                      }`}
                    >
                      <td className="py-4 px-4">
                        <p className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
                          {appointment.patientName}
                        </p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm" style={{ color: '#444444' }}>
                          {appointment.age}
                        </p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm" style={{ color: '#444444' }}>
                          {appointment.department}
                        </p>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={`text-xs font-medium px-2 py-1 rounded-full ${appointment.statusColor}`}>
                          {appointment.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm" style={{ color: '#444444' }}>
                          {appointment.date}
                        </p>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" className="p-1 h-8 w-8 hover:bg-blue-100">
                            <Eye className="w-4 h-4" style={{ color: '#0078D7' }} />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-1 h-8 w-8 hover:bg-blue-100">
                            <Edit className="w-4 h-4" style={{ color: '#0078D7' }} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-end mt-6 space-x-2">
              <Button variant="ghost" size="sm" className="text-sm px-3 py-2" style={{ color: '#6B7280' }}>
                Previous
              </Button>
              <div className="flex items-center space-x-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 text-sm bg-blue-100" style={{ color: '#0078D7' }}>
                  1
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 text-sm" style={{ color: '#6B7280' }}>
                  2
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 text-sm" style={{ color: '#6B7280' }}>
                  3
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="text-sm px-3 py-2" style={{ color: '#6B7280' }}>
                Next
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}