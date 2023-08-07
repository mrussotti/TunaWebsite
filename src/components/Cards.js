import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Which card do you want to click</h1>
      <h3>words can go here as a sub header</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/fishEatBitcoin.png'
              text='Card 1. What do we wanna put here?'
              label='words'
              // path='/InfoDump'
            />
            <CardItem
              src='images/fishEatBitcoin.png'
              text='Card 2 What do we wanna put here?'
              label='fish'
              //path='/ActionAssist'
            />
          
          
            <CardItem
              src='images/fishEatBitcoin.png'
              text='Card 3 What do we wanna put here?'
              label='eth'
              //path='/About'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
