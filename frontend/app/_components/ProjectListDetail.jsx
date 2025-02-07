import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'

function ProductListDetail({ product }) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black gap-6'>
            <div className='flex justify-center'>
            <Image 
            src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.image[0].url}
            alt='Product Image'
            width={300}
            height={300}
            className='bg-fuchsia-200 p-5 h-[300px] w-[300px] object-contain rounded-lg mx-auto'
            />

            </div>

            <div className='flex flex-col gap-3'>
                <h2 className='text-3xl font-bold text-fuchsia-950'>{product.name}</h2>
                <h2 className='text-sm text-slate-600'>{product.description}</h2>
                <div className='flex gap-3 items-center'>
                    {product.mrp && product.sellingprice !== 0 ? (
                        <>
                            <h2 className='font-bold text-xl line-through text-red-600'>${product.mrp}</h2>
                            <h2 className='text-fuchsia-900 text-3xl'>${product.sellingprice}</h2>
                        </>
                    ) : (
                        <h2 className='text-teal-700 text-3xl'>${product.mrp}</h2>
                    )}
                </div>
                <h2 className='font-medium text-lg'>Quantity ({product.unittype})</h2>
                <div className='flex flex-col items-baseline gap-3'>
                    <div className='p-2 border flex gap-6 items-center px-5 rounded-lg'>
                        <button className='text-xl font-bold'>-</button>
                        <h2 className='text-lg'>1</h2>
                        <button className='text-xl font-bold'>+</button>
                    </div>
                    <Button variant='outline' className='flex gap-3 text-fuchsia-800 hover:text-white hover:bg-fuchsia-800 border-fuchsia-800'>
                        <ShoppingBag />
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductListDetail
