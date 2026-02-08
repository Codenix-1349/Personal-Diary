function DeleteConfirmModal({ entry, onClose, onConfirm, darkMode }) {
  const modalBg = darkMode 
    ? 'bg-gradient-to-br from-slate-800 to-slate-900' 
    : 'bg-white'
  const textColor = darkMode ? 'text-white' : 'text-gray-800'

  const formattedDate = new Date(entry.date).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`${modalBg} rounded-2xl w-full max-w-md border ${darkMode ? 'border-white/20' : 'border-gray-200'} shadow-2xl`}>
        <div className="p-6 text-center">
          <div className="text-5xl mb-4">🗑️</div>
          <h2 className={`text-xl font-bold ${textColor} mb-2`}>Delete Entry?</h2>
          <p className={`${darkMode ? 'text-white/60' : 'text-gray-500'} mb-2`}>
            Are you sure you want to delete this entry?
          </p>
          <p className={`${darkMode ? 'text-pink-300' : 'text-pink-600'} font-medium`}>
            "{entry.title}" - {formattedDate}
          </p>
          <p className={`text-sm ${darkMode ? 'text-white/40' : 'text-gray-400'} mt-2`}>
            This action cannot be undone.
          </p>

          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              className={`flex-1 ${darkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'} font-medium py-3 rounded-lg transition-all`}
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg transition-all"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmModal
