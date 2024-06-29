import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'


export const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu' >
        <h1>Explore Our Menu</h1>
        <p className="explore-menu-text">
            choose from a a diverse menu featuring a delectable array of dishes. Our mission is to is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <div className="explore-menu-list">
            { menu_list.map((item , index)=>{
                return( <div key={index} className="explore-menu-list-item">
                    <img src={item.menu_image} alt="image" />
                    <p>{item.menu_name} </p>
                </div> )
            }) }
        </div>
    </div>
  )
}
