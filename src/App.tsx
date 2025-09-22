import React, { useState } from 'react';
import { 
  Sprout, 
  ShoppingCart, 
  MapPin, 
  Users, 
  Cloud, 
  Bell,
  Menu,
  X,
  Pill,
  Tractor,
  Home,
  Calendar,
  Phone,
  Mail,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  Search,
  Filter,
  Eye,
  MessageSquare,
  Award,
  Globe,
  Smartphone,
  Bot
} from 'lucide-react';
import { NotificationSystem } from './components/NotificationSystem';
import { MobileRegistration } from './components/MobileRegistration';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('medicine');
  const [showRegistration, setShowRegistration] = useState(false);

  const platformFeatures = [
    {
      icon: Pill,
      title: "Wholesale Medicine Trading",
      description: "Connect with certified wholesale medicine traders for agricultural supplies, pesticides, and fertilizers at competitive bulk prices.",
      color: "bg-emerald-500",
      stats: "500+ Suppliers",
      link: "#medicine-marketplace"
    },
    {
      icon: ShoppingCart,
      title: "Direct Farm Sales",
      description: "Sell your fresh farm products directly to consumers and producers, eliminating middlemen and maximizing your profits.",
      color: "bg-green-500",
      stats: "1000+ Products",
      link: "#product-sales"
    },
    {
      icon: MapPin,
      title: "Land Rental Marketplace",
      description: "List your agricultural land for rent or find suitable farmland for cultivation with detailed property information and reviews.",
      color: "bg-teal-500",
      stats: "200+ Properties",
      link: "#land-rental"
    },
    {
      icon: Users,
      title: "Farm Labor Network",
      description: "Connect skilled farm workers with farmers needing labor. Find seasonal work opportunities or hire experienced agricultural workers.",
      color: "bg-blue-500",
      stats: "2000+ Workers",
      link: "#labor-network"
    },
    {
      icon: Cloud,
      title: "Smart Climate Monitoring",
      description: "Get real-time weather data, forecasts, and climate analytics tailored to your specific farming location and crop types.",
      color: "bg-sky-500",
      stats: "Live Data",
      link: "#climate-monitoring"
    },
    {
      icon: Bell,
      title: "AI-Powered Notifications",
      description: "Receive personalized alerts about weather changes, market prices, pest warnings, and optimal farming activities.",
      color: "bg-orange-500",
      stats: "Smart Alerts",
      link: "#notifications"
    },
    {
      icon: Smartphone,
      title: "Mobile SMS Alerts",
      description: "Get instant SMS notifications on your mobile phone for urgent weather alerts, market changes, and farming reminders.",
      color: "bg-purple-500",
      stats: "Real-time SMS",
      link: "#mobile-alerts"
    },
    {
      icon: Bot,
      title: "AI Chatbot Assistant",
      description: "Chat with our Gemini-powered AI assistant for instant farming advice, weather queries, and agricultural guidance 24/7.",
      color: "bg-indigo-500",
      stats: "Powered by Gemini",
      link: "#ai-assistant"
    }
  ];

  const marketplaceItems = {
    medicine: [
      {
        name: "Organic Pesticide Combo",
        supplier: "GreenChem Industries",
        price: "₹2,500/50kg",
        rating: 4.8,
        image: "https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=300",
        inStock: true
      },
      {
        name: "NPK Fertilizer Premium",
        supplier: "AgriSupply Co.",
        price: "₹1,800/40kg",
        rating: 4.9,
        image: "https://images.pexels.com/photos/4207680/pexels-photo-4207680.jpeg?auto=compress&cs=tinysrgb&w=300",
        inStock: true
      },
      {
        name: "Bio Fungicide Solution",
        supplier: "EcoFarm Solutions",
        price: "₹950/10L",
        rating: 4.7,
        image: "https://images.pexels.com/photos/4207731/pexels-photo-4207731.jpeg?auto=compress&cs=tinysrgb&w=300",
        inStock: false
      }
    ],
    products: [
      {
        name: "Organic Basmati Rice",
        farmer: "Kumar Organic Farm",
        price: "₹120/kg",
        rating: 4.9,
        image: "https://images.pexels.com/photos/33944/jump-shot-movement-airborne-jump.jpg?auto=compress&cs=tinysrgb&w=300",
        available: "500kg"
      },
      {
        name: "Fresh Tomatoes",
        farmer: "Sharma Vegetables",
        price: "₹40/kg",
        rating: 4.6,
        image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=300",
        available: "200kg"
      },
      {
        name: "Premium Wheat",
        farmer: "Singh Grain Farm",
        price: "₹28/kg",
        rating: 4.8,
        image: "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=300",
        available: "1000kg"
      }
    ],
    land: [
      {
        location: "Pune, Maharashtra",
        area: "10 Acres",
        price: "₹15,000/month",
        rating: 4.7,
        image: "https://images.pexels.com/photos/1246953/pexels-photo-1246953.jpeg?auto=compress&cs=tinysrgb&w=300",
        soilType: "Black Cotton"
      },
      {
        location: "Jaipur, Rajasthan",
        area: "25 Acres",
        price: "₹30,000/month",
        rating: 4.8,
        image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=300",
        soilType: "Sandy Loam"
      },
      {
        location: "Ludhiana, Punjab",
        area: "15 Acres",
        price: "₹25,000/month",
        rating: 4.9,
        image: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=300",
        soilType: "Alluvial"
      }
    ]
  };

  const laborJobs = [
    {
      title: "Wheat Harvesting Team",
      location: "Haryana",
      duration: "15 days",
      pay: "₹800/day",
      type: "Seasonal"
    },
    {
      title: "Organic Farm Workers",
      location: "Kerala",
      duration: "3 months",
      pay: "₹12,000/month",
      type: "Contract"
    },
    {
      title: "Greenhouse Technician",
      location: "Karnataka",
      duration: "Permanent",
      pay: "₹25,000/month",
      type: "Full-time"
    }
  ];

  const weatherData = {
    temperature: "28°C",
    humidity: "65%",
    rainfall: "12mm expected",
    windSpeed: "15 km/h",
    forecast: "Partly cloudy with chances of light rain"
  };

  const notifications = [
    {
      type: "weather",
      message: "Heavy rain expected in your area tomorrow. Consider protecting your crops.",
      time: "2 hours ago",
      priority: "high"
    },
    {
      type: "market",
      message: "Tomato prices increased by 15% in your region's market.",
      time: "5 hours ago",
      priority: "medium"
    },
    {
      type: "pest",
      message: "Pest alert: Aphid infestation reported in nearby farms.",
      time: "1 day ago",
      priority: "high"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Sprout className="h-8 w-8 text-green-600" />
                alt={'name' in item ? item.name : ('location' in item ? item.location : '')} 
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                    {'name' in item ? item.name : ('location' in item ? item.location : '')}
                <a href="#marketplace" className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Marketplace</a>
                <a href="#labor" className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Jobs</a>
                <a href="#climate" className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Climate</a>
                <a href="#contact" className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
                Login
              </button>
              <button 
                onClick={() => setShowRegistration(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Sign Up
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-green-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <a href="#home" className="text-gray-900 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#features" className="text-gray-900 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Features</a>
              <a href="#marketplace" className="text-gray-900 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Marketplace</a>
              <a href="#labor" className="text-gray-900 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Jobs</a>
              <a href="#climate" className="text-gray-900 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Climate</a>
              <a href="#contact" className="text-gray-900 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
              <button 
                onClick={() => setShowRegistration(true)}
                className="w-full text-left bg-green-600 text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Google/Facebook Hackathon 2025 Project
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive
              <span className="text-green-600"> Agricultural</span>
              <br />Ecosystem Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Connecting farmers, traders, land owners, and agricultural workers through an integrated 
              platform featuring wholesale medicine trading, direct sales, land rentals, labor matching, 
              and smart climate monitoring with AI-powered notifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => setShowRegistration(true)}
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                Explore Platform <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-all transform hover:scale-105 shadow-lg">
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-gray-600">Medicine Suppliers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">1K+</div>
                <div className="text-gray-600">Farm Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">200+</div>
                <div className="text-gray-600">Land Properties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">2K+</div>
                <div className="text-gray-600">Active Workers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integrated Agricultural Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive platform brings together all aspects of modern agriculture, 
              from wholesale trading to climate monitoring, in one unified ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 group transform hover:scale-105 relative overflow-hidden"
              >
                {(feature.title.includes('Mobile') || feature.title.includes('AI Chatbot')) && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    NEW
                  </div>
                )}
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <span className="text-sm text-green-600 font-medium">{feature.stats}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                <button className="text-green-600 font-semibold hover:text-green-700 flex items-center group-hover:translate-x-1 transition-transform">
                  Explore <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Notifications & AI Features */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Smart Notifications & AI Assistant
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay connected with real-time mobile alerts and get instant farming advice from our Gemini-powered AI chatbot
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Mobile Notifications */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Smartphone className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Mobile SMS Alerts</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get instant SMS notifications directly to your mobile phone for critical farming updates, 
                weather warnings, and market opportunities. Never miss important information again.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-lg mr-3">
                    <Bell className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Urgent Weather Alerts</h4>
                    <p className="text-sm text-gray-600">Heavy rain, hail, or extreme temperature warnings</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Market Price Updates</h4>
                    <p className="text-sm text-gray-600">Real-time price changes and selling opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-3">
                    <Shield className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pest & Disease Warnings</h4>
                    <p className="text-sm text-gray-600">Early detection alerts for crop protection</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setShowRegistration(true)}
                className="w-full mt-6 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Enable Mobile Alerts
              </button>
            </div>

            {/* AI Chatbot */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Bot className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">AI Farm Assistant</h3>
                <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Powered by Gemini</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Chat with our advanced AI assistant for instant farming advice, weather queries, 
                pest identification, and personalized recommendations 24/7.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Bot className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <div className="bg-white p-3 rounded-lg shadow-sm flex-1">
                      <p className="text-sm text-gray-800">Hello! I can help you with weather forecasts, pest control, fertilizer recommendations, and market prices. What would you like to know?</p>
                    </div>
                  </div>
                  <div className="flex items-start justify-end">
                    <div className="bg-indigo-600 text-white p-3 rounded-lg shadow-sm max-w-xs">
                      <p className="text-sm">What's the best time to plant tomatoes in Maharashtra?</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Bot className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <div className="bg-white p-3 rounded-lg shadow-sm flex-1">
                      <p className="text-sm text-gray-800">For Maharashtra, the best time to plant tomatoes is during the Rabi season (October-November) and summer season (January-February). Current weather conditions look favorable!</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="text-center p-3 bg-indigo-50 rounded-lg">
                  <div className="text-lg font-bold text-indigo-600">24/7</div>
                  <div className="text-xs text-gray-600">Available</div>
                </div>
                <div className="text-center p-3 bg-indigo-50 rounded-lg">
                  <div className="text-lg font-bold text-indigo-600">10+</div>
                  <div className="text-xs text-gray-600">Languages</div>
                </div>
              </div>
              
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                Start Chatting
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Active Marketplaces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our comprehensive marketplaces for medicines, products, and land rentals
            </p>
          </div>

          {/* Marketplace Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setActiveTab('medicine')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === 'medicine'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Medicine Trading
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === 'products'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Farm Products
              </button>
              <button
                onClick={() => setActiveTab('land')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === 'land'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Land Rentals
              </button>
            </div>
          </div>

          {/* Marketplace Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketplaceItems[activeTab as keyof typeof marketplaceItems].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.name || item.location} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.name || item.location}
                    </h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{item.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {(item as any).supplier || (item as any).farmer || (item as any).area}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-600">{item.price}</span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      {activeTab === 'land' ? 'View Details' : 'Buy Now'}
                    </button>
                  </div>
                  {activeTab === 'medicine' && (
                    <div className="mt-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        (item as any).inStock 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {(item as any).inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Labor Network */}
      <section id="labor" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Farm Labor Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect skilled farm workers with employers for seasonal and permanent positions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {laborJobs.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    job.type === 'Permanent' 
                      ? 'bg-green-100 text-green-800'
                      : job.type === 'Contract'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {job.type}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{job.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span className="font-semibold text-green-600">{job.pay}</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors">
              View All Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Climate Monitoring */}
      <section id="climate" className="py-20 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Smart Climate Monitoring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time weather data and AI-powered notifications to help you make informed farming decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Weather Dashboard */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Cloud className="h-5 w-5 mr-2 text-blue-500" />
                Current Weather
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{weatherData.temperature}</div>
                  <div className="text-sm text-gray-600">Temperature</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{weatherData.humidity}</div>
                  <div className="text-sm text-gray-600">Humidity</div>
                </div>
                <div className="text-center p-4 bg-sky-50 rounded-lg">
                  <div className="text-2xl font-bold text-sky-600">{weatherData.rainfall}</div>
                  <div className="text-sm text-gray-600">Rainfall</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600">{weatherData.windSpeed}</div>
                  <div className="text-sm text-gray-600">Wind Speed</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">{weatherData.forecast}</p>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Bell className="h-5 w-5 mr-2 text-orange-500" />
                Smart Notifications
              </h3>
              <div className="space-y-3">
                {notifications.map((notification, index) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${
                    notification.priority === 'high' 
                      ? 'bg-red-50 border-red-500'
                      : 'bg-yellow-50 border-yellow-500'
                  }`}>
                    <p className="text-gray-800 text-sm">{notification.message}</p>
                    <p className="text-gray-500 text-xs mt-1">{notification.time}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                View All Notifications
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platform Impact
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Transforming agriculture through technology and community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-green-100">Medicine Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1,000+</div>
              <div className="text-green-100">Farm Products Listed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">200+</div>
              <div className="text-green-100">Properties Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">2,000+</div>
              <div className="text-green-100">Active Workers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to join the agricultural revolution? Contact us or sign up to get started
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">info@agroconnect.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Agricultural Tech Hub, Bangalore, India</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">www.agroconnect.com</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Sign Up</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500">
                  <option value="">Select User Type</option>
                  <option value="farmer">Farmer</option>
                  <option value="trader">Medicine Trader</option>
                  <option value="landowner">Land Owner</option>
                  <option value="worker">Farm Worker</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Join Platform
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Sprout className="h-6 w-6 text-green-500" />
                <span className="ml-2 text-lg font-bold">AgroConnect</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing agriculture through comprehensive digital solutions and community connections.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Medicine Trading</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Direct Sales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Land Rentals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Labor Network</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Climate Monitoring</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Smart Notifications</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Market Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Expert Consultation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AgroConnect Platform. Built for Google/Facebook Hackathon. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Registration Modal */}
      {showRegistration && (
        <MobileRegistration onClose={() => setShowRegistration(false)} />
      )}

      {/* Notification System & AI Chatbot */}
      <NotificationSystem />
    </div>
  );
}

export default App;