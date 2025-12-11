function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 underline mb-4">
          Hello, Tailwind CSS!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Tailwind CSS v4.1 is successfully configured with Vite and React
        </p>
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Primary Button
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Secondary Button
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
