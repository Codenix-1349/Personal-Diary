import { useState, useRef } from 'react'

function EditEntryModal({ entry, onClose, onSave, darkMode }) {
  const [title, setTitle] = useState(entry.title)
  const [imageUrl, setImageUrl] = useState(entry.imageUrl)
  const [content, setContent] = useState(entry.content)
  const [error, setError] = useState('')
  const [imagePreview, setImagePreview] = useState(entry.imageUrl)
  const [imageSource, setImageSource] = useState(entry.imageUrl.startsWith('data:') ? 'file' : 'url')
  const fileInputRef = useRef(null)

  const modalBg = darkMode 
    ? 'bg-gradient-to-br from-slate-800 to-slate-900' 
    : 'bg-white'
  const textColor = darkMode ? 'text-white' : 'text-gray-800'
  const labelColor = darkMode ? 'text-white/80' : 'text-gray-600'
  const inputBg = darkMode 
    ? 'bg-white/10 border-white/20 text-white placeholder-white/40' 
    : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-400'
  const tabActive = 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
  const tabInactive = darkMode ? 'bg-white/10 text-white/60' : 'bg-gray-200 text-gray-600'

  const formattedDate = new Date(entry.date).toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image file is too large. Maximum size is 5MB.')
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        setImageUrl(reader.result)
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUrlChange = (e) => {
    const url = e.target.value
    setImageUrl(url)
    setImagePreview(url)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!title.trim() || !imageUrl.trim() || !content.trim()) {
      setError('Please fill in all fields.')
      return
    }

    const updatedEntry = {
      ...entry,
      title: title.trim(),
      imageUrl: imageUrl.trim(),
      content: content.trim()
    }

    onSave(updatedEntry)
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`${modalBg} rounded-2xl w-full max-w-lg border ${darkMode ? 'border-white/20' : 'border-gray-200'} shadow-2xl max-h-[90vh] overflow-y-auto`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className={`text-2xl font-bold ${textColor}`}>Edit Entry</h2>
              <p className={`text-sm ${darkMode ? 'text-pink-300' : 'text-pink-600'}`}>{formattedDate}</p>
            </div>
            <button
              onClick={onClose}
              className={`${darkMode ? 'text-white/60 hover:text-white' : 'text-gray-400 hover:text-gray-600'} text-2xl transition-colors`}
            >
              ✕
            </button>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={`block ${labelColor} text-sm font-medium mb-2`}>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full ${inputBg} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
              />
            </div>

            <div>
              <label className={`block ${labelColor} text-sm font-medium mb-2`}>Image</label>
              
              {/* Tab Switcher */}
              <div className="flex gap-2 mb-3">
                <button
                  type="button"
                  onClick={() => setImageSource('url')}
                  className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${imageSource === 'url' ? tabActive : tabInactive}`}
                >
                  🔗 URL
                </button>
                <button
                  type="button"
                  onClick={() => setImageSource('file')}
                  className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${imageSource === 'file' ? tabActive : tabInactive}`}
                >
                  📁 Upload
                </button>
              </div>

              {imageSource === 'url' ? (
                <input
                  type="url"
                  value={imageUrl.startsWith('data:') ? '' : imageUrl}
                  onChange={handleUrlChange}
                  className={`w-full ${inputBg} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                  placeholder="https://example.com/image.jpg"
                />
              ) : (
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`w-full ${inputBg} border rounded-lg px-4 py-6 text-center cursor-pointer hover:border-pink-500 transition-all`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="text-3xl mb-2">📷</div>
                  <p className={darkMode ? 'text-white/60' : 'text-gray-500'}>
                    Click to select an image
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-white/40' : 'text-gray-400'} mt-1`}>
                    Max 5MB
                  </p>
                </div>
              )}

              {/* Image Preview */}
              {imagePreview && (
                <div className="mt-3 rounded-lg overflow-hidden border border-white/20">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="w-full h-32 object-cover"
                    onError={() => setImagePreview('')}
                  />
                </div>
              )}
            </div>

            <div>
              <label className={`block ${labelColor} text-sm font-medium mb-2`}>Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="4"
                className={`w-full ${inputBg} border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none`}
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className={`flex-1 ${darkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'} font-medium py-3 rounded-lg transition-all`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditEntryModal
