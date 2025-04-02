'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import type { Hotel } from '.prisma/client'

interface BookingFormProps {
  hotel: Hotel
}

export default function BookingForm({ hotel }: BookingFormProps) {
  const { data: session } = useSession()
  const router = useRouter()
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!session) {
      router.push('/auth/signin')
      return
    }

    // Validate dates
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (checkInDate < today) {
      setError('Check-in date cannot be in the past')
      return
    }

    if (checkOutDate <= checkInDate) {
      setError('Check-out date must be after check-in date')
      return
    }

    setIsLoading(true)
    setError('')
    setSuccess(false)

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          hotelId: hotel.id,
          checkIn,
          checkOut,
          guests,
          totalPrice: calculateTotalPrice(),
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to create booking')
      }

      setSuccess(true)
      setTimeout(() => {
        router.push('/bookings')
        router.refresh()
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create booking. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const calculateTotalPrice = () => {
    if (!checkIn || !checkOut) return 0
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
    return hotel.price * nights
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Book Your Stay</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="checkIn" className="block text-gray-700 mb-2 font-medium">
            Check-in Date
          </label>
          <input
            type="date"
            id="checkIn"
            value={checkIn}
            onChange={(e) => {
              setCheckIn(e.target.value)
              setError('')
            }}
            min={today}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="checkOut" className="block text-gray-700 mb-2 font-medium">
            Check-out Date
          </label>
          <input
            type="date"
            id="checkOut"
            value={checkOut}
            onChange={(e) => {
              setCheckOut(e.target.value)
              setError('')
            }}
            min={checkIn || today}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="guests" className="block text-gray-700 mb-2 font-medium">
            Number of Guests
          </label>
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => guests > 1 && setGuests(guests - 1)}
              className="px-3 py-2 border border-gray-300 rounded-l-md hover:bg-gray-100"
            >
              <i className="fas fa-minus"></i>
            </button>
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              min={1}
              max={10}
              required
              className="w-20 px-3 py-2 border-y border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => guests < 10 && setGuests(guests + 1)}
              className="px-3 py-2 border border-gray-300 rounded-r-md hover:bg-gray-100"
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>

        {checkIn && checkOut && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total for {
                Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))
              } nights</span>
              <span className="text-xl font-bold text-indigo-600">
                ${calculateTotalPrice().toFixed(2)}
              </span>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
            <i className="fas fa-exclamation-circle mr-2"></i>
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 text-green-500 p-3 rounded-md text-sm">
            <i className="fas fa-check-circle mr-2"></i>
            Booking successful! Redirecting to your bookings...
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading || success}
          className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${
            isLoading || success
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <i className="fas fa-spinner fa-spin mr-2"></i>
              Processing...
            </span>
          ) : success ? (
            <span className="flex items-center justify-center">
              <i className="fas fa-check mr-2"></i>
              Booked Successfully
            </span>
          ) : (
            'Book Now'
          )}
        </button>

        {!session && (
          <p className="text-sm text-gray-500 text-center mt-4">
            <i className="fas fa-info-circle mr-1"></i>
            You need to sign in to make a booking
          </p>
        )}
      </form>
    </div>
  )
}