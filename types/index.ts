import { Prisma } from '@prisma/client'

// Define the base types based on the schema
type BaseBooking = {
  id: string
  userId: string
  hotelId: string
  checkIn: Date
  checkOut: Date
  guests: number
  totalPrice: number
  status: string
  createdAt: Date
  updatedAt: Date
}

type BaseHotel = {
  id: string
  name: string
  description: string
  image: string
  price: number
  location: string
  rating: number
  createdAt: Date
  updatedAt: Date
}

// Define the extended types with relations
export type BookingWithHotel = BaseBooking & {
  hotel: BaseHotel
}

export type HotelWithBookings = BaseHotel & {
  bookings: BaseBooking[]
}