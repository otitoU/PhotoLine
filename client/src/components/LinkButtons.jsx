import React from 'react'
import './LinkButtons.scss'

const LinkButtons = ({ pic, content, bcgcolor }) => {
  //   console.log(img)
  return (
    <a href="#" className={`social_link__btn ${bcgcolor}`}>
      <img src={pic} className="social_link__btn--img " />
      {content}
    </a>
  )
}

export default LinkButtons
