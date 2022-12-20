import React from 'react'

const Home = () => {
  data=[
    {id:id,img:img}
  ]
  return (
    <div>welcome
    {Data.map((eachProduct)=>{(
      <Product id={eachProduct.id} image={eachProduct.img} />)
    })}
  </div>
  )
}

export default Home