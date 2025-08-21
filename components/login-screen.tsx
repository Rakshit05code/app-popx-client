"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface LoginScreenProps {
  onNavigate: (screen: "landing" | "create-account" | "login" | "account-settings") => void
}

export function LoginScreen({ onNavigate }: LoginScreenProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNavigate("account-settings")
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Form content */}
      <div className="flex-1 px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Signin to your PopX account</h2>
          <p className="text-gray-500 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-purple-600 mb-2">Email Address</label>
              <Input
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full h-12 px-4 text-base border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-0 transition-colors bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-600 mb-2">Password</label>
              <Input
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="w-full h-12 px-4 text-base border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-0 transition-colors bg-gray-50"
              />
            </div>
          </div>

          <div className="pt-6">
            <Button
              type="submit"
              className="w-full h-14 bg-gray-400 hover:bg-gray-500 text-white font-semibold text-base rounded-2xl transition-all duration-200"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
