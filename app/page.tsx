import { prisma } from '@/lib/prisma'
import HotelCard from '@/components/HotelCard'
import SearchFilters from '@/components/SearchFilters'
import type { Hotel } from '.prisma/client'

async function getHotels(searchParams?: { 
  location?: string,
  minPrice?: string,
  maxPrice?: string,
  rating?: string
}) {
  const where = {
    AND: [
      searchParams?.location ? {
        location: {
          contains: searchParams.location,
          mode: 'insensitive'
        }
      } : {},
      searchParams?.minPrice ? {
        price: {
          gte: parseFloat(searchParams.minPrice)
        }
      } : {},
      searchParams?.maxPrice ? {
        price: {
          lte: parseFloat(searchParams.maxPrice)
        }
      } : {},
      searchParams?.rating ? {
        rating: {
          gte: parseFloat(searchParams.rating)
        }
      } : {}
    ]
  }

  const hotels = await prisma.hotel.findMany({
    where,
    orderBy: {
      createdAt: 'desc'
    }
  })
  return hotels
}

export default async function Home({
  searchParams
}: {
  searchParams: { location?: string; minPrice?: string; maxPrice?: string; rating?: string }
}) {
  const hotels = await getHotels(searchParams)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3"
            alt="Hotel background"
            className="h-full w-full object-cover opacity-25"
          />
        </div>
        <div className="relative mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Find Your Perfect Stay
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover amazing hotels at the best prices. Book your dream vacation today.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SearchFilters />

        {/* Results */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">
            {hotels.length} {hotels.length === 1 ? 'Hotel' : 'Hotels'} Available
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel: Hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>

          {hotels.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">No hotels found</h3>
              <p className="mt-2 text-sm text-gray-500">
                Try adjusting your search filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}