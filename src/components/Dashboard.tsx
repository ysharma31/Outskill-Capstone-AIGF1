import { LayoutDashboard, Package, Clock, CheckCircle, AlertCircle, TrendingUp, DollarSign, Users } from 'lucide-react';
import logo from '../assets/Simbly-logo copy.jpg';
import { supabase } from '../lib/supabase'


interface DashboardProps {
  onNavigate: (section: string) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  const stats = [
    {
      label: 'Total Orders',
      value: '247',
      change: '+12%',
      icon: Package,
      color: 'from-primary to-secondary',
    },
    {
      label: 'Pending Orders',
      value: '18',
      change: '-5%',
      icon: Clock,
      color: 'from-secondary to-cyan-400',
    },
    {
      label: 'Completed',
      value: '229',
      change: '+18%',
      icon: CheckCircle,
      color: 'from-green-400 to-green-600',
    },
    {
      label: 'Revenue',
      value: '₹12.4L',
      change: '+23%',
      icon: TrendingUp,
      color: 'from-primary to-secondary',
    },
  ];

  const recentOrders = [
    {
      id: 'PO-2547',
      customer: 'Sharma Electronics',
      items: '25 items',
      amount: '₹45,200',
      status: 'Completed',
      date: '2 hours ago',
    },
    {
      id: 'PO-2546',
      customer: 'Kumar Trading Co.',
      items: '12 items',
      amount: '₹28,900',
      status: 'Pending',
      date: '5 hours ago',
    },
    {
      id: 'PO-2545',
      customer: 'Patel Distributors',
      items: '48 items',
      amount: '₹67,500',
      status: 'Processing',
      date: '1 day ago',
    },
    {
      id: 'PO-2544',
      customer: 'Reddy Wholesale',
      items: '33 items',
      amount: '₹52,100',
      status: 'Completed',
      date: '1 day ago',
    },
    {
      id: 'PO-2543',
      customer: 'Verma Enterprises',
      items: '19 items',
      amount: '₹34,800',
      status: 'Overdue',
      date: '2 days ago',
    },
  ];

  const paymentReminders = [
    {
      customer: 'Sharma Electronics',
      amount: '₹45,200',
      dueDate: 'Today',
      status: 'Called',
    },
    {
      customer: 'Kumar Trading Co.',
      amount: '₹28,900',
      dueDate: 'Tomorrow',
      status: 'Scheduled',
    },
    {
      customer: 'Verma Enterprises',
      amount: '₹34,800',
      dueDate: '3 days overdue',
      status: 'Follow-up',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Processing':
        return 'bg-blue-100 text-blue-700';
      case 'Overdue':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getReminderStatusColor = (status: string) => {
    switch (status) {
      case 'Called':
        return 'bg-green-100 text-green-700';
      case 'Scheduled':
        return 'bg-blue-100 text-blue-700';
      case 'Follow-up':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/10 to-bg/20">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Simbly.ai" className="h-12 w-auto" />
            </div>
            <button
              onClick={() => onNavigate('landing')}
              className="px-6 py-2.5 rounded-full bg-white text-gray-700 font-medium hover:bg-primary hover:text-white transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your orders today.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Recent Orders</h2>
                <button className="text-primary hover:text-secondary font-medium text-sm">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200 hover:border-primary"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                          <Package size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{order.id}</div>
                          <div className="text-sm text-gray-600">{order.customer}</div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{order.items}</span>
                      <span className="font-semibold text-gray-900">{order.amount}</span>
                      <span className="text-gray-500">{order.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle size={20} className="text-accent" />
                Payment Reminders
              </h2>
              <div className="space-y-3">
                {paymentReminders.map((reminder, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-sm font-medium text-gray-900">
                        {reminder.customer}
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getReminderStatusColor(reminder.status)}`}>
                        {reminder.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">{reminder.amount}</div>
                    <div className="text-xs text-gray-500">{reminder.dueDate}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
              <p className="text-white/90 text-sm mb-4">
                Our support team is available 24/7 via WhatsApp
              </p>
              <button className="w-full px-4 py-2.5 bg-white text-primary font-semibold rounded-full hover:shadow-lg transition-all duration-200">
                Contact Support
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <DollarSign size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Collections</h3>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">₹8.2L</div>
            <div className="text-sm text-gray-600">Collected this month</div>
            <div className="mt-4 text-sm text-green-600 font-medium">+15% from last month</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-cyan-400 rounded-lg flex items-center justify-center">
                <Users size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Active Customers</h3>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">142</div>
            <div className="text-sm text-gray-600">Ordered this month</div>
            <div className="mt-4 text-sm text-green-600 font-medium">+8 new customers</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <LayoutDashboard size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Automation Rate</h3>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">94%</div>
            <div className="text-sm text-gray-600">Orders fully automated</div>
            <div className="mt-4 text-sm text-green-600 font-medium">Time saved: 12.5 hrs/week</div>
          </div>
        </div>
      </div>
    </div>
  );
}
