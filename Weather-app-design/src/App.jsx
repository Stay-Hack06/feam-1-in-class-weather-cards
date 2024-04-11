import './App.css'
import * as React from 'react';

import Card from './Components/Card'

import image1 from "../../assets/weather-1.png"
import image2 from "../../assets/weather-2.png"
import image3 from "../../assets/weather-3.png"
import image4 from "../../assets/weather-4.png"

const WEATHER_CARDS_DATA = [
  {
    img: image1,
    title: "USA National Forecast",
    subtitle: "Looking Ahead to Your Halloween Forecast",
  },
  {
    img: image2,
    title: "Wild Animals",
    subtitle: "'Lucky to be alive': Whale Takes Out Windsurfer",
  },
  {
    img: image3,
    title: "Sponsored Content by Ford",
    subtitle: "5 Ways Driving At Night Could Be A Little Easier",
  },
  {
    img: image4,
    title: "Weather News",
    subtitle: "Even Our Meteorologists Were Stumped At First",
  },
];

function App() {

  return (
    <>
    <header>
    <h2>Trending today</h2>
    </header>
    <section className="Card">
      {WEATHER_CARDS_DATA.map((weatherCardData) => (<Card img={weatherCardData.img} title={weatherCardData.title} subtitle={weatherCardData.subtitle}/>))}
    </section>
    <section className='button'>
      <div>
        <button type="button">More News</button>
      </div>
    </section>
    </>
  )
}

export default App
