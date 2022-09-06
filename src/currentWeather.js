import "./currentWeather.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeCircleCheck, faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import {faEnvelope, faTrashCan, faStar as hollowStar} from '@fortawesome/free-regular-svg-icons';

const CurrentWeather = ({data, pinned, subbedLocations, onDelete, onPinLocation, onSelectLocation, onSubMailList}) => {

    // Check if location is already subscribed to
    const subbed = subbedLocations.includes(data);

    return(
        <div className="weather"
             onClick={() => onSelectLocation(data)}
        >
            <div id="weather-info">
                <div id="topLeftDiv">
                    <p id="city">{data.city}</p>
                    <p id="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather-icon" id="weather-icon" src={`./icons/${data.weather[0].icon}.png`}/>
                <p id="temperature">{Math.round(data.main.temp)}°F</p>
                <div id="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°F</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{Math.round(data.wind.speed)} mph</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{Math.round(data.main.humidity)}%</span>
                    </div>
                </div>
                <div id="bottomButtons">
                    <span id="starButton" className="bottomIcons" onClick={() => onPinLocation(data, pinned)}>
                        {pinned ?
                            <FontAwesomeIcon icon={solidStar} size="sm" color="#FFD700"/> :
                            <FontAwesomeIcon icon={hollowStar} size="sm" color="#FFD700"/>
                        }
                    </span>
                    <span className="bottomIcons" onClick={() => onSubMailList(data)}>
                        {subbed ?
                            <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="1x" color="dodgerblue"/> :
                            <FontAwesomeIcon icon={faEnvelope} size="1x" color="dodgerblue"/>
                        }
                    </span>
                    <span className="bottomIcons" onClick={() => onDelete(data)}>
                        <FontAwesomeIcon icon={faTrashCan} size="1x" color="#E20000"/>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;
