import React from 'react'
import special from '/public/images/special.png'
import beans from '/public/images/whiterice.png'
import plantain from '/public/images/plantain.png'
import mac from '/public/images/mac.png'
import noodle from '/public/images/noodle.png'
import lettuce from '/public/images/lettuce.png'
import burger from '/public/images/burger.png'



const foodList = {
    foodItems: [
    {
        id: '1',
        slug: 'special',
        image : special,
        name: 'Basmatic Fried Rice and Turkey',
        price : 3000,
        rating : '5.0 ⭐⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '2',
        slug : 'beans',
        image : beans,
        name: 'Rice and Beans',
        price : 2000,
        rating : '4.0 ⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '3',
        slug : 'plantain',
        image : plantain,
        name: 'Jollof Rice With plantain',
        price : 3500,
        rating : '5.0 ⭐⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '4',
        slug : 'mac',
        image : mac,
        name: 'mac and cheese',
        price : 4000,
        rating : '5.0 ⭐⭐⭐⭐⭐',
        quantity : 1
    },
   
    {
        id : '5',
        slug : 'burger',
        image : burger,
        name: 'Chicken burger',
        price : 1500,
        rating : '5.0 ⭐⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '6',
        slug : 'lettuce',
        image : lettuce,
        name: 'lettuce and rice',
        price : 2000,
        rating : '4.0 ⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '7',
        slug : 'noodle',
        image : noodle,
        name: 'Ramen with kimchi',
        price : 2000,
        rating : '4.0 ⭐⭐⭐⭐',
        quantity : 1
    },

]


}


export default foodList