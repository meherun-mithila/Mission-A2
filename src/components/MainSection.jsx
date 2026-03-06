import TicketCard from './TicketCard'

export default function MainSection({ tickets, taskStatus, resolvedTasks, onSelectTicket, onComplete }) {
  return (
    <section className="px-4 sm:px-6 py-10 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Customer Tickets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} onSelect={onSelectTicket} />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-72 lg:shrink-0">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Task Status</h2>
          {taskStatus.length === 0 ? (
            <p className="text-sm text-gray-400">Select a ticket to add to Task Status</p>
          ) : (
            <div className="flex flex-col gap-3">
              {taskStatus.map((ticket) => (
                <div key={ticket.id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <p className="text-sm font-semibold text-gray-900 mb-3">{ticket.title}</p>
                  <button
                    onClick={() => onComplete(ticket)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 rounded-lg transition-colors"
                  >
                    Complete
                  </button>
                </div>
              ))}
            </div>
          )}

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Resolved Task</h2>
          {resolvedTasks.length === 0 ? (
            <p className="text-sm text-gray-400">No resolved tasks yet.</p>
          ) : (
            <div className="flex flex-col gap-2">
              {resolvedTasks.map((ticket) => (
                <div key={ticket.id} className="bg-indigo-50 rounded-lg px-4 py-3">
                  <p className="text-sm font-medium text-indigo-700">{ticket.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
