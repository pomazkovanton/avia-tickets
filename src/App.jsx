import { useState } from "react";

import data from './tickets.json';

import Header from "./componets/Header/Header";
import Main from "./componets/Main/Main";
import TicketList from "./componets/TicketList/TicketList";

const App = () => {
  const [tickets, setTickets] = useState(data);

  return (
    <div className="App">
      <Header/>
      <Main>
        <TicketList tickets={tickets}/>
      </Main>
    </div>
  );
}

export default App;
