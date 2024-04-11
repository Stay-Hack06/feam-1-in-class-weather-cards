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
      <Card img={image1} title={WEATHER_CARDS_DATA[0].title} subtitle={WEATHER_CARDS_DATA[0].subtitle}/>
      <Card img={image2} title={WEATHER_CARDS_DATA[1].title} subtitle={WEATHER_CARDS_DATA[1].subtitle}/>
      <Card img={image3} title={WEATHER_CARDS_DATA[2].title} subtitle={WEATHER_CARDS_DATA[2].subtitle}/>
      <Card img={image4} title={WEATHER_CARDS_DATA[3].title} subtitle={WEATHER_CARDS_DATA[3].subtitle}/>
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
