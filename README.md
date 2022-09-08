<a name="readme-top"></a>
[Live App](https://christianvaldovinos.com/weather)

## INTRODUCTION

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Video of App

This weather app allows you to search for cities and uses the [GEODB Cities](https://rapidapi.com/wirefreethought/api/geodb-cities) and [OpenWeather](https://openweathermap.org/api) APIs to present you the current weather in this city. This app is currently configured to include US Cities with a population of 100,000+ and can display up to 10 cities at a time.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With
* [![Node][Node.js]][Node-url]
* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get free API Keys at [GeoDB Cities](https://rapidapi.com/wirefreethought/api/geodb-cities/) and [Weather API](https://openweathermap.org/api)
2. Clone the repo
   ```sh
   git clone https://github.com/cvaldovinos/cs124-lab2.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your GeoDB API Key in `api.js` under ```geoApiOptions```
   ```js
   'X-RapidAPI-Key': '', // Your API Key here
   ```
5. Enter your Weather API Key in `api.js`
   ```js
   export const WEATHER_API_KEY = ""; // Your API Key here
   ```
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Screenshot of one city's box

Under each city you add, the following details are presented: The city's name, a description of the weather accompanied by a matching photo for that description, the temperature, what the weather feels like, the wind, and the humidity.

Screenshot of various cities

There are three icons along the bottom of each box: a star, an envelope, and a trashcan. Clicking on the star marks this city as a "favorite" and all of your favorited cities will be displayed ahead of the others. This allows users to see their most relevant cities first. The trashcan icon deletes the city so users can freely edit their displayed cities. The envelope icon is still in progress but will prompt users to enter their email (or possibly sign in) and will subscribe users to receive notification when the weather reaches extreme temperatures.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Christian Valdovinos - cvaldovinos@hmc.edu

[Live App](https://christianvaldovinos.com/weather)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
