export default function Banner({ inProgress, resolved }) {
  return (
    <section className="px-6 py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div
          className="relative rounded-xl p-10 flex flex-col items-center justify-center text-white overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #7B2FF7 0%, #422AD5 100%)', minHeight: '160px' }}
        >
          <img
            src="/vector1.png"
            alt=""
            className="absolute pointer-events-none select-none"
            style={{ width: '420px', height: '420px', top: '50%', left: '-160px', transform: 'translateY(-50%)', opacity: 0.7 }}
          />
          <img
            src="/vector1.png"
            alt=""
            className="absolute pointer-events-none select-none"
            style={{ width: '320px', height: '320px', top: '50%', right: '-120px', transform: 'translateY(-50%)', opacity: 0.7 }}
          />
          <p className="relative text-lg font-medium tracking-wide mb-3">In-Progress</p>
          <p className="relative text-6xl font-bold">{inProgress}</p>
        </div>

        <div
          className="relative rounded-xl p-10 flex flex-col items-center justify-center text-white overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', minHeight: '160px' }}
        >
          <img
            src="/vector1.png"
            alt=""
            className="absolute pointer-events-none select-none"
            style={{ width: '420px', height: '420px', top: '50%', left: '-160px', transform: 'translateY(-50%)', opacity: 0.7 }}
          />
          <img
            src="/vector1.png"
            alt=""
            className="absolute pointer-events-none select-none"
            style={{ width: '320px', height: '320px', top: '50%', right: '-120px', transform: 'translateY(-50%)', opacity: 0.7 }}
          />
          <p className="relative text-lg font-medium tracking-wide mb-3">Resolved</p>
          <p className="relative text-6xl font-bold">{resolved}</p>
        </div>
      </div>
    </section>
  )
}
