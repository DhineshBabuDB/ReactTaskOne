import React, { useState } from 'react'
import Contents from '../Files/Contents'
import ProductCard from '../ProductCard/ProductCard'
import './HomePage.css'

const HomePage = () => {
  
  const [products] = useState(Contents)

  return (
    <div className='HomePage'>
        {products.map((content)=>(
          // <ProductCard key={content.id} Item={content.name} pic={content.image} oldPrice={content.old_price} newPrice={content.new_price}/>
          <ProductCard key={content.id} product={content}/>
        ))}
        
    </div>
  )
}

export default HomePage