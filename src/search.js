import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "./api.js";
import "./search.css";

// Must be a city in the United States with a population of 100,000
const minPop = 100000;
const country = 'US';

const Search = ({ onSearchChange }) => {

    const[search, setSearch] = useState(null);

    // Use GEO_API (https://rapidapi.com/wirefreethought/api/geodb-cities/) to fetch value in search bar
    const loadOptions = (inputValue) => {
        return (
            fetch(`${GEO_API_URL}/cities?minPopulation=${minPop}&namePrefix=${inputValue}&countryIds=${country}`,
                geoApiOptions)
                .then(response => response.json())
                .then(response => {
                    return {
                        // Return latitude, longitude and city, state to retrieve weather in future
                        options: response.data.map((city) => {
                            return {
                                value: `${city.latitude} ${city.longitude}`,
                                label: `${city.name}, ${city.regionCode}`,
                            }
                        })
                    }
                })
                .catch(err => console.error(err))
        );
    }

    // Empty search bar and return search data when a location has been chosen
    const handleOnChange = (searchData) => {    
        setSearch("");
        onSearchChange(searchData);
    }

    return(
        <AsyncPaginate
            id={"searchBar"}
            placeholder="Search for city"
            debounceTimeout={1000}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}/>
    );
}

export default Search;
