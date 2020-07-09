import React from 'react'
import style from './PizzaImages.module.css'
import PizzaImage from '../../src/assets/pizza.jpg'

const PizzaImage = (props) => {
   return (
      <div className={style.PizzaImage}>
         <img src={PizzaImage} className={style.PizzaImg} alt="pizza_image" />
      </div>
   )
}

export default PizzaImage
