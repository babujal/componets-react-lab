import './WeatherData.css'

const WeatherForecast = (props) => {
    return (
        <div className="weatherData">
            <h2>{props.WeatherList.day}</h2>
            <img src="" alt="" />
            <p><span>conditions: </span>{props.WeatherList.conditions}</p>
            <p><span>time: </span>{props.WeatherList.time}</p>
        </div>
    );
};

export default WeatherForecast;