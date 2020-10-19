import React from "react";
import Header from "../common/Header";
import RestaurantList from "../restaurants/RestaurantList";
import { getRestaurants } from "../../api/restaurantsApi";
import { createStatesList,  createAttiresList, createGenresList } from '../common/Filter';
import { createSorter } from '../common/Sort';

class HomePage extends React.Component {

    state = {
        restaurants: [],
        filters: this.props.filters,
        sorters: this.props.sorters
    };

    static defaultProps = {

        sorters: [{
          property: 'name'
        }, {
          property: 'state'
        }]

      };

    componentDidMount() {
        getRestaurants().then(restaurants => (this.setState({ restaurants: this.parseData(restaurants) })));
        console.log(this.state.restaurants)
    }

    parseData(data) {
        const { sorters } = this.state;
        const { filters } = this.state;

        if (data && data.length) {

          if (Array.isArray(filters) && filters.length) {
            data = data.filter(r => r.state === 'FL');
          }

          if (Array.isArray(sorters) && sorters.length) {
            data.sort(createSorter(...sorters));
          }
        }
    
        console.log(data);

        let States = createStatesList(data);
        console.log(States);

        let Attires = createAttiresList(data);
        console.log(Attires);

        let Genres = createGenresList(data);
        console.log(Genres);

        return data;
      }

    // componentDidUpdate(prevState) {
    //     const { restaurants } = this.props;
    //     if (prevState.restaurants !== restaurants) {
    //         this.sortList("name"); 
    //     };

    // }

    compareBy = (key) => {
        return function(a, b) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
        };
      };
      
    sortList = (key) => {
        let arrayCopy = [...this.state.restaurants];
        arrayCopy.sort(this.compareBy(key));
        console.log(arrayCopy);
        this.setState({ users: arrayCopy });
    };

    render() {

        const { restaurants } = this.state;
        console.log(restaurants);

        return (
            <div>
            <Header />
            
            <div>
                <h3>List of Restaurants</h3>
            </div>

            <RestaurantList restaurants={restaurants} />
        </div>
            );
    }
}
  

export default HomePage;