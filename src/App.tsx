import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'
import { ProblemCard } from './components/ProblemCard'
const problems = [
  {
    title: 'Two Sum',
    rating: 800,
    difficulty: 'Easy',
    groupChats: [
      {
        name: 'Morning Study Group',
        members: 4,
        onJoin: () => alert('Joining Morning Study Group'),
      },
      {
        name: 'Quick Solve Team',
        members: 6,
        onJoin: () => alert('Joining Quick Solve Team'),
      },
    ],
    onCreateGroup: () => alert('Creating a group for Two Sum'),
  },
  {
    title: 'Binary Search',
    rating: 1000,
    difficulty: 'Medium',
    groupChats: [
      {
        name: 'Binary Ninjas',
        members: 3,
        onJoin: () => alert('Joining Binary Ninjas'),
      },
    ],
    onCreateGroup: () => alert('Creating a group for Binary Search'),
  },
  {
    title: 'Merge Sort',
    rating: 1200,
    difficulty: 'Medium',
    groupChats: [
      {
        name: 'Sorting Specialists',
        members: 5,
        onJoin: () => alert('Joining Sorting Specialists'),
      },
      {
        name: 'Algorithm Masters',
        members: 8,
        onJoin: () => alert('Joining Algorithm Masters'),
      },
    ],
    onCreateGroup: () => alert('Creating a group for Merge Sort'),
  },
]
export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Available Problems
            </h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              {problems.map((problem, index) => (
                <ProblemCard
                  key={index}
                  title={problem.title}
                  rating={problem.rating}
                  difficulty={problem.difficulty}
                  groupChats={problem.groupChats}
                  onCreateGroup={problem.onCreateGroup}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
