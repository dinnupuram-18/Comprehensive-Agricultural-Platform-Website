import React, { useState, useEffect } from 'react';
import { Bell, Phone, MessageSquare, X, Send, Bot, User } from 'lucide-react';

interface Notification {
  id: string;
  type: 'weather' | 'market' | 'pest' | 'irrigation' | 'harvest';
  title: string;
  message: string;
  timestamp: Date;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  sent_to_mobile: boolean;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  message: string;
  timestamp: Date;
}

export const NotificationSystem: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'weather',
      title: 'Heavy Rain Alert',
      message: 'Heavy rainfall expected in your area within 2 hours. Protect your crops and equipment.',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      priority: 'urgent',
      sent_to_mobile: true
    },
    {
      id: '2',
      type: 'market',
      title: 'Price Surge Alert',
      message: 'Tomato prices increased by 25% in your local market. Good time to sell!',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      priority: 'high',
      sent_to_mobile: true
    },
    {
      id: '3',
      type: 'pest',
      title: 'Pest Warning',
      message: 'Aphid infestation reported in nearby farms. Check your crops and apply preventive measures.',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      priority: 'medium',
      sent_to_mobile: true
    }
  ]);

  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      message: 'Hello! I\'m your AI farming assistant powered by Gemini. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 border-red-500 text-red-800';
      case 'high': return 'bg-orange-100 border-orange-500 text-orange-800';
      case 'medium': return 'bg-yellow-100 border-yellow-500 text-yellow-800';
      default: return 'bg-blue-100 border-blue-500 text-blue-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'weather': return '🌦️';
      case 'market': return '💰';
      case 'pest': return '🐛';
      case 'irrigation': return '💧';
      case 'harvest': return '🌾';
      default: return '📢';
    }
  };

  const simulateAIResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let aiResponse = '';
    
    // Simple keyword-based responses (in real implementation, this would call Gemini API)
    if (userMessage.toLowerCase().includes('weather')) {
      aiResponse = 'Based on current weather data, expect partly cloudy conditions with 65% humidity. I recommend checking your irrigation system and protecting sensitive crops from potential rain.';
    } else if (userMessage.toLowerCase().includes('pest') || userMessage.toLowerCase().includes('insect')) {
      aiResponse = 'For pest management, I suggest using integrated pest management (IPM) techniques. Apply neem oil spray early morning or evening. Monitor your crops daily and consider beneficial insects like ladybugs.';
    } else if (userMessage.toLowerCase().includes('price') || userMessage.toLowerCase().includes('market')) {
      aiResponse = 'Current market trends show tomatoes at ₹45/kg, onions at ₹30/kg. I recommend selling tomatoes now as prices are 20% above average. Would you like specific market recommendations for your crops?';
    } else if (userMessage.toLowerCase().includes('fertilizer') || userMessage.toLowerCase().includes('nutrient')) {
      aiResponse = 'For optimal growth, consider NPK 19:19:19 for vegetative stage and 13:40:13 for flowering. Soil testing is recommended every 6 months. Organic alternatives include compost and vermicompost.';
    } else {
      aiResponse = 'I understand you\'re asking about farming practices. Could you be more specific about your crop type, location, or the particular challenge you\'re facing? I can provide tailored advice for weather, pests, fertilizers, market prices, and more.';
    }
    
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'ai',
      message: aiResponse,
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, newMessage]);
    setIsTyping(false);
  };

  const sendMessage = async () => {
    if (!currentMessage.trim()) return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      message: currentMessage,
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    
    await simulateAIResponse(currentMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Notification Panel */}
      <div className="mb-4 max-w-sm">
        {notifications.slice(0, 3).map((notification) => (
          <div
            key={notification.id}
            className={`mb-2 p-4 rounded-lg border-l-4 shadow-lg ${getPriorityColor(notification.priority)} animate-slide-in`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <span className="text-lg mr-2">{getTypeIcon(notification.type)}</span>
                <div>
                  <h4 className="font-semibold text-sm">{notification.title}</h4>
                  <p className="text-xs mt-1">{notification.message}</p>
                  <div className="flex items-center mt-2 text-xs opacity-75">
                    <Phone className="h-3 w-3 mr-1" />
                    <span>Sent to mobile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Chatbot */}
      {showChatbot && (
        <div className="bg-white rounded-lg shadow-2xl w-80 h-96 flex flex-col border border-gray-200">
          {/* Chat Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <Bot className="h-5 w-5 mr-2" />
              <div>
                <h3 className="font-semibold">AI Farm Assistant</h3>
                <p className="text-xs opacity-90">Powered by Gemini</p>
              </div>
            </div>
            <button
              onClick={() => setShowChatbot(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-start">
                    {message.sender === 'ai' && <Bot className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />}
                    <p className="text-sm">{message.message}</p>
                    {message.sender === 'user' && <User className="h-4 w-4 ml-2 mt-0.5 flex-shrink-0" />}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                  <div className="flex items-center">
                    <Bot className="h-4 w-4 mr-2" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about weather, pests, markets..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-sm"
              />
              <button
                onClick={sendMessage}
                disabled={!currentMessage.trim() || isTyping}
                className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors flex items-center justify-center"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    </div>
  );
};