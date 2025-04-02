import Image from 'next/image'
import Link from 'next/link'
import type { Hotel } from '.prisma/client'

interface HotelCardProps {
  hotel: Hotel
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{hotel.name}</h3>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-gray-600">{hotel.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-2">{hotel.location}</p>
        
        <p className="text-gray-500 mb-4 line-clamp-2">
          {hotel.description}
        </p>
        
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-indigo-600">
            ${hotel.price.toFixed(2)}
            <span className="text-sm text-gray-500">/night</span>
          </p>
          
          <Link
            href={`/hotel/${hotel.id}`}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}