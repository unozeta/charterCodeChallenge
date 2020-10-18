import React from "react";
import { getRestaurants } from "../../api/restaurantsApi";

class RestaurantList extends React.Component {
    state = {
        restaurants: []
    };

    componentDidMount() {
        getRestaurants().then(restaurants => this.setState({ restaurants: restaurants }));
    }

    render() {
        return (
        <>
            <h2>Restaurants</h2>
            <table className="table">
            <thead>
                <tr>
                <th>Name</th>
                <th>City</th>
                <th>State</th>
                <th>Phone Number</th>
                <th>Genres</th>
                </tr>
            </thead>
            <tbody>
                {this.state.restaurants.map(restaurants => {
                return (
                    <tr key={restaurants.id}>
                    <td>{restaurants.name}</td>
                    <td>{restaurants.city}</td>
                    <td>{restaurants.state}</td>
                    <td>{restaurants.telephone}</td>
                    <td>{restaurants.genre}</td>
                    </tr>
                );
                })}
            </tbody>
            </table>
        </>
        );
    }
}
  

export default RestaurantList;