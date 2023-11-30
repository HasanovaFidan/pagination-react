import React from 'react'
import "./card.css"


function Card({item}) {
  return (
    <div>
          <div className="card" style={{ width: '18rem' }}>
        <img src="https://hinicio.com/wp-content/uploads/2022/08/placeholder-3.png" className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p style={{ color: "red" }}>{item.id}</p>
          <p>{item.email}AZN</p>

        </div>
      </div>
    </div>
  )
}

export default Card
