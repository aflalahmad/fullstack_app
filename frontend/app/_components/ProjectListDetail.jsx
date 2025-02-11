import Image from "next/image";
import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle, ShoppingCart, X } from "lucide-react";
import { useRouter } from "next/navigation";
import GlobalApi from "../_utilities/GlobalApi";
import { toast } from "sonner";
import { UpdateCartContext } from "../_context/UpdateCartContext";

function ProductDetail({ product, isOpen, onClose }) {
  const jwt = sessionStorage.getItem("jwt");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const {updateCart,setUpdateCart}=useContext(UpdateCartContext)
  const [productTotalPrice, setProductTotalPrice] = useState(
    product.sellingprice ?
        product.sellingprice :
        product.mrp
)
 
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  //const productPrice = product.sellingprice || product.mrp;
  const router = useRouter();

  const addToCart = () => {
    if (!jwt) {
      router.push("/sign-in");
      return;
    }

    setLoading(true);
    const data = {
      data: {
        quantity:quantity,
        amount: (quantity * productTotalPrice).toFixed(2),
        products: product.id,
        users_permissions_users: user.id,
        userId:user.id
      },
    };

    GlobalApi.addToCart(data, jwt).then(
      () => {
        toast("Added to Cart");
        setUpdateCart(!updateCart);
        setLoading(false);
      },
      () => {
        toast("Error while adding to cart");
        setLoading(false);
      }
    );
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black'>
        <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.image[0].url}
            alt='image'
            width={300}
            height={300}
            className='bg-teal-100 p-5 h-[320px] w- [300px] object-contain rounded-lg'
        />

        <div className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold text-teal-700'> {product.name}</h2>
            <h2 className='text-sm text-slate-600'> {product.description}</h2>
            <div className='flex gap-3'>
                {product.mrp && product.sellingprice !== 0 ? (
                    <>
                        <h2 className='font-bold text-xl line-through text-red-600'>${product.mrp}</h2>
                        <h2 className='text-teal-700 text-3xl'>${product.sellingprice}</h2>
                    </>
                ) : (
                    <h2 className='text-teal-700'>{product.mrp}</h2>
                )}
            </div>
            <h2 className='font-medium text-lg'>
                Quantity ({product.unittype})
            </h2>
            <div className='flex flex-col items-baseline gap-3'>
                <div className='flex gap-3 items-center'>
                    <div className='p-2 border flex gap-10 items-center px-5 text-2xl'>
                        <button disabled={quantity == 1} onClick={() => setQuantity(quantity - 1)}>-</button>
                        <h2>{quantity}</h2>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                    <h2 className='text-2xl font-bold'> = ${(quantity * productTotalPrice).toFixed(2)}</h2>
                </div>

                <Button
            className="flex gap-3 w-full justify-center bg-green-600 text-white px-4 py-2 text-lg font-semibold rounded-md hover:bg-green-700 transition duration-200"
            onClick={addToCart}
            disabled={loading}
          >
            <ShoppingCart />
            {loading ? <LoaderCircle className="animate-spin" /> : "Add to Cart"}
          </Button>
            </div>
            <h2 className='font-bold text-lg'> <span>Category:</span> {product.name}</h2>
        </div>

    </div>
)
}


export default ProductDetail;



