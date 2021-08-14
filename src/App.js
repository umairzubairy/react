


import React,{useState} from "react";


function App() {

  const api = {
    key:"5f655f096937812ed818b883bf33b173",
    base:"https://api.openweathermap.org/data/2.5/"

}
  const [query,setQuery] = useState('')
  const [weather,setWeather] = useState({})


  const search = (evt) => {

    if(evt.key === "Enter")
    {
      console.log(api.base + 'abc')

        fetch(api.base + 'weather?q=' + query + '&units=metric&APPID=' + api.key)
        .then(res=> res.json())
        .then(result =>
          {
          console.log(result)
          setQuery('');
          setWeather(result)
          })
      }
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            ></input>
        </div>
        {typeof weather.main != "undefined" ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name} , {weather.sys.country}</div>
            <div className="date">{new Date().toDateString()}</div>
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)} c</div>
            <div className="weather">{weather.weather[0].description}</div>
          </div>
        </div>) : ('')}
      </main>

    </div>
  );
}

export default App;
