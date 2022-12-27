import React,{useEffect,useState} from 'react'

export default function CallWebAPI() {
    const [APIData,setData]=useState({});

    useEffect(() => {
        fetch('https://localhost:7257/WeatherForecast')
            .then((response) => response.json())
            .then((data) => { 
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    console.log(APIData)
  return (
    <div>
        <h1>CallWebAPI</h1>
        <ul>
            {APIData.map(w=>{return <li key={w.date}>{w.date}-{w.temperatureC}</li>})}
        </ul>
    </div>
  )
}
