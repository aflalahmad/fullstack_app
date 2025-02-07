import GlobalApi from '@/app/_utilities/GlobalApi'
import React from 'react'
import TopCategoryList from '../_components/TopCategoryList'
import ProductList from '@/app/_components/ProductList'

 function ProductCategory({params}) {
  const productList = GlobalApi.getProductByCategory(params.categoryName)
  const CategoryList= GlobalApi.getMenuCategory();
  return (
    <div>
      <h1 className='p-4 bg-primary text-white font-bold text-center'>{params.categoryName}</h1>
      <TopCategoryList CategoryList={CategoryList}/>
      <div className='p-2 md:p-10'><ProductList productList={productList} /></div>
    </div>
  )
}

export default ProductCategory
