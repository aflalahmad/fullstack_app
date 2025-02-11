import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <div className="relative w-full">
           
            {/* Image Section */}
            <div className="overflow-hidden">
                <Image
                    src="/images/B1.jpg"
                    alt="banner"
                    width={920}
                    height={600}
                    objectFit="cover"
                    className="w-full h-[400px] md:h-[500px] lg:h-[500px]"
                />
            </div>
        </div>
    )
}

export default Banner
