"use client";
import React, { useState } from "react";
import {
  Users,
  UserCheck,
  MapPin,
  Truck,
  Search,
  Bell,
  Moon,
  LayoutDashboard,
  User,
  UserCog,
  Navigation,
  Settings,
  LogOut,
  ChevronDown,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample data for the charts and tables
const chartData = [
  { month: "Jan", compliance: 45000, missed: 25000 },
  { month: "Feb", compliance: 48000, missed: 28000 },
  { month: "Mar", compliance: 42000, missed: 32000 },
  { month: "Apr", compliance: 55000, missed: 30000 },
  { month: "May", compliance: 65000, missed: 35000 },
  { month: "Jun", compliance: 75000, missed: 40000 },
];

const broadcastData = [
  {
    id: 1,
    date: "June 12, 8:00am",
    localGovt: "Nnewi North",
    assignedTo: "Truck 12",
    taskTitle: "Bulk Pickup",
    channels: "App",
    status: "Successful",
  },
  {
    id: 2,
    date: "June 12, 8:00am",
    localGovt: "Nnewi North",
    assignedTo: "Truck 12",
    taskTitle: "Bulk Pickup",
    channels: "App",
    status: "Pending",
  },
];

const feedbackData = [
  { id: 1, name: "Moses Blessing", location: "Nnewi North" },
  { id: 2, name: "Moses Blessing", location: "Nnewi North" },
  { id: 3, name: "Moses Blessing", location: "Nnewi North" },
];

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  trend?: string;
  trendUp?: boolean;
  statusIndicators?: { green: number; red: number };
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  label,
  trend,
  trendUp,
  statusIndicators,
}) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-full bg-orange-100">{icon}</div>
        <div>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      </div>
      <div className="text-right">
        {trend && (
          <div
            className={`flex items-center text-sm ${
              trendUp ? "text-green-600" : "text-red-600"
            }`}
          >
            <TrendingUp className="w-4 h-4 mr-1" />
            {trend}
          </div>
        )}
        {statusIndicators && (
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              <span className="text-xs text-gray-600">
                {statusIndicators.green}
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
              <span className="text-xs text-gray-600">
                {statusIndicators.red}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const Sidebar: React.FC<{
  activeItem: string;
  setActiveItem: (item: string) => void;
}> = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "user", label: "User", icon: User },
    { id: "staff", label: "Staff", icon: UserCog },
    { id: "dropoff", label: "Dropoff", icon: Navigation },
    { id: "trucks", label: "Trucks", icon: Truck },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "logout", label: "Logout", icon: LogOut },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="text-xl font-bold text-green-400">NERA</span>
        </div>
      </div>

      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-gray-800 transition-colors ${
                activeItem === item.id
                  ? "bg-gray-800 border-r-2 border-green-400"
                  : ""
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Button>
          );
        })}
      </nav>
    </div>
  );
};

const LineChart: React.FC = () => {
  return (
    <div className="h-64 flex items-end justify-between space-x-2 px-4">
      {chartData.map((data) => (
        <div
          key={data.month}
          className="flex flex-col items-center space-y-2 flex-1"
        >
          <div className="relative w-full h-48 flex flex-col justify-end">
            <div
              className="bg-green-500 rounded-t-sm relative"
              style={{ height: `${(data.compliance / 80000) * 100}%` }}
            ></div>
            <div
              className="bg-orange-400 rounded-t-sm relative -mt-2"
              style={{ height: `${(data.missed / 80000) * 100}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-600">{data.month}</span>
        </div>
      ))}
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [selectedRegion, setSelectedRegion] = useState("Nnewi North");
  const [selectedMonth, setSelectedMonth] = useState("Month");

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      <div className="ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </Button>
              <Button className="p-2 text-gray-400 hover:text-gray-600">
                <Moon className="w-5 h-5" />
              </Button>
              <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome Back, Okwuchukwu!
            </h1>
            <p className="text-gray-600">
              Monitor activity across all active routes and zones
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={<Users className="w-6 h-6 text-orange-600" />}
              value="1000"
              label="Total Users"
              trend="20.5%"
              trendUp={true}
            />
            <StatCard
              icon={<UserCheck className="w-6 h-6 text-green-600" />}
              value="400"
              label="Total Staffs"
            />
            <StatCard
              icon={<MapPin className="w-6 h-6 text-gray-600" />}
              value="80"
              label="Dropoff Points"
              statusIndicators={{ green: 70, red: 10 }}
            />
            <StatCard
              icon={<Truck className="w-6 h-6 text-orange-600" />}
              value="100"
              label="Total Trucks"
              statusIndicators={{ green: 80, red: 20 }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map Section */}
            <div className="lg:col-span-2 overflow-hidden w-full h-full">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Live Collection Map
                </h3>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.661214272678!2d6.8952018!3d6.0411383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104397a2734440ef%3A0xe5b226e48b96ad2b!2sICE%20INNOVATION%20HUB!5e0!3m2!1sen!2sng!4v1753786032039!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Analytics Chart */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Reporting and Analytics
                </h3>
                <div className="flex space-x-2">
                  <select
                    name="region"
                    title="Region"
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="text-sm border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option>Nnewi North</option>
                    <option>Nnewi South</option>
                  </select>
                  <select
                    name="month"
                    title="Month"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="text-sm border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Compliance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Missed pickups</span>
                </div>
              </div>

              <LineChart />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            {/* Scheduled Broadcasts */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Scheduled Broadcasts
                </h3>
                <Button className="flex items-center text-sm text-green-600 hover:text-green-700">
                  View all <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-medium text-gray-600">
                        Date/Time
                      </th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">
                        Local Govt.
                      </th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">
                        Assigned to
                      </th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">
                        Task Title
                      </th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">
                        Channels
                      </th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">
                        Status
                      </th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {broadcastData.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100">
                        <td className="py-3 px-2">{item.date}</td>
                        <td className="py-3 px-2">{item.localGovt}</td>
                        <td className="py-3 px-2">{item.assignedTo}</td>
                        <td className="py-3 px-2">{item.taskTitle}</td>
                        <td className="py-3 px-2">{item.channels}</td>
                        <td className="py-3 px-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              item.status === "Successful"
                                ? "bg-green-100 text-green-800"
                                : "bg-orange-100 text-orange-800"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3 px-2">
                          <Button className="flex items-center text-xs text-gray-600 hover:text-gray-800">
                            View <ChevronDown className="w-3 h-3 ml-1" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Citizen Feedback */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Citizen Feedback
                </h3>
                <Button className="flex items-center text-sm text-green-600 hover:text-green-700">
                  View all <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="space-y-4">
                {feedbackData.map((feedback) => (
                  <div
                    key={feedback.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <div>
                        <div className="font-medium text-sm text-gray-900">
                          {feedback.name}
                        </div>
                        <div className="text-xs text-gray-600">
                          {feedback.location}
                        </div>
                      </div>
                    </div>
                    <Button className="text-xs text-green-600 hover:text-green-700 px-3 py-1 border border-green-600 rounded">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
