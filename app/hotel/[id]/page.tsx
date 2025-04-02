import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import BookingForm from '@/components/BookingForm'
import type { Hotel } from '.prisma/client'

async function getHotel(id: string) {
  const hotel = await prisma.hotel.findUnique({
    where: { id }
  })
  
  if (!hotel) {
    notFound()
  }
  
  return hotel
}

export default async function HotelPage({
  params
}: {
  params: { id: string }
}) {
  const hotel = await getHotel(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Hotel Details */}
        <div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={hotel.image}
              alt={hotel.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold text-gray-900">{hotel.name}</h1>
              <div className="flex items-center bg-indigo-100 px-3 py-1 rounded-full">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="text-indigo-700 font-semibold">{hotel.rating.toFixed(1)}</span>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center text-gray-600">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <p>{hotel.location}</p>
              </div>
              
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">About this hotel</h2>
                <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Amenities</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-wifi mr-2"></i>
                    <span>Free WiFi</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-parking mr-2"></i>
                    <span>Free Parking</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-swimming-pool mr-2"></i>
                    <span>Swimming Pool</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-concierge-bell mr-2"></i>
                    <span>Room Service</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center">
                  <div className="text-2xl font-bold text-indigo-600">
                    ${hotel.price.toFixed(2)}
                  </div>
                  <span className="text-gray-500 ml-2">/night</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Booking Form */}
        <div className="md:sticky md:top-8 h-fit">
          <BookingForm hotel={hotel} />
        </div>
      </div>
    </div>
  )
}