"use client"

import { Button } from "@/components/ui/button"

interface LandingScreenProps {
  onNavigate: (screen: "landing" | "create-account" | "login" | "account-settings") => void
}

export function LandingScreen({ onNavigate }: LandingScreenProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8 py-12 bg-white">
      {/* Main content area */}
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to PopX</h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-xs px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="w-full space-y-4 pt-12">
          <Button
            onClick={() => onNavigate("create-account")}
            className="w-full h-14 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Create Account
          </Button>

          <Button
            onClick={() => onNavigate("login")}
            className="w-full h-14 bg-purple-200 hover:bg-purple-300 text-purple-800 font-semibold text-base rounded-2xl transition-all duration-200"
          >
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  )
}
