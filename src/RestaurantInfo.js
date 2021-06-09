import React from "react";

class RestaurantInfo extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div style={{ backgroundColor: "white" }} className="box">
        <div
          className="fadeIn"
          key={Math.random()}
          style={{ color: randomColor }}
        >
          <h1 id="restaurant">{this.props.restaurant}</h1>
          <h5 id="type">{this.props.type}</h5>
        </div>
        <button
          style={{ backgroundColor: randomColor }}
          id="buttons"
          onClick={this.props.nextClick}
        >
          Next
        </button>
				<button
					 style={{ backgroundColor: randomColor }}
          id="buttons"
          onClick={this.props.pickClick}
				>
					Pick
				</button>
      </div>
    );
  }
}

export default RestaurantInfo;