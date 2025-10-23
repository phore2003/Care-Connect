import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Calendar } from "./ui/calendar";
import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Progress } from "./ui/progress";
import { 
  Home,
  Calendar as CalendarIcon,
  Pill,
  FileText,
  MessageSquare,
  CreditCard,
  Settings,
  Bell,
  Search,
  ChevronDown,
  User,
  LogOut,
  Plus,
  Clock,
  Download,
  Eye,
  Send,
  Paperclip,
  Filter,
  X,
  RefreshCw,
  TrendingUp,
  Activity,
  CheckCircle2,
  AlertCircle,
  XCircle,
  MoreHorizontal,
  Edit,
  Trash2
} from "lucide-react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from "recharts";

interface PatientDashboardProps {
  patientName: string;
  onLogout: () => void;
}

export function PatientDashboard({ patientName, onLogout }: PatientDashboardProps) {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'appointments' | 'prescriptions' | 'lab-reports' | 'messages' | 'billing' | 'settings'>('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedDoctor, setSelectedDoctor] = useState<string>('Dr. Arjun Mehta');
  const [prescriptionFilter, setPrescriptionFilter] = useState<string>('all');

  // Sample Data
  const appointments = [
    { id: 1, doctor: 'Dr. Arjun Mehta', specialty: 'Cardiology', date: '2025-10-08', time: '10:30 AM', status: 'Confirmed', statusColor: '#1E4C9A' },
    { id: 2, doctor: 'Dr. Priya Sharma', specialty: 'Dermatology', date: '2025-10-10', time: '2:00 PM', status: 'Pending', statusColor: '#F59E0B' },
    { id: 3, doctor: 'Dr. Rajesh Kumar', specialty: 'Neurology', date: '2025-10-05', time: '11:00 AM', status: 'Completed', statusColor: '#10B981' },
    { id: 4, doctor: 'Dr. Sarah Johnson', specialty: 'Pediatrics', date: '2025-10-03', time: '9:00 AM', status: 'Cancelled', statusColor: '#EF4444' },
  ];

  const prescriptions = [
    { id: 1, medicine: 'Atorvastatin', dosage: '10mg', frequency: 'Once daily', prescribedBy: 'Dr. Arjun Mehta', startDate: '2025-09-15', status: 'Active', statusColor: '#46C2B8' },
    { id: 2, medicine: 'Metformin', dosage: '500mg', frequency: 'Twice daily', prescribedBy: 'Dr. Priya Sharma', startDate: '2025-09-20', status: 'Active', statusColor: '#46C2B8' },
    { id: 3, medicine: 'Lisinopril', dosage: '5mg', frequency: 'Once daily', prescribedBy: 'Dr. Arjun Mehta', startDate: '2025-08-10', status: 'Expired', statusColor: '#EF4444' },
    { id: 4, medicine: 'Vitamin D3', dosage: '1000 IU', frequency: 'Once daily', prescribedBy: 'Dr. Sarah Johnson', startDate: '2025-09-25', status: 'Active', statusColor: '#46C2B8' },
  ];

  const labReports = [
    { id: 1, testName: 'Lipid Profile', date: '2025-10-05', status: 'Completed', result: 'Normal', statusColor: '#1E4C9A' },
    { id: 2, testName: 'Blood Sugar (Fasting)', date: '2025-10-06', status: 'Completed', result: 'Normal', statusColor: '#1E4C9A' },
    { id: 3, testName: 'Complete Blood Count', date: '2025-10-07', status: 'Pending', result: '-', statusColor: '#F59E0B' },
    { id: 4, testName: 'Thyroid Function Test', date: '2025-09-28', status: 'Completed', result: 'Normal', statusColor: '#1E4C9A' },
  ];

  const doctors = [
    { id: 1, name: 'Dr. Arjun Mehta', specialty: 'Cardiology', lastMessage: 'Your test results look good. Continue your medication.', time: '2h ago', unread: 2, avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop' },
    { id: 2, name: 'Dr. Priya Sharma', specialty: 'Dermatology', lastMessage: 'Please schedule a follow-up appointment next week.', time: '1d ago', unread: 0, avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop' },
    { id: 3, name: 'Dr. Rajesh Kumar', specialty: 'Neurology', lastMessage: 'Prescription has been sent to your pharmacy.', time: '3d ago', unread: 1, avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop' },
  ];

  const invoices = [
    { id: '#INV1023', date: '2025-10-05', doctor: 'Dr. Arjun Mehta', amount: '₹1,200', status: 'Paid', statusColor: '#10B981' },
    { id: '#INV1024', date: '2025-10-07', doctor: 'Dr. Priya Sharma', amount: '₹800', status: 'Pending', statusColor: '#F59E0B' },
    { id: '#INV1022', date: '2025-09-28', doctor: 'Dr. Rajesh Kumar', amount: '₹1,500', status: 'Paid', statusColor: '#10B981' },
    { id: '#INV1025', date: '2025-10-08', doctor: 'Dr. Sarah Johnson', amount: '₹600', status: 'Pending', statusColor: '#F59E0B' },
  ];

  const notifications = [
    { id: 1, icon: <FileText className="w-4 h-4" />, title: 'Your Lab Report is Ready', text: 'Lipid Profile results are now available', time: '2h ago', status: 'unread' },
    { id: 2, icon: <CalendarIcon className="w-4 h-4" />, title: 'Appointment Confirmed', text: 'with Dr. Arjun Mehta on Oct 8 at 10:30 AM', time: '5h ago', status: 'unread' },
    { id: 3, icon: <Pill className="w-4 h-4" />, title: 'Prescription Refill Approved', text: 'Atorvastatin 10mg - 30 days supply', time: '1d ago', status: 'read' },
    { id: 4, icon: <CreditCard className="w-4 h-4" />, title: 'Payment Receipt', text: 'Invoice #INV1023 - ₹1,200 paid successfully', time: '2d ago', status: 'read' },
  ];

  const chartData = [
    { month: 'Jan', cholesterol: 180, sugar: 95, value: 180 },
    { month: 'Feb', cholesterol: 175, sugar: 92, value: 175 },
    { month: 'Mar', cholesterol: 170, sugar: 88, value: 170 },
    { month: 'Apr', cholesterol: 165, sugar: 90, value: 165 },
    { month: 'May', cholesterol: 160, sugar: 85, value: 160 },
    { month: 'Jun', cholesterol: 158, sugar: 87, value: 158 },
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const filteredPrescriptions = prescriptions.filter(p => {
    if (prescriptionFilter === 'all') return true;
    if (prescriptionFilter === 'active') return p.status === 'Active';
    if (prescriptionFilter === 'expired') return p.status === 'Expired';
    return true;
  });

  // Dashboard Page
  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <div 
        className="rounded-xl p-8 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #1E4C9A 0%, #46C2B8 100%)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 16px 0px'
        }}
      >
        <div className="relative z-10">
          <h1 className="text-3xl font-semibold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {getGreeting()}, {patientName} 👋
          </h1>
          <p className="text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
            Here's your latest health update.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mb-24"></div>
      </div>

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card 
          className="border-0 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer rounded-xl" 
          style={{ 
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FBFF 100%)'
          }}
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1E4C9A 0%, #3B6DC9 100%)' }}>
                    <CalendarIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>
                  Next Appointment
                </p>
                <p className="text-xl font-semibold mb-1" style={{ color: '#1E4C9A', fontFamily: 'Poppins, sans-serif' }}>
                  Today 10:30 AM
                </p>
                <p className="text-sm" style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>
                  Dr. Arjun Mehta
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="border-0 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer rounded-xl" 
          style={{ 
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F0FFFE 100%)'
          }}
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #46C2B8 0%, #5DD4CA 100%)' }}>
                    <Pill className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>
                  Active Prescriptions
                </p>
                <p className="text-3xl font-semibold mb-1" style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>
                  3
                </p>
                <p className="text-sm" style={{ color: '#46C2B8', fontFamily: 'Inter, sans-serif' }}>
                  ongoing
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="border-0 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer rounded-xl" 
          style={{ 
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F0FDF9 100%)'
          }}
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)' }}>
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>
                  New Lab Reports
                </p>
                <p className="text-3xl font-semibold mb-1" style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>
                  1
                </p>
                <p className="text-sm" style={{ color: '#10B981', fontFamily: 'Inter, sans-serif' }}>
                  available
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="border-0 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer rounded-xl" 
          style={{ 
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)'
          }}
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6B7280 0%, #9CA3AF 100%)' }}>
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>
                  Payment Due
                </p>
                <p className="text-xl font-semibold mb-1" style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>
                  None
                </p>
                <p className="text-sm" style={{ color: '#10B981', fontFamily: 'Inter, sans-serif' }}>
                  All up-to-date
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 rounded-xl" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
          <CardHeader className="border-b" style={{ borderColor: '#F5F7FA' }}>
            <CardTitle style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>
              Upcoming Appointments
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {appointments.slice(0, 3).map((apt) => (
                <div key={apt.id} className="flex items-center justify-between p-4 rounded-lg transition-all hover:shadow-md" style={{ backgroundColor: '#F5F7FA' }}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1E4C9A' }}>
                      <CalendarIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>{apt.doctor}</p>
                      <p className="text-sm" style={{ color: '#5F6B7A' }}>{apt.specialty}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium" style={{ color: '#2E2E2E' }}>{apt.time}</p>
                    <Badge 
                      className="mt-1 border-0 text-white"
                      style={{ backgroundColor: apt.statusColor }}
                    >
                      {apt.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 rounded-xl" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
          <CardHeader className="border-b" style={{ borderColor: '#F5F7FA' }}>
            <CardTitle style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>
              Health Trends
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#46C2B8" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#46C2B8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#5F6B7A" style={{ fontSize: '12px' }} />
                <YAxis stroke="#5F6B7A" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#2E2E2E', 
                    border: 'none', 
                    borderRadius: '8px', 
                    color: '#FFFFFF',
                    fontSize: '12px'
                  }}
                />
                <Area type="monotone" dataKey="value" stroke="#46C2B8" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Appointments Page
  const renderAppointments = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold" style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>
          Appointments
        </h2>
        <Button 
          className="rounded-xl text-white transition-all duration-200 hover:shadow-lg"
          style={{ background: 'linear-gradient(135deg, #46C2B8 0%, #5DD4CA 100%)' }}
        >
          <Plus className="w-4 h-4 mr-2" />
          Book Appointment
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Panel */}
        <Card className="border-0 rounded-xl" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
          <CardHeader className="border-b" style={{ borderColor: '#F5F7FA' }}>
            <CardTitle style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>Calendar</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md"
            />
          </CardContent>
        </Card>

        {/* Appointments Table */}
        <Card className="lg:col-span-2 border-0 rounded-xl" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
          <CardHeader className="border-b" style={{ borderColor: '#F5F7FA' }}>
            <CardTitle style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>All Appointments</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Doctor</TableHead>
                  <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Specialty</TableHead>
                  <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Date</TableHead>
                  <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Time</TableHead>
                  <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Status</TableHead>
                  <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment.id} className="transition-colors" style={{ '&:hover': { backgroundColor: '#F5F7FA' } }}>
                    <TableCell className="font-medium" style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>
                      {appointment.doctor}
                    </TableCell>
                    <TableCell style={{ color: '#5F6B7A' }}>{appointment.specialty}</TableCell>
                    <TableCell style={{ color: '#5F6B7A' }}>{appointment.date}</TableCell>
                    <TableCell style={{ color: '#5F6B7A' }}>{appointment.time}</TableCell>
                    <TableCell>
                      <Badge 
                        className="border-0 text-white"
                        style={{ backgroundColor: appointment.statusColor }}
                      >
                        {appointment.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Eye className="w-4 h-4" style={{ color: '#1E4C9A' }} />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <RefreshCw className="w-4 h-4" style={{ color: '#46C2B8' }} />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <X className="w-4 h-4" style={{ color: '#EF4444' }} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Prescriptions Page
  const renderPrescriptions = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold" style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>
          Prescriptions
        </h2>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: '#5F6B7A' }} />
            <Input
              placeholder="Search medications..."
              className="pl-10 rounded-xl border-gray-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>
          <Select value={prescriptionFilter} onValueChange={setPrescriptionFilter}>
            <SelectTrigger className="w-32 rounded-xl">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="expired">Expired</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="border-0 rounded-xl" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Medication</TableHead>
                <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Dosage</TableHead>
                <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Duration</TableHead>
                <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Prescribed By</TableHead>
                <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Status</TableHead>
                <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPrescriptions.map((prescription) => (
                <TableRow key={prescription.id} className="transition-colors hover:bg-blue-50/30">
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F5F7FA' }}>
                        <Pill className="w-5 h-5" style={{ color: '#46C2B8' }} />
                      </div>
                      <span className="font-medium" style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>
                        {prescription.medicine}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell style={{ color: '#5F6B7A' }}>{prescription.dosage}</TableCell>
                  <TableCell style={{ color: '#5F6B7A' }}>{prescription.frequency}</TableCell>
                  <TableCell style={{ color: '#5F6B7A' }}>{prescription.prescribedBy}</TableCell>
                  <TableCell>
                    <Badge 
                      className="border-0 text-white"
                      style={{ backgroundColor: prescription.statusColor }}
                    >
                      {prescription.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="rounded-lg text-xs"
                        style={{ borderColor: '#46C2B8', color: '#46C2B8' }}
                      >
                        <RefreshCw className="w-3 h-3 mr-1" />
                        Refill
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Download className="w-4 h-4" style={{ color: '#1E4C9A' }} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  // Lab Reports Page
  const renderLabReports = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold" style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>
          Lab Reports
        </h2>
        <Button variant="outline" className="rounded-xl" style={{ borderColor: '#1E4C9A', color: '#1E4C9A' }}>
          <Filter className="w-4 h-4 mr-2" />
          Filter Reports
        </Button>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {labReports.map((report) => (
          <Card 
            key={report.id} 
            className="border-0 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1" 
            style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}
          >
            <CardContent className="p-6">
              <div className="space-y-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #1E4C9A 0%, #3B6DC9 100%)' }}
                >
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>
                    {report.testName}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: '#5F6B7A' }}>
                    {report.date}
                  </p>
                  <Badge 
                    className="border-0 text-white text-xs"
                    style={{ backgroundColor: report.statusColor }}
                  >
                    {report.status}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1 rounded-lg text-white"
                    style={{ backgroundColor: '#1E4C9A' }}
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="rounded-lg"
                    style={{ borderColor: '#46C2B8', color: '#46C2B8' }}
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Compare Recent Results Chart */}
      <Card className="border-0 rounded-xl" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
        <CardHeader className="border-b" style={{ borderColor: '#F5F7FA' }}>
          <CardTitle style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>
            Compare Recent Results
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={chartData}>
              <defs>
                <linearGradient id="cholesterolGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1E4C9A" stopOpacity={0.8}/>
                  <stop offset="100%" stopColor="#1E4C9A" stopOpacity={0.2}/>
                </linearGradient>
                <linearGradient id="sugarGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#46C2B8" stopOpacity={0.8}/>
                  <stop offset="100%" stopColor="#46C2B8" stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#5F6B7A" style={{ fontSize: '12px', fontFamily: 'Inter, sans-serif' }} />
              <YAxis stroke="#5F6B7A" style={{ fontSize: '12px', fontFamily: 'Inter, sans-serif' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#2E2E2E', 
                  border: 'none', 
                  borderRadius: '8px', 
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontFamily: 'Inter, sans-serif'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="cholesterol" 
                stroke="url(#cholesterolGradient)" 
                strokeWidth={3} 
                name="Cholesterol (mg/dL)"
                dot={{ fill: '#1E4C9A', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="sugar" 
                stroke="url(#sugarGradient)" 
                strokeWidth={3} 
                name="Blood Sugar (mg/dL)"
                dot={{ fill: '#46C2B8', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );

  // Messages Page
  const renderMessages = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold" style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>
        Messages & Communication
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Doctors List */}
        <Card className="border-0 rounded-xl" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
          <CardHeader className="border-b" style={{ borderColor: '#F5F7FA' }}>
            <CardTitle style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>Doctors</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-2">
              {doctors.map((doctor) => (
                <button
                  key={doctor.id}
                  onClick={() => setSelectedDoctor(doctor.name)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-150 ${
                    selectedDoctor === doctor.name 
                      ? 'shadow-md' 
                      : 'hover:bg-gray-50'
                  }`}
                  style={{
                    backgroundColor: selectedDoctor === doctor.name ? '#F0F7FF' : 'transparent',
                    border: selectedDoctor === doctor.name ? '2px solid #1E4C9A' : '2px solid transparent'
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-12 h-12 border-2" style={{ borderColor: '#46C2B8' }}>
                      <AvatarImage src={doctor.avatar} />
                      <AvatarFallback style={{ backgroundColor: '#E0F2FE', color: '#1E4C9A' }}>
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold truncate" style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>
                          {doctor.name}
                        </p>
                        {doctor.unread > 0 && (
                          <Badge 
                            className="border-0 text-white w-5 h-5 flex items-center justify-center p-0 text-xs"
                            style={{ backgroundColor: '#46C2B8' }}
                          >
                            {doctor.unread}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs mb-1" style={{ color: '#5F6B7A' }}>{doctor.specialty}</p>
                      <p className="text-xs truncate" style={{ color: '#5F6B7A' }}>{doctor.lastMessage}</p>
                      <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>{doctor.time}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="lg:col-span-2 border-0 rounded-xl" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
          <CardHeader className="border-b" style={{ borderColor: '#F5F7FA' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={doctors.find(d => d.name === selectedDoctor)?.avatar} />
                  <AvatarFallback style={{ backgroundColor: '#E0F2FE', color: '#1E4C9A' }}>
                    DR
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>
                    {selectedDoctor}
                  </CardTitle>
                  <p className="text-xs" style={{ color: '#5F6B7A' }}>
                    {doctors.find(d => d.name === selectedDoctor)?.specialty}
                  </p>
                </div>
              </div>
              <Button size="sm" variant="ghost" className="rounded-lg">
                <Paperclip className="w-4 h-4" style={{ color: '#5F6B7A' }} />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4 mb-6 h-[400px] overflow-y-auto">
              {/* Doctor's message */}
              <div className="flex items-start space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback style={{ backgroundColor: '#E0F2FE', color: '#1E4C9A', fontSize: '12px' }}>
                    DR
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div 
                    className="inline-block rounded-2xl rounded-tl-sm p-4 max-w-md"
                    style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}
                  >
                    <p className="text-sm" style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>
                      Hello! How are you feeling today? I've reviewed your recent lab reports.
                    </p>
                  </div>
                  <p className="text-xs mt-1 ml-2" style={{ color: '#9CA3AF' }}>10:30 AM</p>
                </div>
              </div>

              {/* Patient's message */}
              <div className="flex items-start space-x-3 justify-end">
                <div className="flex-1 text-right">
                  <div 
                    className="inline-block rounded-2xl rounded-tr-sm p-4 max-w-md text-left"
                    style={{ background: 'linear-gradient(135deg, #1E4C9A 0%, #3B6DC9 100%)' }}
                  >
                    <p className="text-sm text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                      I'm feeling much better, thank you! The medication is working well.
                    </p>
                  </div>
                  <p className="text-xs mt-1 mr-2" style={{ color: '#9CA3AF' }}>10:32 AM</p>
                </div>
              </div>

              {/* Doctor's message */}
              <div className="flex items-start space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback style={{ backgroundColor: '#E0F2FE', color: '#1E4C9A', fontSize: '12px' }}>
                    DR
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div 
                    className="inline-block rounded-2xl rounded-tl-sm p-4 max-w-md"
                    style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}
                  >
                    <p className="text-sm" style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>
                      That's excellent news! Continue with the current dosage. Let's schedule a follow-up in 2 weeks.
                    </p>
                  </div>
                  <p className="text-xs mt-1 ml-2" style={{ color: '#9CA3AF' }}>10:35 AM</p>
                </div>
              </div>

              {/* Patient's message */}
              <div className="flex items-start space-x-3 justify-end">
                <div className="flex-1 text-right">
                  <div 
                    className="inline-block rounded-2xl rounded-tr-sm p-4 max-w-md text-left"
                    style={{ background: 'linear-gradient(135deg, #1E4C9A 0%, #3B6DC9 100%)' }}
                  >
                    <p className="text-sm text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Perfect! I'll book the appointment. Thank you, Doctor!
                    </p>
                  </div>
                  <p className="text-xs mt-1 mr-2" style={{ color: '#9CA3AF' }}>10:37 AM</p>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="flex items-center space-x-3">
              <Input
                placeholder="Type your message..."
                className="flex-1 rounded-xl"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <Button 
                size="icon" 
                className="rounded-xl w-10 h-10 text-white"
                style={{ background: 'linear-gradient(135deg, #46C2B8 0%, #5DD4CA 100%)' }}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Billing Page
  const renderBilling = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold" style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>
        Billing & Payments
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card 
          className="border-0 rounded-xl" 
          style={{ 
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F0FDF9 100%)'
          }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>
                  Total Paid
                </p>
                <p className="text-3xl font-semibold" style={{ color: '#10B981', fontFamily: 'Poppins, sans-serif' }}>
                  ₹12,400
                </p>
              </div>
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#ECFDF5' }}
              >
                <CheckCircle2 className="w-6 h-6" style={{ color: '#10B981' }} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="border-0 rounded-xl" 
          style={{ 
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFBEB 100%)'
          }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>
                  Pending
                </p>
                <p className="text-3xl font-semibold" style={{ color: '#F59E0B', fontFamily: 'Poppins, sans-serif' }}>
                  ₹800
                </p>
              </div>
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#FEF3C7' }}
              >
                <Clock className="w-6 h-6" style={{ color: '#F59E0B' }} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="border-0 rounded-xl" 
          style={{ 
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FEF2F2 100%)'
          }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>
                  Overdue
                </p>
                <p className="text-3xl font-semibold" style={{ color: '#6B7280', fontFamily: 'Poppins, sans-serif' }}>
                  ₹0
                </p>
              </div>
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#F3F4F6' }}
              >
                <XCircle className="w-6 h-6" style={{ color: '#6B7280' }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoices Table */}
      <Card className="border-0 rounded-xl" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
        <CardHeader className="border-b" style={{ borderColor: '#F5F7FA' }}>
          <CardTitle style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>Payment History</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Invoice ID</TableHead>
                <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Date</TableHead>
                <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Doctor</TableHead>
                <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Amount</TableHead>
                <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Status</TableHead>
                <TableHead style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id} className="transition-colors hover:bg-blue-50/30">
                  <TableCell className="font-medium" style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>
                    {invoice.id}
                  </TableCell>
                  <TableCell style={{ color: '#5F6B7A' }}>{invoice.date}</TableCell>
                  <TableCell style={{ color: '#5F6B7A' }}>{invoice.doctor}</TableCell>
                  <TableCell className="font-semibold" style={{ color: '#2E2E2E' }}>
                    {invoice.amount}
                  </TableCell>
                  <TableCell>
                    <Badge 
                      className="border-0 text-white"
                      style={{ backgroundColor: invoice.statusColor }}
                    >
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {invoice.status === 'Pending' ? (
                        <Button 
                          size="sm" 
                          className="rounded-lg text-white"
                          style={{ background: 'linear-gradient(135deg, #46C2B8 0%, #5DD4CA 100%)' }}
                        >
                          Pay Now
                        </Button>
                      ) : (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="rounded-lg"
                          style={{ borderColor: '#1E4C9A', color: '#1E4C9A' }}
                        >
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      )}
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Eye className="w-4 h-4" style={{ color: '#1E4C9A' }} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card className="border-0 rounded-xl" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
        <CardHeader className="border-b" style={{ borderColor: '#F5F7FA' }}>
          <CardTitle style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>Payment Methods</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
              <CreditCard className="w-5 h-5" style={{ color: '#1E4C9A' }} />
              <span className="text-sm font-medium" style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>
                Credit/Debit Card
              </span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
              <span className="text-sm font-medium" style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>
                UPI
              </span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
              <span className="text-sm font-medium" style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>
                Net Banking
              </span>
            </div>
          </div>
          <p className="text-xs mt-4" style={{ color: '#5F6B7A' }}>
            🔒 All payments are secured and encrypted
          </p>
        </CardContent>
      </Card>
    </div>
  );

  // Settings Page
  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold" style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>
        Profile & Settings
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Summary Card */}
        <Card className="border-0 rounded-xl" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="relative inline-block">
                <Avatar className="w-24 h-24 mx-auto border-4" style={{ borderColor: '#46C2B8' }}>
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face" />
                  <AvatarFallback style={{ backgroundColor: '#E0F2FE', color: '#1E4C9A', fontSize: '28px' }}>
                    {patientName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div 
                  className="absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center border-2 border-white cursor-pointer"
                  style={{ backgroundColor: '#46C2B8' }}
                >
                  <Edit className="w-4 h-4 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1" style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>
                  {patientName}
                </h3>
                <p className="text-sm mb-3" style={{ color: '#5F6B7A' }}>Patient ID: #PAT2025001</p>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="text-center">
                    <p style={{ color: '#5F6B7A' }}>Gender</p>
                    <p className="font-medium" style={{ color: '#2E2E2E' }}>Female</p>
                  </div>
                  <Separator orientation="vertical" className="h-8" />
                  <div className="text-center">
                    <p style={{ color: '#5F6B7A' }}>Blood Group</p>
                    <p className="font-medium" style={{ color: '#2E2E2E' }}>O+</p>
                  </div>
                  <Separator orientation="vertical" className="h-8" />
                  <div className="text-center">
                    <p style={{ color: '#5F6B7A' }}>Age</p>
                    <p className="font-medium" style={{ color: '#2E2E2E' }}>32</p>
                  </div>
                </div>
              </div>
              <Button 
                className="w-full rounded-xl"
                variant="outline"
                style={{ borderColor: '#46C2B8', color: '#46C2B8' }}
              >
                Edit Profile
              </Button>

              {/* Health Score */}
              <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: '#F5F7FA' }}>
                <p className="text-sm font-medium mb-2" style={{ color: '#2E2E2E' }}>Health Score</p>
                <div className="relative">
                  <Progress value={85} className="h-2" />
                  <p className="text-2xl font-semibold mt-2" style={{ color: '#46C2B8', fontFamily: 'Poppins, sans-serif' }}>
                    85/100
                  </p>
                </div>
                <p className="text-xs mt-2" style={{ color: '#5F6B7A' }}>Excellent health status</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings & Contact */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Information */}
          <Card className="border-0 rounded-xl" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
            <CardHeader className="border-b" style={{ borderColor: '#F5F7FA' }}>
              <CardTitle style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block" style={{ color: '#2E2E2E', fontFamily: 'Roboto, sans-serif' }}>
                  Email Address
                </label>
                <Input 
                  defaultValue="asha.gupta@email.com" 
                  className="rounded-xl"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block" style={{ color: '#2E2E2E', fontFamily: 'Roboto, sans-serif' }}>
                  Phone Number
                </label>
                <Input 
                  defaultValue="+91 98765 43210" 
                  className="rounded-xl"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block" style={{ color: '#2E2E2E', fontFamily: 'Roboto, sans-serif' }}>
                  Address
                </label>
                <Textarea 
                  defaultValue="123 MG Road, Bangalore, Karnataka - 560001" 
                  className="rounded-xl"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
              <Button 
                className="rounded-xl text-white"
                style={{ backgroundColor: '#1E4C9A' }}
              >
                Save Changes
              </Button>
            </CardContent>
          </Card>

          {/* Account Settings */}
          <Card className="border-0 rounded-xl" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
            <CardHeader className="border-b" style={{ borderColor: '#F5F7FA' }}>
              <CardTitle style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium" style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>
                    Email Notifications
                  </p>
                  <p className="text-sm" style={{ color: '#5F6B7A' }}>Receive email updates about appointments</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium" style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>
                    SMS Notifications
                  </p>
                  <p className="text-sm" style={{ color: '#5F6B7A' }}>Receive SMS alerts for reminders</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium" style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>
                    Language
                  </p>
                  <p className="text-sm" style={{ color: '#5F6B7A' }}>Choose your preferred language</p>
                </div>
                <Select defaultValue="english">
                  <SelectTrigger className="w-32 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium" style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>
                    Theme
                  </p>
                  <p className="text-sm" style={{ color: '#5F6B7A' }}>Select your display theme</p>
                </div>
                <Select defaultValue="light">
                  <SelectTrigger className="w-32 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator />
              <Button 
                variant="outline" 
                className="w-full rounded-xl"
                style={{ borderColor: '#1E4C9A', color: '#1E4C9A' }}
              >
                Change Password
              </Button>
            </CardContent>
          </Card>

          {/* Medical Summary */}
          <Card className="border-0 rounded-xl" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px' }}>
            <CardHeader className="border-b" style={{ borderColor: '#F5F7FA' }}>
              <CardTitle style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>Medical Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              <div>
                <p className="text-sm font-medium mb-1" style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>
                  Chronic Conditions
                </p>
                <p style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>Hypertension, Type 2 Diabetes</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm font-medium mb-1" style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>
                  Allergies
                </p>
                <p style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>Penicillin, Peanuts</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm font-medium mb-1" style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>
                  Ongoing Treatments
                </p>
                <p style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>Blood pressure management, Diabetes control</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm font-medium mb-1" style={{ color: '#5F6B7A', fontFamily: 'Roboto, sans-serif' }}>
                  Last Checkup
                </p>
                <p style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>October 5, 2025 - Dr. Arjun Mehta</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F7FA', fontFamily: 'Inter, sans-serif' }}>
      {/* Top Navigation Bar */}
      <header 
        className="bg-white border-b sticky top-0 z-50" 
        style={{ 
          borderColor: '#E5E7EB',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 3px 0px'
        }}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #1E4C9A 0%, #46C2B8 100%)' }}
              >
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-semibold" style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>
                HealthCare Portal
              </h1>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" 
                  style={{ color: '#5F6B7A' }} 
                />
                <Input
                  placeholder="Search doctors, appointments, reports..."
                  className="pl-10 rounded-xl border-gray-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-xl relative"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <Bell className="w-5 h-5" style={{ color: '#5F6B7A' }} />
                  <span 
                    className="absolute top-1 right-1 w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#EF4444' }}
                  ></span>
                </Button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div 
                    className="absolute right-0 mt-2 w-80 bg-white rounded-xl border z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
                    style={{
                      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 8px 24px 0px',
                      borderColor: '#E5E7EB'
                    }}
                  >
                    <div className="p-4 border-b" style={{ borderColor: '#F5F7FA' }}>
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold" style={{ color: '#2E2E2E', fontFamily: 'Poppins, sans-serif' }}>
                          Notifications
                        </h3>
                        <Button size="sm" variant="ghost" className="text-xs" style={{ color: '#46C2B8' }}>
                          Mark all read
                        </Button>
                      </div>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div 
                          key={notification.id} 
                          className="p-4 border-b hover:bg-blue-50/30 transition-colors cursor-pointer" 
                          style={{ borderColor: '#F5F7FA' }}
                        >
                          <div className="flex items-start space-x-3">
                            <div 
                              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: '#E0F2FE', color: '#1E4C9A' }}
                            >
                              {notification.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium" style={{ color: '#2E2E2E', fontFamily: 'Inter, sans-serif' }}>
                                {notification.title}
                              </p>
                              <p className="text-xs" style={{ color: '#5F6B7A' }}>{notification.text}</p>
                              <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>{notification.time}</p>
                            </div>
                            {notification.status === 'unread' && (
                              <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#46C2B8' }}></div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 text-center border-t" style={{ borderColor: '#F5F7FA' }}>
                      <Button variant="ghost" size="sm" className="text-xs" style={{ color: '#1E4C9A' }}>
                        View all notifications
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Settings */}
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl"
                onClick={() => setCurrentPage('settings')}
              >
                <Settings className="w-5 h-5" style={{ color: '#5F6B7A' }} />
              </Button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <Avatar className="w-8 h-8 border-2" style={{ borderColor: '#46C2B8' }}>
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face" />
                    <AvatarFallback style={{ backgroundColor: '#E0F2FE', color: '#1E4C9A' }}>
                      {patientName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="w-4 h-4" style={{ color: '#5F6B7A' }} />
                </button>

                {/* Profile Menu */}
                {showProfileMenu && (
                  <div 
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl border z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
                    style={{
                      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 8px 24px 0px',
                      borderColor: '#E5E7EB'
                    }}
                  >
                    <button
                      onClick={() => {
                        setCurrentPage('settings');
                        setShowProfileMenu(false);
                      }}
                      className="w-full flex items-center space-x-3 px-4 py-3 transition-all duration-150 hover:bg-blue-50/30"
                      style={{ color: '#2E2E2E' }}
                    >
                      <User className="w-4 h-4" />
                      <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Profile</span>
                    </button>
                    <button
                      onClick={() => {
                        setCurrentPage('settings');
                        setShowProfileMenu(false);
                      }}
                      className="w-full flex items-center space-x-3 px-4 py-3 transition-all duration-150 hover:bg-blue-50/30"
                      style={{ color: '#2E2E2E' }}
                    >
                      <Settings className="w-4 h-4" />
                      <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Settings</span>
                    </button>
                    <hr style={{ borderColor: '#F5F7FA' }} />
                    <button
                      onClick={onLogout}
                      className="w-full flex items-center space-x-3 px-4 py-3 transition-all duration-150 hover:bg-red-50"
                      style={{ color: '#EF4444' }}
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside 
          className="w-64 bg-white border-r min-h-[calc(100vh-73px)] sticky top-[73px]" 
          style={{ 
            borderColor: '#E5E7EB',
            boxShadow: 'rgba(0, 0, 0, 0.02) 2px 0px 4px 0px'
          }}
        >
          <nav className="p-4 space-y-2">
            {[
              { id: 'dashboard', icon: Home, label: 'Dashboard' },
              { id: 'appointments', icon: CalendarIcon, label: 'Appointments' },
              { id: 'prescriptions', icon: Pill, label: 'Prescriptions' },
              { id: 'lab-reports', icon: FileText, label: 'Lab Reports' },
              { id: 'messages', icon: MessageSquare, label: 'Messages', badge: doctors.reduce((acc, d) => acc + d.unread, 0) },
              { id: 'billing', icon: CreditCard, label: 'Billing' },
              { id: 'settings', icon: Settings, label: 'Settings' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id as any)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-150 ${
                  currentPage === item.id
                    ? 'shadow-sm'
                    : 'hover:bg-gray-50'
                }`}
                style={{
                  backgroundColor: currentPage === item.id ? '#E0F2FE' : 'transparent',
                  color: currentPage === item.id ? '#1E4C9A' : '#5F6B7A',
                  borderLeft: currentPage === item.id ? '3px solid #1E4C9A' : '3px solid transparent',
                }}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{item.label}</span>
                </div>
                {item.badge && item.badge > 0 && (
                  <Badge 
                    className="border-0 text-white text-xs w-5 h-5 flex items-center justify-center p-0"
                    style={{ backgroundColor: '#46C2B8' }}
                  >
                    {item.badge}
                  </Badge>
                )}
              </button>
            ))}

            <Separator className="my-4" />

            <button
              onClick={onLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-150 hover:bg-red-50"
              style={{ color: '#EF4444' }}
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Logout</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {currentPage === 'dashboard' && renderDashboard()}
          {currentPage === 'appointments' && renderAppointments()}
          {currentPage === 'prescriptions' && renderPrescriptions()}
          {currentPage === 'lab-reports' && renderLabReports()}
          {currentPage === 'messages' && renderMessages()}
          {currentPage === 'billing' && renderBilling()}
          {currentPage === 'settings' && renderSettings()}
        </main>
      </div>
    </div>
  );
}