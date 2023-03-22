import React from 'react'
import { BlogCard, PlayerCard, CardSlider, Form } from '../components'
import { playerProfile } from '../constants'

const Testing = () => {
  return (
    <>
      <section className="blogPost__container max-w-7xl mx-auto ">
        <h1 className="py-4 text-[#222328] text-[38px] text-center">
          Some other components for BOTB
        </h1>
        <h2 className="text-center py-8 text-[31px]">
          Slider Component and PlayerCards
        </h2>

        {/* <CardSlider /> */}
        {/* <Form /> */}
      </section>
    </>
  )
}

export default Testing
