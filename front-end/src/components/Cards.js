import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the awesome tech!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/camera.png'
              text='Take super cool pics with this super cool camera'
              label='Super Camera 3000'
              path='/services'
            />
            <CardItem
              src='images/3d.png'
              text='3D print yout favorite items'
              label='3D Printer'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/random.png'
              text='other tech items'
              label='other1'
              path='/services'
            />
            <CardItem
              src='images/random.png'
              text='other tech items'
              label='other2'
              path='/services'
            />            
            <CardItem
            src='images/random.png'
            text='other tech items'
            label='other3'
            path='/services'
          />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
