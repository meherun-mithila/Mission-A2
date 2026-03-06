const priorityStyles = {
  high: 'text-red-500',
  medium: 'text-yellow-500',
  low: 'text-green-500',
}

const statusStyles = {
  open: { dot: 'bg-green-500', text: 'text-green-600', bg: 'bg-green-50', label: 'Open' },
  'in-progress': { dot: 'bg-yellow-400', text: 'text-yellow-600', bg: 'bg-yellow-50', label: 'In-Progress' },
}

export default function TicketCard({ ticket, onSelect }) {
  const status = statusStyles[ticket.status]
  const priorityColor = priorityStyles[ticket.priority]

  return (
    <div
      onClick={() => onSelect(ticket)}
      className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-sm font-semibold text-gray-900 leading-snug">{ticket.title}</h3>
        <span className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${status.bg} ${status.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`}></span>
          {status.label}
        </span>
      </div>

      <p className="text-xs text-gray-500 mb-4 line-clamp-2">{ticket.description}</p>

      <div className="flex flex-wrap items-center justify-between gap-y-1 text-xs">
        <span className={`font-semibold uppercase tracking-wide ${priorityColor}`}>
          {ticket.id}&nbsp;&nbsp;{ticket.priority} priority
        </span>
        <div className="flex items-center gap-3 text-gray-400 flex-wrap">
          <span>{ticket.customer}</span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {ticket.createdAt}
          </span>
        </div>
      </div>
    </div>
  )
}
