import classes from './Ticket.module.css';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import PlaсeTicket from '../PlaceTicket/PlaceTicket';

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
                    <PlaсeTicket place={ticket.departurePoint}/>
                    <p className={classes.transfer}>{renderTransfer(ticket.transfers)}</p>
                    <PlaсeTicket place={ticket.destination}/>
                </div>
            </div>
        </Card>
    );
}

export default Ticket;