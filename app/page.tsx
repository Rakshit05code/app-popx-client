"use client"

import { useState } from "react"
import { LandingScreen } from "@/components/landing-screen"
import { CreateAccountScreen } from "@/components/create-account-screen"
import { LoginScreen } from "@/components/login-screen"
import { AccountSettingsScreen } from "@/components/account-settings-screen"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<"landing" | "create-account" | "login" | "account-settings">(
    "landing",
  )

  const navigateToScreen = (screen: "landing" | "create-account" | "login" | "account-settings") => {
    setCurrentScreen(screen)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden" style={{ aspectRatio: "375/812" }}>
          {currentScreen === "landing" && <LandingScreen onNavigate={navigateToScreen} />}
          {currentScreen === "create-account" && <CreateAccountScreen onNavigate={navigateToScreen} />}
          {currentScreen === "login" && <LoginScreen onNavigate={navigateToScreen} />}
          {currentScreen === "account-settings" && <AccountSettingsScreen onNavigate={navigateToScreen} />}
        </div>
      </div>
    </div>
  )
}
