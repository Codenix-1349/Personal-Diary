function Header({ onAddClick, entryCount, searchQuery, onSearchChange, darkMode, onToggleDarkMode }) {
  const headerBg = darkMode 
    ? 'bg-white/10 border-white/20' 
    : 'bg-white/70 border-gray-200'
  const textColor = darkMode ? 'text-white' : 'text-gray-800'
  const inputBg = darkMode 
    ? 'bg-white/10 border-white/20 text-white placeholder-white/40' 
    : 'bg-white border-gray-300 text-gray-800 placeholder-gray-400'

  return (
    <header className={`${headerBg} backdrop-blur-md border-b sticky top-0 z-10 transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-2xl md:text-3xl font-bold ${textColor}`}>
                📔 Personal Diary
              </h1>
              <p className={`text-sm ${darkMode ? 'text-white/60' : 'text-gray-500'}`}>
                {entryCount} {entryCount === 1 ? 'Entry' : 'Entries'}
              </p>
            </div>
            <button
              onClick={onToggleDarkMode}
              className={`md:hidden p-2 rounded-full ${darkMode ? 'bg-white/10 text-yellow-300' : 'bg-gray-200 text-gray-700'} transition-colors`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search entries..."
                className={`w-full ${inputBg} rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all`}
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">🔍</span>
            </div>

            <button
              onClick={onToggleDarkMode}
              className={`hidden md:flex p-2 rounded-full ${darkMode ? 'bg-white/10 text-yellow-300 hover:bg-white/20' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <button
              onClick={onAddClick}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-2 px-4 md:px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              + Add Entry
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
