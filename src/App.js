import React, {Component} from 'react';
import Rating from './Rating';
import './App.css';
import RenderButtons from './RenderButtons';


class App extends Component {
  
  state = {
    data:  { 
      0 : {
          "rating": '',
          "combinedRating": '0',
          "finalRating": '0'
        },
      },
      numOfRatings: 0
  };

  ////////////////////////////
  // Handle updates
  ////////////////////////////

  updateRatings = (name, value) => {
    let adjustedNumber = name - 1;
    let combinedRating = name === '0' ? value : (parseFloat(((100 - this.state.data[adjustedNumber].combinedRating) / 100 ) * parseFloat(value)) + parseFloat(this.state.data[adjustedNumber].combinedRating));
    let finalRating = Math.round(combinedRating / 10) * 10;
    if (value.length <= 2) {
    this.setState( prevState => ({
      data: {
        ...prevState.data,
        [name]: {
          "rating": value,
          "combinedRating": isNaN(combinedRating) ? '0' : combinedRating,
          "finalRating": isNaN(finalRating) ? '0' : finalRating
        }
      }
    }));
  }
}

  handleRatingChange = (event) => {
    const {name, value} = event.target;
    this.updateRatings(name, value);
    setTimeout(() => {
      this.handlePreviousRatingChange();
    }, 150);
  }

  handleAddRating = () => {
    let ratingNumber = this.state.numOfRatings + 1;
    this.setState( prevState => ({
      numOfRatings: ratingNumber,
      data: {
        ...prevState.data,
        [ratingNumber]: {
          "rating": '',
          "combinedRating": '',
          "finalRating": ''
        }
      }
    }));
  }

  handleRemoveRating = () => {
    let deletedRanking = this.state.data;
    delete deletedRanking[this.state.numOfRatings];
    this.setState({
          data: deletedRanking,
          numOfRatings: this.state.numOfRatings - 1
      });
    }

  handlePreviousRatingChange = () => {
    let previousRankings = this.state.data;
    for (let ranking in previousRankings) {
      this.updateRatings(ranking, previousRankings[ranking].rating);
    }
  }

  ////////////////////////////
  // Render app
  ////////////////////////////

  render() {
    return (
      <div className="App">
      {Object.keys(this.state.data).map(key =>
        <Rating
          id = {key}
          data = {this.state.data}
          removeRating={this.handleRemoveRating}  
          handleRatingChange = {this.handleRatingChange}
          key={key}
        />
      )}
      <RenderButtons 
          numOfRatings={this.state.numOfRatings} 
          handleRemoveRating={this.handleRemoveRating}  
          handleAddRating={this.handleAddRating} 
        />
      </div>
    );

    }
  }


export default App;
