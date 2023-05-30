import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className='flex justify-between p-5 mx-auto my-[-40px]'>
            <div className='flex items-center space-x-5'>
                <Link href="/">
                    <img className='mt-5 mb-2 h-[10vh] object-contain cursor-pointer' src="/buonavibra-logo.png" alt="Buona-vibra-club-logo" />
                </Link>
                <div className='hidden lg:inline-flex items-center space-x-5'>
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3>Class</h3>
                    <h3>Workshop</h3>
                    <h3 className='px-4 py-1 rounded-full text-white bg-green-600'>follow</h3>
                </div>
            </div>

            <div className='flex items-center space-x-5 text-green-600 font-semibold'>
                <h3>Sign in</h3>
                <h3 className='border px-4 py-1 rounded-full border-green-600'>Get started</h3>
            </div>
        </header>
    )
}

export default Header
