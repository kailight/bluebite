import '../Card.scss'
import './Weather.scss'

import CloudyImage from 'src/icons/cloudy.svg'
import RainyImage from 'src/icons/rain.svg'
import ClearImage from 'src/icons/clear-day.svg'

import { useEffect, useState } from "react";

interface WeatherComponentProps {
    lat: string,
    lon: string
}

const conditions2Icons:any = {
    cloudy  :     CloudyImage,
    rain    :     RainyImage,
    'clear-day':  ClearImage
}

export default function Weather( { lat, lon }:WeatherComponentProps ) {

    // https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
    let isMounted = true

    const url = `http://localhost:3030/integration/weather?lat=${lat}&lon=${lon}`
    console.info('weather data url', url);
    const [data,setData] = useState<Data>( {} as any )

    useEffect( () => {

        (async () => {
            const response = await fetch(url)
            let responseData:any
            if (response.ok) {
                responseData = await response.json()
                console.info('weather data from backend', responseData.data);
            }
            if (!responseData) {
                console.error('Failed to fetch weather data from backend')
                return
            }
            const data = responseData.data

            // Misspell
            data.upcoming = data.upcomming

            if (isMounted) {
                setData(data)
            }

        })()
    }, [])

    interface Data {
        lon             ?: string // "37.82012350797623"
        lat             ?: string // "-122.47822291578807"
        condition       : string // "clear-day"
        conditionName   ?: string // "Clear"
        temperature     ?: number // 75
        unit            ?: string // "f"
        location        ?: string // "San Francisco, CA
        upcoming        ?: Array<{
            day: string // "Fri",
            condition: string // "cloudy",
            conditionName: string // "Cloudy"
        }>
    }

    return (
        <div className="card weather">
            <div className="status-area">
                <div className="sky-icon">
                    <img src={conditions2Icons[data.condition]} />
                </div>
                <div className="temperature-wrapper">
                    <div className="temperature">
                        {data.temperature}&deg;{data.unit}
                    </div>
                    <div className="condition">
                        {data.conditionName}
                    </div>
                </div>
            </div>
            <div className="location-area">
                {data.location}
            </div>
            <div className="blank-area">

            </div>
            <div className="prediction-area">
                {
                    data?.upcoming?.map( (upcomingDayData:any, i:number) => {
                        return (
                            <div className="day day1" key={i}>
                                <img className="icon" src={conditions2Icons[upcomingDayData.condition]} />
                                <div>{upcomingDayData.day}</div>
                            </div>
                        )
                    })
                }
                <></>
            </div>
        </div>
    );
}
