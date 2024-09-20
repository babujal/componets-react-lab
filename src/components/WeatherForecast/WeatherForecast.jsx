import './weatherForecast.css'

const WeatherForecast = (props) => {
    return (
        <div className="weather">
            <h2>Day: {props.forecast.day}</h2>
            <img src={props.forecast.img} alt="" />
            <p><span>conditions: </span>{props.forecast.conditions}</p>
            <p><span>time: </span>{props.forecast.time}</p>
        </div>
    );
};

export default WeatherForecast;