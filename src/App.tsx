import React, { useState } from 'react';
import { Calendar, Users, PlusCircle, MessageSquare, LogIn, Settings } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeEventTab, setActiveEventTab] = useState('upcoming');

  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "Tech Fest 2025",
      date: "Feb 15, 2025",
      location: "Main Auditorium",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800",
      description: "Annual technology festival featuring workshops, competitions, and exhibitions."
    },
    {
      id: 2,
      title: "AI Workshop",
      date: "April 10, 2025",
      location: "CS Building",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800",
      description: "Hands-on workshop on artificial intelligence and machine learning."
    },
    {
      id: 3,
      title: "Cultural Night",
      date: "May 20, 2025",
      location: "Open Theater",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800",
      description: "A night of music, dance, and cultural performances."
    }
  ];

  const pastEvents: Event[] = [
    {
      id: 4,
      title: "Hackathon 2024",
      date: "Jan 15, 2024",
      location: "Innovation Hub",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800",
      description: "24-hour coding competition with amazing prizes."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-indigo-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">EventHub</h1>
            </div>
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'dashboard' ? 'bg-indigo-700' : 'hover:bg-indigo-500'
                }`}
              >
                <Calendar size={18} />
                <span>Events</span>
              </button>
              <button
                onClick={() => setActiveTab('create')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'create' ? 'bg-indigo-700' : 'hover:bg-indigo-500'
                }`}
              >
                <PlusCircle size={18} />
                <span>Create</span>
              </button>
              <button
                onClick={() => setActiveTab('register')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'register' ? 'bg-indigo-700' : 'hover:bg-indigo-500'
                }`}
              >
                <Users size={18} />
                <span>Register</span>
              </button>
              <button
                onClick={() => setActiveTab('feedback')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'feedback' ? 'bg-indigo-700' : 'hover:bg-indigo-500'
                }`}
              >
                <MessageSquare size={18} />
                <span>Feedback</span>
              </button>
              <button
                onClick={() => setActiveTab('login')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'login' ? 'bg-indigo-700' : 'hover:bg-indigo-500'
                }`}
              >
                <LogIn size={18} />
                <span>Login</span>
              </button>
              <button
                onClick={() => setActiveTab('admin')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'admin' ? 'bg-indigo-700' : 'hover:bg-indigo-500'
                }`}
              >
                <Settings size={18} />
                <span>Admin</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Dashboard */}
        {activeTab === 'dashboard' && (
          <div>
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setActiveEventTab('upcoming')}
                className={`px-4 py-2 rounded-md ${
                  activeEventTab === 'upcoming'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveEventTab('past')}
                className={`px-4 py-2 rounded-md ${
                  activeEventTab === 'past'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Past Events
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeEventTab === 'upcoming' ? upcomingEvents : pastEvents).map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{event.date}</span>
                      <span>{event.location}</span>
                    </div>
                    <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Create Event Form */}
        {activeTab === 'create' && (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Event</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Event Title</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" rows={4}></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                Create Event
              </button>
            </form>
          </div>
        )}

        {/* Registration Form */}
        {activeTab === 'register' && (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Registration</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                Register
              </button>
            </form>
          </div>
        )}

        {/* Feedback Form */}
        {activeTab === 'feedback' && (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Provide Feedback</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Event Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Feedback</label>
                <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" rows={4}></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                Submit Feedback
              </button>
            </form>
          </div>
        )}

        {/* Login Form */}
        {activeTab === 'login' && (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Login</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                Login
              </button>
            </form>
          </div>
        )}

        {/* Admin Dashboard */}
        {activeTab === 'admin' && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-indigo-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-900 mb-4">Event Management</h3>
                <p className="text-indigo-700 mb-4">Total Events: {upcomingEvents.length + pastEvents.length}</p>
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Manage Events
                </button>
              </div>
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-4">User Management</h3>
                <p className="text-green-700 mb-4">Total Users: 150</p>
                <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                  Manage Users
                </button>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-4">Analytics</h3>
                <p className="text-purple-700 mb-4">Active Registrations: 45</p>
                <button className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                  View Reports
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">EventHub is your one-stop solution for managing and participating in college events.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">Email: info@eventhub.com</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EventHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;