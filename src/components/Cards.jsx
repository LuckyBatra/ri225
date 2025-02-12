import React from 'react'

function Cards( { item }) {
  return (
    <>
    <div>
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      
      <div className="badge badge-secondary">{item.Category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{item.price}</div>
      <div className="badge badge-outline">Enroll Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards