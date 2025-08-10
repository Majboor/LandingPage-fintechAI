"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Camera,
  BarChart3,
  Bell,
  Search,
  Cloud,
  Coffee,
  Car,
  UtensilsCrossed,
  Smartphone,
  ArrowRight,
  Star,
  Instagram,
  Linkedin,
  Twitter,
  Heart,
  GraduationCap,
  Laptop,
  ShoppingBag,
  Users,
  Briefcase,
  Smile,
  Meh,
  Frown,
  Zap,
  TrendingUp,
  Shield,
  Target,
  Wallet,
  CreditCard,
} from "lucide-react"

const chatMessages = [
  { icon: Coffee, text: "3,200 PKR last month… caffeine is expensive love." },
  { icon: UtensilsCrossed, text: "2,400 PKR this week… special occasion?" },
  { icon: Car, text: "9 rides in 3 days… chai ka budget kahan gaya?" },
  { icon: MessageCircle, text: "Want to know your full story? Let's talk.", isBot: true },
]

const demoResponses = {
  "where did my money go this week": "45% on groceries, 30% on transport, 15% on eating out, 10% on utilities.",
  "how much on food last month": "You spent 15,600 PKR on food last month. That's 800 PKR more than usual!",
  "show my biggest expense": "Your biggest expense was rent at 35,000 PKR, followed by groceries at 8,200 PKR.",
  "am i overspending": "You're 2,100 PKR over budget this month. Maybe skip a few Careem rides?",
}

export default function WalletWalaLanding() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [demoInput, setDemoInput] = useState("")
  const [demoResponse, setDemoResponse] = useState("")

  const [currentMood, setCurrentMood] = useState(35)
  const [isDragging, setIsDragging] = useState(false)
  const moodBarRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    updateMoodFromEvent(e.clientX)

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updateMoodFromEvent(e.clientX)
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    updateMoodFromEvent(e.touches[0].clientX)

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        updateMoodFromEvent(e.touches[0].clientX)
      }
    }

    const handleTouchEnd = () => {
      setIsDragging(false)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }

    document.addEventListener("touchmove", handleTouchMove)
    document.addEventListener("touchend", handleTouchEnd)
  }

  const updateMoodFromEvent = (clientX: number) => {
    if (moodBarRef.current) {
      const rect = moodBarRef.current.getBoundingClientRect()
      const percentage = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
      setCurrentMood(Math.round(percentage))
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % chatMessages.length)
    }, 4000) // Increased to 4 seconds for better readability
    return () => clearInterval(interval)
  }, [])

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const response =
      demoResponses[demoInput.toLowerCase() as keyof typeof demoResponses] ||
      "I can help you track expenses, analyze spending patterns, and set budgets. Try asking about your spending!"
    setDemoResponse(response)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Floating Download Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-full px-6 py-3"
          onClick={() => window.open('https://admin.walletwala.techrealm.pk/install', '_blank')}
        >
          <Smartphone className="mr-2 w-5 h-5" />
          Download App
        </Button>
      </div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Animated Chat Bubbles */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Made in Pakistan 🇵🇰</Badge>
                <span className="decorative-zen text-green-600 text-lg">پاکستان میں بنایا گیا</span>
              </div>
              <h1 className="text-4xl lg:text-6xl heading-zen text-gray-900 leading-tight">
                Your Expenses Are <span className="text-green-600">Talking</span>
              </h1>
              <p className="text-xl text-zen text-gray-600 leading-relaxed">
                The first AI expense tracker that speaks your language. Chat with your money in Urdu, English, or
                Hinglish!
              </p>
            </div>

            {/* Animated Chat Messages */}
            <div className="relative h-64 mb-8">
              <div className="absolute inset-0 space-y-4">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 transition-all duration-700 ease-in-out ${
                      index === currentMessage
                        ? "opacity-100 transform translate-x-0 scale-100"
                        : index < currentMessage
                          ? "opacity-60 transform translate-x-0 scale-95"
                          : "opacity-0 transform translate-x-8 scale-90"
                    }`}
                    style={{
                      transform: index === currentMessage 
                        ? "translateX(0) scale(1)" 
                        : index < currentMessage 
                          ? "translateX(0) scale(0.95)" 
                          : "translateX(2rem) scale(0.9)"
                    }}
                  >
                    <div className={`p-2 rounded-full transition-all duration-500 ${
                      message.isBot 
                        ? "bg-green-100 shadow-sm" 
                        : "bg-blue-100 shadow-sm"
                    } ${index === currentMessage ? "scale-110" : "scale-100"}`}>
                      <message.icon className={`w-4 h-4 transition-colors duration-300 ${
                        message.isBot ? "text-green-600" : "text-blue-600"
                      }`} />
                    </div>
                    <div
                      className={`max-w-xs p-3 rounded-lg transition-all duration-500 ${
                        message.isBot 
                          ? "bg-green-100 text-green-800 shadow-sm" 
                          : "bg-white border shadow-sm"
                      } ${index === currentMessage ? "shadow-md" : "shadow-sm"}`}
                    >
                      <p className="text-sm font-medium">
                        {index === currentMessage ? (
                          <span className="inline-block">
                            {message.text}
                            <span className="animate-pulse ml-1">|</span>
                          </span>
                        ) : (
                          message.text
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://admin.walletwala.techrealm.pk', '_blank')}
              >
                Start Talking to Your Wallet
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://admin.walletwala.techrealm.pk/install', '_blank')}
              >
                Download App
              </Button>
            </div>
          </div>

          {/* Right: Enhanced Mobile Mockup */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Phone Frame with Enhanced Design */}
              <div className="relative">
                {/* Phone Shadow */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-black/20 rounded-full blur-xl"></div>
                
                {/* Phone Body */}
                <div className="relative w-72 h-[600px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border border-gray-700">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  
                  {/* Screen */}
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-black/5 flex items-center justify-between px-6 text-xs text-gray-600 z-20">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-4 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-4 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 pt-12 text-white shadow-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">WalletWala</h3>
                          <p className="text-xs text-green-100">AI Financial Assistant</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated Chat Messages */}
                    <div className="p-4 space-y-3 h-[480px] overflow-y-auto">
                      {[
                        { text: "How much did I spend on food this week?", isUser: true, delay: 0 },
                        { text: "You spent 4,200 PKR on food this week. That's 15% of your budget!", isUser: false, delay: 1000 },
                        { text: "Kya main budget se zyada spend kar raha hun?", isUser: true, delay: 2000 },
                        { text: "Abhi tak sab theek hai! 2,800 PKR budget bacha hai", isUser: false, delay: 3000 },
                      ].map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${message.isUser ? 'justify-start' : 'justify-end'} animate-fade-in-up`}
                          style={{ animationDelay: `${message.delay}ms` }}
                        >
                          <div
                            className={`max-w-[80%] p-3 rounded-2xl ${
                              message.isUser 
                                ? 'bg-gray-100 text-gray-800' 
                                : 'bg-green-100 text-green-800'
                            } shadow-sm transition-all duration-500 hover:shadow-md`}
                          >
                            <p className="text-sm leading-relaxed">{message.text}</p>
                          </div>
                        </div>
                      ))}
                      
                      {/* Typing Indicator */}
                      <div className="flex justify-end animate-pulse">
                        <div className="bg-green-100 p-3 rounded-2xl">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl heading-zen text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-zen text-gray-600 max-w-2xl mx-auto">Three simple steps to financial clarity</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Camera,
                title: "Snap & Scan",
                description: "Upload or snap your receipt, we read it instantly using AI",
                color: "blue",
                delay: 0
              },
              {
                icon: MessageCircle,
                title: "Talk to Your Expenses",
                description: "Ask anything, like 'How much on groceries last month?'",
                color: "green",
                delay: 200
              },
              {
                icon: BarChart3,
                title: "Get Reports & Alerts",
                description: "Daily, weekly, monthly summaries + budget warnings",
                color: "purple",
                delay: 400
              }
            ].map((step, index) => (
              <Card 
                key={index}
                className="text-center p-8 hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${step.delay}ms` }}
              >
                <CardContent className="space-y-6">
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl heading-zen text-gray-900">{step.title}</h3>
                    <p className="text-zen text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pakistani Lifestyle Personas */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl heading-zen text-gray-900 mb-6">Made for Every Pakistani</h2>
            <p className="text-xl text-zen text-gray-600 max-w-3xl mx-auto">See how WalletWala fits your lifestyle</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                title: "The Student",
                subtitle: "Keeps track of chai & notes",
                icon: GraduationCap,
                bgColor: "bg-blue-50",
                hoverColor: "hover:bg-blue-100",
                iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
                iconColor: "text-white",
                example: "Monthly chai budget: 1,200 PKR\nBooks & supplies: 3,500 PKR\nTransport: 2,000 PKR",
                tip: "Get alerts when your chai money runs low!",
              },
              {
                title: "The Freelancer",
                subtitle: "Knows when client paid late",
                icon: Laptop,
                bgColor: "bg-purple-50",
                hoverColor: "hover:bg-purple-100",
                iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
                iconColor: "text-white",
                example: "Client A: Payment due 3 days ago\nInternet bill: 2,500 PKR\nCo-working space: 8,000 PKR",
                tip: "Track irregular income and plan for dry spells",
              },
              {
                title: "The Shopaholic",
                subtitle: "Alerts when sale season gets dangerous",
                icon: ShoppingBag,
                bgColor: "bg-pink-50",
                hoverColor: "hover:bg-pink-100",
                iconBg: "bg-gradient-to-br from-pink-500 to-pink-600",
                iconColor: "text-white",
                example: "Shopping this month: 15,600 PKR\nBudget remaining: 4,400 PKR\nSale alert: Khaadi 50% off!",
                tip: "Set shopping limits and get warned before overspending",
              },
              {
                title: "The Family Planner",
                subtitle: "Keeps Eid shopping in budget",
                icon: Users,
                bgColor: "bg-green-50",
                hoverColor: "hover:bg-green-100",
                iconBg: "bg-gradient-to-br from-green-500 to-green-600",
                iconColor: "text-white",
                example: "Eid budget: 25,000 PKR\nClothes: 12,000 PKR spent\nGifts: 8,000 PKR remaining",
                tip: "Plan family expenses and special occasions",
              },
              {
                title: "The Professional",
                subtitle: "Tracks office lunches & fuel",
                icon: Briefcase,
                bgColor: "bg-indigo-50",
                hoverColor: "hover:bg-indigo-100",
                iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
                iconColor: "text-white",
                example: "Fuel this month: 8,500 PKR\nOffice lunches: 4,200 PKR\nParking fees: 1,800 PKR",
                tip: "Manage work-related expenses efficiently",
              },
            ].map((persona, index) => (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${persona.bgColor} ${persona.hoverColor} border-0 shadow-sm hover:shadow-lg overflow-hidden`}
              >
                <CardContent className="p-6 text-center relative">
                  {/* Single Icon Container */}
                  <div className="w-16 h-16 mx-auto mb-4">
                    <div className={`w-full h-full ${persona.iconBg} rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                      <persona.icon className={`w-8 h-8 ${persona.iconColor}`} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="heading-zen text-lg text-gray-900">{persona.title}</h3>
                    <p className="text-zen text-sm text-gray-600">{persona.subtitle}</p>
                  </div>

                  {/* Hover Content - Slides up from bottom */}
                  <div className="absolute inset-0 bg-white bg-opacity-95 backdrop-blur-sm flex flex-col justify-center items-center p-6 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                    <div className="text-center space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-700 whitespace-pre-line">{persona.example}</p>
                      </div>
                      <p className="text-xs text-green-600 font-medium">{persona.tip}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Wallet Mood Meter */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl heading-zen text-gray-900 mb-6">Your Wallet Has Feelings Too</h2>
            <p className="text-xl text-zen text-gray-600 max-w-3xl mx-auto">Drag the slider to see how your spending affects your wallet's mood</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-10 border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="space-y-8">
                {/* Current Mood Display */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    {currentMood <= 40 ? (
                      <Smile className="w-16 h-16 text-green-500" />
                    ) : currentMood <= 75 ? (
                      <Meh className="w-16 h-16 text-yellow-500" />
                    ) : (
                      <Frown className="w-16 h-16 text-red-500" />
                    )}
                  </div>
                  <h3 className="text-2xl heading-zen text-gray-900">
                    {currentMood <= 40 ? "Wallet is Happy" : currentMood <= 75 ? "Wallet is Okay" : "Wallet is Crying"}
                  </h3>
                  <p className="text-gray-600">
                    {currentMood <= 40
                      ? "Shabash! Paisa bach raha hai, treat yourself!"
                      : currentMood <= 75
                        ? "Sab theek chal raha hai, bas careful rehna."
                        : "Bhai, thoda control karo! Budget khatam ho gaya hai."}
                  </p>
                </div>

                {/* Interactive Mood Meter Bar */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Smile className="w-4 h-4" /> Rich</span>
                    <span className="flex items-center gap-1"><Meh className="w-4 h-4" /> Okay</span>
                    <span className="flex items-center gap-1"><Frown className="w-4 h-4" /> Broke</span>
                  </div>
                  <div
                    className="relative w-full bg-gray-200 rounded-full h-6 cursor-pointer select-none"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    ref={moodBarRef}
                  >
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        currentMood <= 40
                          ? "bg-gradient-to-r from-green-400 to-green-600"
                          : currentMood <= 75
                            ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                            : "bg-gradient-to-r from-red-400 to-red-600"
                      }`}
                      style={{ width: `${currentMood}%` }}
                    />
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border-2 border-gray-300 rounded-full shadow-lg cursor-grab active:cursor-grabbing transition-all duration-200 hover:scale-110"
                      style={{ left: `calc(${currentMood}% - 12px)` }}
                    >
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-gray-100"></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Spent:{" "}
                      <span className="font-semibold">
                        {Math.round((currentMood / 100) * 30000).toLocaleString()} PKR
                      </span>{" "}
                      of <span className="font-semibold">30,000 PKR</span> budget
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Remaining:{" "}
                      <span className="font-semibold text-green-600">
                        {Math.round(30000 - (currentMood / 100) * 30000).toLocaleString()} PKR
                      </span>
                    </p>
                  </div>
                </div>

                {/* Mood Scenarios */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <button
                    onClick={() => setCurrentMood(25)}
                    className={`p-3 rounded-lg text-center transition-all ${
                      currentMood <= 40
                        ? "bg-green-100 border-2 border-green-500"
                        : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                    }`}
                  >
                    <div className="mb-1"><Smile className="w-6 h-6 text-green-600 mx-auto" /></div>
                    <p className="text-xs font-medium">Under Budget</p>
                  </button>
                  <button
                    onClick={() => setCurrentMood(60)}
                    className={`p-3 rounded-lg text-center transition-all ${
                      currentMood > 40 && currentMood <= 75
                        ? "bg-yellow-100 border-2 border-yellow-500"
                        : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                    }`}
                  >
                    <div className="mb-1"><Meh className="w-6 h-6 text-yellow-600 mx-auto" /></div>
                    <p className="text-xs font-medium">On Track</p>
                  </button>
                  <button
                    onClick={() => setCurrentMood(90)}
                    className={`p-3 rounded-lg text-center transition-all ${
                      currentMood > 75
                        ? "bg-red-100 border-2 border-red-500"
                        : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                    }`}
                  >
                    <div className="mb-1"><Frown className="w-6 h-6 text-red-600 mx-auto" /></div>
                    <p className="text-xs font-medium">Overspent</p>
                  </button>
                </div>

                {/* Interactive Tip */}
                <div className="text-center">
                  <p className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4" />
                    <strong>Try it:</strong> Drag the slider above to see how your wallet reacts to different
                    spending levels!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl heading-zen text-gray-900 mb-4">Try It Live</h2>
            <p className="text-xl text-zen text-gray-600">Ask your expenses anything - see how WalletWala responds</p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 min-h-[120px]">
                  {demoResponse ? (
                    <div className="bg-green-100 p-3 rounded-lg">
                      <p className="text-sm text-green-800">{demoResponse}</p>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center">Type a question to see how WalletWala responds!</p>
                  )}
                </div>

                <form onSubmit={handleDemoSubmit} className="flex space-x-2">
                  <Input
                    placeholder="Try: 'where did my money go this week'"
                    value={demoInput}
                    onChange={(e) => setDemoInput(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="sm">
                    Ask
                  </Button>
                </form>

                <div className="text-xs text-gray-500 space-y-1">
                  <p>Try asking:</p>
                  <ul className="space-y-1">
                    <li>• "How much on food last month"</li>
                    <li>• "Show my biggest expense"</li>
                    <li>• "Am I overspending"</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open('https://admin.walletwala.techrealm.pk', '_blank')}
                  >
                    <MessageCircle className="mr-2 w-4 h-4" />
                    Try Real App
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl heading-zen text-gray-900 mb-4">Why WalletWala</h2>
            <p className="text-xl text-zen text-gray-600">Everything you need to master your money</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Camera, title: "Auto Receipt Scan", desc: "Snap and forget - we handle the rest" },
              { icon: BarChart3, title: "Smart Reports", desc: "Beautiful insights in plain language" },
              { icon: Bell, title: "Overspending Alerts", desc: "Get warned before you go overboard" },
              { icon: MessageCircle, title: "Chat with Expenses", desc: "Ask questions in Urdu or English" },
              { icon: Search, title: "Category Insights", desc: "See where every rupee goes" },
              { icon: Cloud, title: "Cloud Sync", desc: "Access your data anywhere, anytime" },
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-3">
                  <feature.icon className="w-8 h-8 text-green-600" />
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl heading-zen text-gray-900 mb-4">What People Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "WalletWala saved me 12,000 PKR in 2 months! Finally I know where my money goes."
                </p>
                <p className="text-sm text-gray-500">— Ahmed, Karachi</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Finally an expense tracker that speaks my language. Love the Urdu support!"
                </p>
                <p className="text-sm text-gray-500">— Fatima, Lahore</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl heading-zen text-white">Ready to make your expenses talk?</h2>
            <p className="text-xl text-zen text-green-100 flex items-center justify-center gap-2">
              <Smartphone className="w-5 h-5" />
              Install WalletWala on your phone today!
            </p>
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100"
              onClick={() => window.open('https://admin.walletwala.techrealm.pk/install', '_blank')}
            >
              <Smartphone className="mr-2 w-5 h-5" />
              Install Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-6 h-6 text-green-400" />
                <span className="font-bold text-xl">WalletWala</span>
              </div>
              <p className="text-gray-400">Making expense tracking conversational for Pakistan.</p>
              <p className="decorative-zen text-gray-500 text-sm">پاکستان کے لیے گفتگو کی طرح اخراجات کی ٹریکنگ</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a 
                    href="https://admin.walletwala.techrealm.pk/install" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Download App
                  </a>
                </li>
                <li>
                  <a 
                    href="https://admin.walletwala.techrealm.pk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Open App
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in Pakistan</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
