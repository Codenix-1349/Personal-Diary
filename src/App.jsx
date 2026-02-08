import { useState, useEffect } from 'react'
import Header from './components/Header'
import EntryList from './components/EntryList'
import AddEntryModal from './components/AddEntryModal'
import ViewEntryModal from './components/ViewEntryModal'
import EditEntryModal from './components/EditEntryModal'
import DeleteConfirmModal from './components/DeleteConfirmModal'

function App() {
  const [entries, setEntries] = useState([])
  const [selectedEntry, setSelectedEntry] = useState(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : true
  })

  // Load entries from localStorage on startup (FR012)
  useEffect(() => {
    const storedEntries = localStorage.getItem('diaryEntries')
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries))
    }
  }, [])

  // Save entries to localStorage whenever they change (FR008)
  useEffect(() => {
    localStorage.setItem('diaryEntries', JSON.stringify(entries))
  }, [entries])

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  // Sort entries newest-first (FR011) and filter by search
  const sortedEntries = [...entries]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter(entry => 
      entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.content.toLowerCase().includes(searchQuery.toLowerCase())
    )

  const handleAddEntry = (newEntry) => {
    setEntries([...entries, newEntry])
    setIsAddModalOpen(false)
  }

  const handleCardClick = (entry) => {
    setSelectedEntry(entry)
    setIsViewModalOpen(true)
  }

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false)
    setSelectedEntry(null)
  }

  const handleEditClick = () => {
    setIsViewModalOpen(false)
    setIsEditModalOpen(true)
  }

  const handleDeleteClick = () => {
    setIsViewModalOpen(false)
    setIsDeleteModalOpen(true)
  }

  const handleSaveEdit = (updatedEntry) => {
    setEntries(entries.map(entry => 
      entry.date === updatedEntry.date ? updatedEntry : entry
    ))
    setIsEditModalOpen(false)
    setSelectedEntry(null)
  }

  const handleConfirmDelete = () => {
    setEntries(entries.filter(entry => entry.date !== selectedEntry.date))
    setIsDeleteModalOpen(false)
    setSelectedEntry(null)
  }

  // Check if entry exists for a specific date (FR009)
  const entryExistsForDate = (date) => {
    return entries.some(entry => entry.date === date)
  }

  const bgClass = darkMode 
    ? 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900' 
    : 'bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100'

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-500`}>
      <Header 
        onAddClick={() => setIsAddModalOpen(true)}
        entryCount={entries.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />
      
      <main className="container mx-auto px-4 py-8">
        <EntryList 
          entries={sortedEntries} 
          onCardClick={handleCardClick}
          darkMode={darkMode}
        />
      </main>

      {isAddModalOpen && (
        <AddEntryModal
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAddEntry}
          entryExistsForDate={entryExistsForDate}
          darkMode={darkMode}
        />
      )}

      {isViewModalOpen && selectedEntry && (
        <ViewEntryModal
          entry={selectedEntry}
          onClose={handleCloseViewModal}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
          darkMode={darkMode}
        />
      )}

      {isEditModalOpen && selectedEntry && (
        <EditEntryModal
          entry={selectedEntry}
          onClose={() => { setIsEditModalOpen(false); setSelectedEntry(null); }}
          onSave={handleSaveEdit}
          darkMode={darkMode}
        />
      )}

      {isDeleteModalOpen && selectedEntry && (
        <DeleteConfirmModal
          entry={selectedEntry}
          onClose={() => { setIsDeleteModalOpen(false); setSelectedEntry(null); }}
          onConfirm={handleConfirmDelete}
          darkMode={darkMode}
        />
      )}
    </div>
  )
}

export default App
