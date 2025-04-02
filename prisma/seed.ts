import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create demo hotels
  const hotels = [
    {
      name: 'Luxury Ocean Resort',
      description: 'Experience luxury living with breathtaking ocean views and world-class amenities.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
      price: 299.99,
      location: 'Miami Beach, FL',
      rating: 4.8,
    },
    {
      name: 'Mountain View Lodge',
      description: 'Cozy mountain retreat with stunning views and outdoor activities.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      price: 199.99,
      location: 'Aspen, CO',
      rating: 4.6,
    },
    {
      name: 'Urban Boutique Hotel',
      description: 'Stylish downtown hotel with modern amenities and easy access to attractions.',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
      price: 249.99,
      location: 'New York, NY',
      rating: 4.5,
    },
  ]

  for (const hotel of hotels) {
    await prisma.hotel.create({
      data: hotel,
    })
  }

  // Create a demo user
  const hashedPassword = await hash('password123', 12)
  await prisma.user.create({
    data: {
      email: 'demo@example.com',
      name: 'Demo User',
      password: hashedPassword,
    },
  })

  console.log('Seed data created successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })