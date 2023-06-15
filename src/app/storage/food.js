import React from 'react'
import special from '/public/images/special.png'
import beans from '/public/images/whiterice.png'
import plantain from '/public/images/plantain.png'
import mac from '/public/images/mac.png'
import noodle from '/public/images/noodle.png'
import lettuce from '/public/images/lettuce.png'
import burger from '/public/images/burger.png'
import rock from '/public/images/rock.png'
import purple from '/public/images/purple.png'
import monster from '/public/images/monster.png'
import redbull from '/public/images/redbull.png'
import ultra from '/public/images/ultra.png'
import chopp from '/public/images/chopp.png'
import bull from '/public/images/bull.png'
import berry from '/public/images/berry.png'
import birthday from '/public/images/birthday.png'
import icecream from '/public/images/icecream.png'
import newparfait from '/public/images/newparfait.png'
import velvet from '/public/images/velvet.png'
import pizza from '/public/images/pizza.png'
import blue from '/public/images/blue.png'
import valentina from '/public/images/valentina.png'
import heinz from '/public/images/heinz.png'
import hunts from '/public/images/hunts.png'
import lao from '/public/images/lao.png'
import dew from '/public/images/dew.png'
import tomato from '/public/images/tomato.png'
import tat from '/public/images/tat.png'


const food = {
    foodDetails: [
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
    {
        id: '8',
        slug: 'rock',
        image : rock,
        name: 'Rock Star',
        price : 1500,
        rating : '5.0 ⭐⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '9',
        slug : 'purple',
        image : purple,
        name: 'Purple bull',
        price : 1500,
        rating : '4.0 ⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '10',
        slug : 'monster',
        image : monster,
        name: 'monster',
        price : 1500,
        rating : '5.0 ⭐⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '11',
        slug : 'redbull',
        image : redbull,
        name: 'redbull',
        price : 2000,
        rating : '5.0 ⭐⭐⭐⭐⭐',
        quantity : 1
    },
   
    {
        id : '12',
        slug : 'ultra',
        image : ultra,
        name: 'ultra zero',
        price : 2000,
        rating : '5.0 ⭐⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '13',
        slug : 'chopp',
        image : chopp,
        name: 'Chopp baha',
        price : 1000,
        rating : '4.0 ⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '14',
        slug : 'bull',
        image : bull,
        name: 'New bull',
        price : 350,
        rating : '4.0 ⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id: '15',
        slug: 'berry',
        image : berry,
        name: 'Berry cup Cake',
        price : 1500,
        rating : '5.0 ⭐⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '16',
        slug : 'birthday',
        image : birthday,
        name: 'Small Cup Cake',
        price : 1500,
        rating : '4.0 ⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '17',
        slug : 'icecream',
        image : icecream,
        name: 'Ice Cream',
        price : 1500,
        rating : '5.0 ⭐⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '18',
        slug : 'parfait',
        image : newparfait,
        name: 'Chocolate Parfait',
        price : 2000,
        rating : '5.0 ⭐⭐⭐⭐⭐',
        quantity : 1
    },
   
    {
        id : '19',
        slug : 'velvet',
        image : velvet,
        name: 'Velvet Cake',
        price : 2000,
        rating : '5.0 ⭐⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '20',
        slug : 'pizza',
        image : pizza,
        name: 'Cheese Pizza',
        price : 3000,
        rating : '4.0 ⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '21',
        slug : 'blue',
        image : blue,
        name: 'Champagne Cup cake',
        price : 3500,
        rating : '4.0 ⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id: '22',
        slug: 'valentina',
        image : valentina,
        name: 'Hot Sauce',
        price : 1500,
        rating : '5.0 ⭐⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '23',
        slug : 'heinz',
        image : heinz,
        name: 'Heinz Ketchup',
        price : 1500,
        rating : '4.0 ⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '24',
        slug : 'hunts',
        image : hunts,
        name: 'Hunts Sauce',
        price : 1500,
        rating : '5.0 ⭐⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '25',
        slug : 'lao',
        image : lao,
        name: 'Pepper Sauce',
        price : 2000,
        rating : '5.0 ⭐⭐⭐⭐⭐',
        quantity : 1
    },
   
    {
        id : '26',
        slug : 'dew',
        image : dew,
        name: 'Pasta sauce',
        price : 2000,
        rating : '5.0 ⭐⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '27',
        slug : 'tomato',
        image : tomato,
        name: 'Tomato sauce',
        price : 3000,
        rating : '4.0 ⭐⭐⭐⭐',
        quantity : 1
    },
    {
        id : '28',
        slug : 'tat',
        image : tat,
        name: 'Malarde sauce',
        price : 3500,
        rating : '4.0 ⭐⭐⭐⭐',
        quantity : 1
    },


]


}


export default food