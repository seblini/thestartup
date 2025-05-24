import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Editor } from './components/Editor'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome</h1>
        </div>
        <Editor />
      </main>
      <Footer />
    </div>
  )
}
