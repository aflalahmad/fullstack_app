import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <div className='mt-10'>
            <div>
                <Image
                src="/images/banner.jpg"
                alt="banner"
                width={1000}
                height={500}
                className='w-full h-[500px] object-cover'
                />
            </div>
        </div>
    )
}

export default Banner