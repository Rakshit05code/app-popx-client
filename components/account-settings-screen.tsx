"use client"

interface AccountSettingsScreenProps {
  onNavigate: (screen: "landing" | "create-account" | "login" | "account-settings") => void
}

export function AccountSettingsScreen({ onNavigate }: AccountSettingsScreenProps) {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Account Settings</h2>
      </div>

      {/* Profile content */}
      <div className="flex-1 px-6 py-6">
        <div className="flex items-start space-x-4 mb-6">
          {/* Profile Image */}
          <div className="relative">
            <img
              src="/professional.jpg"
              alt="Rakshit Chaudhary Profile"
              className="w-15 h-15 rounded-full object-cover"
            />
            {/* Online indicator */}
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-purple-600 rounded-full border-2 border-white"></div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">Rakshit chaudhary</h3>
            <p className="text-sm text-gray-600">rakshitchaudhary323@gmail.com</p>
          </div>
        </div>

        {/* Description */}
        <div className="text-sm text-gray-600 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elit, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </div>
      </div>
    </div>
  )
}
