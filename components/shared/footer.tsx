
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='border-t'>
        <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
            <Link href='/'>
                <Image
                src='/assets/images/logo.svg' 
                alt='logo'
                width={128}
                height={38}
                className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'
                />
            </Link>
            <p>2024 EventEye , All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer