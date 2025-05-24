import React from 'react'
import {
  Home,
  Users,
  PlusCircle,
  Settings,
  BarChart2,
  BookOpen,
  Star,
  HelpCircle,
} from 'lucide-react'
export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full py-6 hidden md:block">
      <div className="px-6">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Main
        </h2>
        <nav className="flex flex-col space-y-1 mb-8">
          <SidebarItem icon={<Home size={18} />} label="All Problems" active />
          <SidebarItem icon={<BarChart2 size={18} />} label="Leaderboard" />
          <SidebarItem icon={<BookOpen size={18} />} label="Learning Paths" />
          <SidebarItem icon={<Star size={18} />} label="Favorites" />
        </nav>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 mt-6">
          Social
        </h2>
        <nav className="flex flex-col space-y-1 mb-8">
          <SidebarItem icon={<Users size={18} />} label="My Groups" />
          <SidebarItem icon={<PlusCircle size={18} />} label="Create Problem" />
        </nav>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 mt-6">
          Other
        </h2>
        <nav className="flex flex-col space-y-1">
          <SidebarItem icon={<Settings size={18} />} label="Settings" />
          <SidebarItem icon={<HelpCircle size={18} />} label="Help & Support" />
        </nav>
      </div>
    </div>
  )
}
interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
}
const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active }) => (
  <div
    className={`flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
  >
    <span className={active ? 'text-blue-600' : 'text-gray-500'}>{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </div>
)
