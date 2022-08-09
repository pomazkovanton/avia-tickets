import classes from './Ticket.module.css';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';

const renderTransfer = (count) => {
    if (count === null || count === 0 || count === '') return "Без пересадок";
    if (count%10 === 1) return `${count} пересадка`;
    if (count%10 === 2|| count%10 === 3 || count%10 === 4) {
        return `${count} пересадки`;
    } else {
        return `${count} пересадок`;
    }
}

const Ticket = ({ticket}) => {
    return (
        <Card>
            <div className={classes.ticket}>
                <div className={classes.header}>
                    <img className={classes.logo} src={ticket.logo} alt="Логоти авиакомпании" />
                    <Button className={classes.btn} >Купить за {ticket.price}р</Button>
                </div>
                <div className={classes.body}>
                    <div>
                        <time className={classes.time}>{ticket.departurePoint.time}</time>
                        <p className={classes.place}>{ticket.departurePoint.place}</p>
                        <time className={classes.date}>{ticket.departurePoint.date}</time>
                    </div>
                    <p className={classes.transfer}>{renderTransfer(ticket.transfers)}</p>
                    <div>
                        <time className={classes.time}>{ticket.destination.time}</time>
                        <p className={classes.place}>{ticket.destination.place}</p>
                        <time className={classes.date}>{ticket.destination.date}</time>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default Ticket;