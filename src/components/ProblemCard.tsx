import React, { useEffect, useState } from 'react'
import { Users, ChevronRight } from 'lucide-react'
import { db } from '../firebase'
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore'


type GroupChat = {
  name: string
  members?: number
  onJoin: () => void
}

type Problem = {
  id: string
  title: string
  rating: number
  difficulty: string
  groupChats: GroupChat[]
  onCreateGroup: () => void
}

const difficultyColor = (difficulty: string) =>
  difficulty === 'Easy'
    ? 'text-green-500'
    : difficulty === 'Medium'
    ? 'text-yellow-600'
    : 'text-red-500'


const ProblemCard: React.FC<Problem> = ({ title, rating, difficulty, groupChats, onCreateGroup }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <div className="flex items-center">
            <span className={`text-sm font-medium ${difficultyColor(difficulty)} mr-2`}>
              {difficulty}
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

        <div className="flex justify-between items-center">
          <div>
            <button
              onClick={onCreateGroup}
              className="px-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Create Group
            </button>
          </div>
          <div className="flex items-center">
            <span className="text-xs text-gray-500">Rating:</span>
            <span className="ml-1 text-sm text-gray-800 font-semibold">
              {rating} <span role="img" aria-label="fire">🔥</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}


export const ProblemCardList: React.FC = () => {
  const [problems, setProblems] = useState<Problem[]>([])

  useEffect(() => {
    const fetchProblems = async () => {
      const querySnapshot = await getDocs(collection(db, 'problemCards'))
      const loadedProblems: Problem[] = []

      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data()
        const problemId = docSnap.id
        const currentGroupChats = data.groupChats || []

        loadedProblems.push({
          id: problemId,
          title: data.title,
          rating: data.rating,
          difficulty: data.difficulty,
          groupChats: currentGroupChats.map((chat: any) => ({
            name: chat.name,
            members: chat.members || 0,
            onJoin: () => alert(`Joining ${chat.name}`),
          })),
          onCreateGroup: async () => {
            const name = prompt("Enter group name:")
            if (!name) return
          
            const membersStr = prompt("Enter number of members:")
            if (!membersStr) return
          
            const members = parseInt(membersStr.trim(), 10)
            if (isNaN(members)) {
              alert("Invalid number of members.")
              return
            }
          
            const newGroup = { name: name.trim(), members }
            const updatedGroupChats = [...currentGroupChats, newGroup]
            const problemRef = doc(db, 'problemCards', problemId)
          
            await updateDoc(problemRef, { groupChats: updatedGroupChats })
          
            alert(`Created "${name}" with ${members} members.`)
            fetchProblems()
          }
          
        })
      })

      setProblems(loadedProblems)
    }

    fetchProblems()
  }, [])

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
      {problems.map((problem) => (
        <ProblemCard key={problem.id} {...problem} />
      ))}
    </div>
  )
}
