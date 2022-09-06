import './App.css';
import Search from './search.js';
import CurrentWeather from './currentWeather.js';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';

function App() {

    // App is initialized with no locations saved
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [locations, setLocations] = useState([]);
    const [pinnedLocations, setPinnedLocations] = useState([]);
    const [subbedLocations, setSubbedLocations] = useState([]);

    const handleOnSearchChange = (searchData) => {

        // Uses Weather API (https://openweathermap.org/api) to fetch the weather in location returned by search
        const [lat, lon] = searchData.value.split(" ");
        const currentWeatherFetch =
            fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`);

        Promise.all([currentWeatherFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const newLocation = { city: searchData.label , ...weatherResponse}
                // Only allow up to 10 locations
                if ((locations.length + pinnedLocations.length) < 10) {
                    // Add location to list if it is not already present
                    if ((locations.filter((location) => location.city === searchData.label)).length === 0) {
                        setLocations(prevState => [ ...prevState, newLocation]);
                        setSelectedLocation(newLocation);
                    } else {
                        console.log("This location is already on the list!");
                    }
                }
                else {
                    console.log("There is a limit of 10 locations. Please remove a location before adding a new one.");
                }
            })
            .catch(err => console.log(err));
    }

    // Pin/Unpin location when clicking the pin button
    const handleOnPinLocation = (selectedLocation, isPinned) => {
        if (!isPinned) {
            setLocations(locations.filter((location) => location !== selectedLocation));
            setPinnedLocations(prevState => [...prevState, selectedLocation]);
        } else {
            setPinnedLocations(pinnedLocations.filter((location) => location !== selectedLocation));
            setLocations(prevState => [...prevState, selectedLocation]);
        }
    }

    // Subscribe/Unsubscribe to mail for this location when clicking the subscribe button
    const handleOnSubMail = (subLocation) => {
        if (subbedLocations.includes(subLocation)) {
            setSubbedLocations(subbedLocations.filter((location) => location !== subLocation));
        } else{
            setSubbedLocations(prevState => [...prevState, subLocation]);
        }
    }

    // Remove location from all lists
    const handleSelectTrash = (deletedLocation) => {
        setSubbedLocations(subbedLocations.filter((location) => location !== deletedLocation));
        setLocations(locations.filter((location) => location !== deletedLocation));
        setPinnedLocations(pinnedLocations.filter((location) => location !== deletedLocation));
    }

    const handleOnSelectLocation = (location) => {
        setSelectedLocation(location);
    }

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
            <div className="allLocations">
                {pinnedLocations && pinnedLocations.map(location => (
                    <CurrentWeather data={location}
                                    pinned={true}
                                    selectedLocation={selectedLocation}
                                    subbedLocations={subbedLocations}
                                    onDelete={handleSelectTrash}
                                    onPinLocation={handleOnPinLocation}
                                    onSelectLocation={handleOnSelectLocation}
                                    onSubMailList={handleOnSubMail}
                                    key={location.id}/>))
                }
                {locations && locations.map(location => (
                    <CurrentWeather data={location}
                                    pinned={false}
                                    selectedLocation={selectedLocation}
                                    subbedLocations={subbedLocations}
                                    onDelete={handleSelectTrash}
                                    onPinLocation={handleOnPinLocation}
                                    onSelectLocation={handleOnSelectLocation}
                                    onSubMailList={handleOnSubMail}
                                    key={location.id}/>))
                }
            </div>
        </div>
    );
}

export default App;
