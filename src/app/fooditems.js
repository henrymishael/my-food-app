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
        slug: 'basmatic',
        image : special,
        name: 'Basmatic Fried Rice and Turkey',
        price : '₦3,000',
        rating : '5.0 ⭐⭐⭐⭐⭐',
        info : 'Lorem ipsum dolor sit amet      consectetur adipisicing elit. Natus  laborum quis ut! Qui animi quaerat   voluptates! Corporis itaque vitae     laudantium in, porro accusamus hic,     saepe quod explicabo voluptatum rerum   nisi.'
    },
    {
        id : '3',
        slug : 'beans',
        image : beans,
        name: 'Rice and Beans',
        price : '₦2,000',
        rating : '4.0 ⭐⭐⭐⭐',
        info : 'Lorem ipsum dolor sit amet      consectetur adipisicing elit. Natus  laborum quis ut! Qui animi quaerat   voluptates! Corporis itaque vitae     laudantium in, porro accusamus hic,     saepe quod explicabo voluptatum rerum   nisi.'
    },
    {
        id : '4',
        slug : 'plantain',
        image : plantain,
        name: 'Jollof Rice With plantain',
        price : '₦3,500',
        rating : '5.0 ⭐⭐⭐⭐⭐',
        info : 'Lorem ipsum dolor sit amet      consectetur adipisicing elit. Natus  laborum quis ut! Qui animi quaerat   voluptates! Corporis itaque vitae     laudantium in, porro accusamus hic,     saepe quod explicabo voluptatum rerum   nisi.'
    },
    {
        id : '6',
        slug : 'mac',
        image : mac,
        name: 'mac and cheese',
        price : '₦4,000',
        rating : '5.0 ⭐⭐⭐⭐⭐',
        info : 'Lorem ipsum dolor sit amet      consectetur adipisicing elit. Natus  laborum quis ut! Qui animi quaerat   voluptates! Corporis itaque vitae     laudantium in, porro accusamus hic,     saepe quod explicabo voluptatum rerum   nisi.'
    },
   
    {
        id : '9',
        slug : 'burger',
        image : burger,
        name: 'Chicken burger',
        price : '₦1,500',
        rating : '5.0 ⭐⭐⭐⭐⭐',
        info : 'Lorem ipsum dolor sit amet      consectetur adipisicing elit. Natus  laborum quis ut! Qui animi quaerat   voluptates! Corporis itaque vitae     laudantium in, porro accusamus hic,     saepe quod explicabo voluptatum rerum   nisi.'
    },
    {
        id : '10',
        slug : 'lettuce',
        image : lettuce,
        name: 'lettuce and rice',
        price : '₦2,000',
        rating : '4.0 ⭐⭐⭐⭐',
        info : 'Lorem ipsum dolor sit amet      consectetur adipisicing elit. Natus  laborum quis ut! Qui animi quaerat   voluptates! Corporis itaque vitae     laudantium in, porro accusamus hic,     saepe quod explicabo voluptatum rerum   nisi.'
    },
    {
        id : '11',
        slug : 'noodle',
        image : noodle,
        name: 'Ramen with kimchi',
        price : '₦2,000',
        rating : '4.0 ⭐⭐⭐⭐',
        info : 'Lorem ipsum dolor sit amet      consectetur adipisicing elit. Natus  laborum quis ut! Qui animi quaerat   voluptates! Corporis itaque vitae     laudantium in, porro accusamus hic,     saepe quod explicabo voluptatum rerum   nisi.'
    },

]


}


export default foodList