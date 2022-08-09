import classes from "./TicketList.module.css";

import Ticket from "../Ticket/Ticket";

const TicketList = ({tickets}) => {
    return (
        <ul className={classes.list}>
           {tickets.map((ticket) => 
                <Ticket ticket={ticket} key={ticket.id}/>      
           )}
        </ul>
    );
}

export default TicketList;