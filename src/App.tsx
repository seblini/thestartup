import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'
import { ProblemCardList } from './components/ProblemCard' // this will render all the cards

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
            <ProblemCardList />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
