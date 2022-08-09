import classes from "./TicketList.module.css";

import Ticket from "../Ticket/Ticket";

const TicketList = ({tickets}) => {
    return (
        <ul className={classes.list}>
           {tickets.map((ticket) => 
            <li className={classes.item}>
                <Ticket ticket={ticket} key={ticket.id}/>      
            </li>
           )}
        </ul>
    );
}

export default TicketList;