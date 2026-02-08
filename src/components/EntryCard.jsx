function EntryCard({ entry, onClick, darkMode }) {
  const formattedDate = new Date(entry.date).toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const cardBg = darkMode 
    ? 'bg-white/10 border-white/20 hover:bg-white/20' 
    : 'bg-white border-gray-200 hover:bg-gray-50'
  const textColor = darkMode ? 'text-white' : 'text-gray-800'
  const dateColor = darkMode ? 'text-pink-300' : 'text-pink-600'

  return (
    <div
      onClick={onClick}
      className={`${cardBg} backdrop-blur-md rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl group`}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={entry.imageUrl}
          alt={entry.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <p className={`${dateColor} text-sm mb-1`}>{formattedDate}</p>
        <h3 className={`${textColor} font-semibold text-lg truncate`}>{entry.title}</h3>
      </div>
    </div>
  )
}

export default EntryCard
