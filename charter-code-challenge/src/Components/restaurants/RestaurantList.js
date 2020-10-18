import React from "react";
import { getRestaurants } from "../../api/restaurantsApi";

import Pagination from "../common/Pagination";

class RestaurantList extends React.Component {
    state = {
        restaurants: [],
        currentRestaurants: [],
        currentPage: null,
        totalPages: null
    };

    componentDidMount() {
        getRestaurants().then(restaurants => this.setState({ restaurants: restaurants }));
    }

    onPageChanged = data => {
        const { restaurants } = this.state;
        const { currentPage, totalPages, pageLimit } = data;
    
        const offset = (currentPage - 1) * pageLimit;
        const currentRestaurants = restaurants.slice(offset, offset + pageLimit);
    
        this.setState({ currentPage, currentRestaurants, totalPages });
      };

    render() {

        const {
            restaurants,
            currentRestaurants,
            currentPage,
            totalPages
          } = this.state;
          const totalRestaurants = restaurants.length;
      
          if (totalRestaurants === 0) return null;
      
          const headerClass = [
            "text-dark py-2 pr-4 m-0",
            currentPage ? "border-gray border-right" : ""
          ]
            .join(" ")
            .trim();


        return (
            <div className="container mb-5">
                <div className="row d-flex flex-row py-5">
                <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                    <h2 className={headerClass}>
                        <strong className="text-secondary">{totalRestaurants}</strong>{" "}
                        Restaurants
                    </h2>
                    {currentPage && (
                        <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                        Page <span className="font-weight-bold">{currentPage}</span> /{" "}
                        <span className="font-weight-bold">{totalPages}</span>
                        </span>
                    )}
                    </div>
                    <div className="d-flex flex-row py-4 align-items-center">
                    <Pagination
                        totalRecords={totalRestaurants}
                        pageLimit={10}
                        pageNeighbours={0}
                        onPageChanged={this.onPageChanged}
                    />
                    </div>
                </div>

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
                        {this.state.currentRestaurants.map(restaurant => {
                        return (
                            <tr key={restaurant.id}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.city}</td>
                            <td>{restaurant.state}</td>
                            <td>{restaurant.telephone}</td>
                            <td>{restaurant.genre}</td>
                            </tr>
                        );
                        })}
                    </tbody>
                </table>

                </div>
            </div>
            );
    }
}
  

export default RestaurantList;