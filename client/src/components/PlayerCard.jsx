import React from 'react'
import './PlayerCard.css'

const PlayerCard = ({ name, player_img, position, number, school }) => {
  return (
    <div className="player_card">
      <img src={player_img} className="player_img" />
      <div className="player_info">
        <h4 className="player_name">{name}</h4>
        <p className="bottom_card">
          <span>
            {position} {number}
          </span>
          <li>{school}</li>
        </p>
      </div>
    </div>
  )
}

export default PlayerCard
