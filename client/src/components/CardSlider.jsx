import React from 'react'
import { playerProfile } from '../constants'
import './CardSlider.css'

import { PlayerCard, BlogCard } from './index'
const CardSlider = () => {
  return (
    <div className="card_slider">
      {playerProfile.map((player) => (
        <PlayerCard key={player.id} {...player} />
      ))}
    </div>
  )
}

export default CardSlider
