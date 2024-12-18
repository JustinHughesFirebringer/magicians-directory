export default function Home() {
  const locations = [
  {
    "city": "New York",
    "state": "NY"
  },
  {
    "city": "Los Angeles",
    "state": "CA"
  },
  {
    "city": "Chicago",
    "state": "IL"
  },
  {
    "city": "Houston",
    "state": "TX"
  },
  {
    "city": "Phoenix",
    "state": "AZ"
  }
]

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Find Local Magicians
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location) => (
          <a
            key={`${location.city}-${location.state}`}
            href={`/${slugify(`${category}-${location.city}-${location.state}`.toLowerCase())}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">
              {location.city}, {location.state}
            </h2>
            <p className="text-gray-600">
              Find {category} in {location.city}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}