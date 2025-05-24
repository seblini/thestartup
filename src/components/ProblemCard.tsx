import React from 'react'
import { Users, ChevronRight } from 'lucide-react'
type GroupChat = {
  name: string
  members?: number
  onJoin: () => void
}
type ProblemCardProps = {
  title: string
  rating: number
  difficulty?: string
  groupChats: GroupChat[]
  onCreateGroup: () => void
}
export const ProblemCard: React.FC<ProblemCardProps> = ({
  title,
  rating,
  difficulty = 'Medium',
  groupChats,
  onCreateGroup,
}) => {
  // Determine difficulty color
  const difficultyColor =
    difficulty === 'Easy'
      ? 'text-green-500'
      : difficulty === 'Medium'
        ? 'text-yellow-600'
        : 'text-red-500'
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <div className="flex items-center">
            <span className={`text-sm font-medium ${difficultyColor} mr-2`}>
              {difficulty}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {rating}
            </span>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Active Group Chats
          </h3>
          <div className="space-y-2">
            {groupChats.map((chat, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-50 border border-gray-100 rounded-md px-3 py-2 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center">
                  <span className="text-sm text-gray-800 font-medium">
                    {chat.name}
                  </span>
                  {chat.members && (
                    <div className="ml-2 flex items-center text-xs text-gray-500">
                      <Users size={12} className="mr-1" />
                      <span>{chat.members}</span>
                    </div>
                  )}
                </div>
                <button
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                  onClick={chat.onJoin}
                >
                  Join
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <button
            className="flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
            onClick={onCreateGroup}
          >
            <span className="mr-1">+</span> Create Group
          </button>
          <div className="flex items-center">
            <span className="text-xs text-gray-500">Rating:</span>
            <span className="ml-1 text-sm text-gray-800 font-semibold">
              {rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
