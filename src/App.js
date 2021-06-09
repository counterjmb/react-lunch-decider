import React from "react";
import RestaurantInfo from "./RestaurantInfo";
import restaurants from './RestaurantDatabase'
import "./App.css";
import Confetti from './Confetti';

class App extends React.Component {
	
  constructor() {
		
    super();
    this.state = {
			restaurant: restaurants[0].restaurant,
			types: restaurants[0].type
    };
  }
  randomRestaurant() {
    const randomNumber = Math.floor(Math.random() * restaurants.length);
    return restaurants[randomNumber];
    
  }
  shuffleRestaurants(array){
    return array.sort(()=>Math.random()-0.5)
  }

  nextClick = () => {
    const generaterandomRestaurant = this.randomRestaurant();
    this.setState({
      restaurant: generaterandomRestaurant.restaurant,
      type: generaterandomRestaurant.type
    });
    this.shuffleRestaurants(restaurants)
  };
	
	pickClick = () => {
		console.log('Picking Works');
			Confetti();
  };

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }
  
  render() {
    return (
      <div>
        <RestaurantInfo
          displayColor={this.randomColor}
          nextClick={this.nextClick}
					pickClick={this.pickClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;