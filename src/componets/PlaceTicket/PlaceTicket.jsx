import classes from './PlaceTicket.module.css';

const PlaсeTicket = ({place}) => {
    return (
        <div>
            <time className={classes.time}>{place.time}</time>
            <p className={classes.place}>{place.place}</p>
            <time className={classes.date}>{place.date}</time>
        </div>
    );
}

export default PlaсeTicket;