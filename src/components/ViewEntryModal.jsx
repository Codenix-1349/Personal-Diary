function ViewEntryModal({ entry, onClose, onEdit, onDelete, darkMode }) {
  const formattedDate = new Date(entry.date).toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const modalBg = darkMode 
    ? 'bg-gradient-to-br from-slate-800 to-slate-900' 
    : 'bg-white'
  const textColor = darkMode ? 'text-white' : 'text-gray-800'
  const dateColor = darkMode ? 'text-pink-300' : 'text-pink-600'
  const contentColor = darkMode ? 'text-white/80' : 'text-gray-600'

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`${modalBg} rounded-2xl w-full max-w-2xl border ${darkMode ? 'border-white/20' : 'border-gray-200'} shadow-2xl max-h-[90vh] overflow-y-auto`}>
        <div className="aspect-video overflow-hidden rounded-t-2xl">
          <img
            src={entry.imageUrl}
            alt={entry.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className={`${dateColor} text-sm mb-1`}>{formattedDate}</p>
              <h2 className={`text-2xl font-bold ${textColor}`}>{entry.title}</h2>
            </div>
            <button
              onClick={onClose}
              className={`${darkMode ? 'text-white/60 hover:text-white' : 'text-gray-400 hover:text-gray-600'} text-2xl transition-colors ml-4`}
            >
              ✕
            </button>
          </div>
          
          <div className={`border-t ${darkMode ? 'border-white/10' : 'border-gray-200'} pt-4`}>
            <p className={`${contentColor} whitespace-pre-wrap leading-relaxed`}>
              {entry.content}
            </p>
          </div>

          <div className="flex gap-3 mt-6 pt-4 border-t border-white/10">
            <button
              onClick={onEdit}
              className={`flex-1 ${darkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'} font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2`}
            >
              ✏️ Edit
            </button>
            <button
              onClick={onDelete}
              className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewEntryModal
