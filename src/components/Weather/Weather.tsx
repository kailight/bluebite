import '../Card.scss'
import './Weather.scss'

import Cloudy from 'src/icons/cloudy.svg'
import Rainy from 'src/icons/rain.svg'

export default function Weather() {
    return (
        <div className="card weather">
            <div className="status-area">
                <div className="sky-icon">
                    <img src={Cloudy} />
                </div>
                <div className="temperature-wrapper">
                    <div className="temperature">
                        78&deg;F
                    </div>
                    <div className="sky">
                        Cloudy
                    </div>
                </div>
            </div>
            <div className="location-area">
                New York, NY
            </div>
            <div className="blank-area">

            </div>
            <div className="prediction-area">
                <div className="day day1">
                    <img className="icon" src={Cloudy} />
                    <div>Fri</div>
                </div>
                <div className="day day1">
                    <img className="icon" src={Cloudy} />
                    <div>Sat</div>
                </div>
                <div className="day day1">
                    <img className="icon" src={Rainy} />
                    <div>Sun</div>
                </div>
            </div>
        </div>
    );
}
