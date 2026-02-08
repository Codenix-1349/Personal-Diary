import EntryCard from './EntryCard'

function EntryList({ entries, onCardClick, darkMode }) {
  if (entries.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">📝</div>
        <p className={`text-xl ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
          No diary entries yet.
        </p>
        <p className={`mt-2 ${darkMode ? 'text-white/50' : 'text-gray-400'}`}>
          Click "Add Entry" to create your first entry!
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {entries.map((entry, index) => (
        <EntryCard 
          key={entry.date + index} 
          entry={entry} 
          onClick={() => onCardClick(entry)}
          darkMode={darkMode}
        />
      ))}
    </div>
  )
}

export default EntryList
