"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface CreateAccountScreenProps {
  onNavigate: (screen: "landing" | "create-account" | "login" | "account-settings") => void
}

export function CreateAccountScreen({ onNavigate }: CreateAccountScreenProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Create your PopX account</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-purple-600 mb-2">Full Name*</label>
              <Input
                type="text"
                placeholder="Marry Doe"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="w-full h-12 px-4 text-base border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-0 transition-colors bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-600 mb-2">Phone number*</label>
              <Input
                type="tel"
                placeholder="Marry Doe"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                className="w-full h-12 px-4 text-base border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-0 transition-colors bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-600 mb-2">Email address*</label>
              <Input
                type="email"
                placeholder="Marry Doe"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full h-12 px-4 text-base border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-0 transition-colors bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-600 mb-2">Password *</label>
              <Input
                type="password"
                placeholder="Marry Doe"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="w-full h-12 px-4 text-base border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-0 transition-colors bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-600 mb-2">Company name</label>
              <Input
                type="text"
                placeholder="Marry Doe"
                value={formData.companyName}
                onChange={(e) => handleInputChange("companyName", e.target.value)}
                className="w-full h-12 px-4 text-base border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-0 transition-colors bg-gray-50"
              />
            </div>

            <div className="pt-4">
              <p className="text-sm font-medium text-gray-700 mb-3">Are you an Agency?*</p>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={formData.isAgency === "yes"}
                    onChange={(e) => handleInputChange("isAgency", e.target.value)}
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={formData.isAgency === "no"}
                    onChange={(e) => handleInputChange("isAgency", e.target.value)}
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">No</span>
                </label>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <Button
              type="submit"
              className="w-full h-14 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
