import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Image from 'next/image'
import type { Booking, Hotel } from '.prisma/client'

type BookingWithHotel = Booking & {
  hotel: Hotel
}

async function getBookings(userId: string): Promise<BookingWithHotel[]> {
  const bookings = await prisma.booking.findMany({
    where: {
      userId: userId
    },
    include: {
      hotel: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  return bookings
}

function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case 'confirmed':
      return 'bg-green-100 text-green-800'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'cancelled':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default async function BookingsPage() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    redirect('/auth/signin')
  }

  const bookings = await getBookings(session.user.id)

  // Group bookings by status
  const groupedBookings = bookings.reduce((acc, booking) => {
    const status = booking.status.toLowerCase()
    if (!acc[status]) {
      acc[status] = []
    }
    acc[status].push(booking)
    return acc
  }, {} as Record<string, BookingWithHotel[]>)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <div className="text-gray-400 mb-4">
            <i className="fas fa-calendar-times text-4xl"></i>
          </div>
          <p className="text-gray-600 mb-4">You haven't made any bookings yet.</p>
          <a 
            href="/"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Browse Hotels <i className="fas fa-arrow-right ml-1"></i>
          </a>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(groupedBookings).map(([status, statusBookings]) => (
            <div key={status}>
              <h2 className="text-xl font-semibold mb-4 capitalize">
                {status} Bookings ({statusBookings.length})
              </h2>
              <div className="space-y-4">
                {statusBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="relative h-48 md:h-full">
                        <Image
                          src={booking.hotel.image}
                          alt={booking.hotel.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="p-6 md:col-span-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">
                              {booking.hotel.name}
                            </h3>
                            <div className="flex items-center mt-1 text-gray-600">
                              <i className="fas fa-map-marker-alt mr-2"></i>
                              <p>{booking.hotel.location}</p>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </div>

                        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm text-gray-600">Check-in</p>
                            <p className="font-semibold">
                              {new Date(booking.checkIn).toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Check-out</p>
                            <p className="font-semibold">
                              {new Date(booking.checkOut).toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Guests</p>
                            <p className="font-semibold flex items-center">
                              <i className="fas fa-user mr-1 text-gray-400"></i>
                              {booking.guests}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Total Price</p>
                            <p className="text-lg font-bold text-indigo-600">
                              ${booking.totalPrice.toFixed(2)}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t">
                          <div className="flex items-center text-sm text-gray-500">
                            <i className="fas fa-clock mr-2"></i>
                            Booked on {new Date(booking.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}