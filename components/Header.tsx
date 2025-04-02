'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="bg-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            Hotel Booking
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-indigo-600">
              Home
            </Link>
            {session ? (
              <>
                <Link href="/bookings" className="text-gray-600 hover:text-indigo-600">
                  My Bookings
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Sign Out
                </button>
                <span className="text-gray-600">
                  {session.user?.name || session.user?.email}
                </span>
              </>
            ) : (
              <Link
                href="/auth/signin"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}