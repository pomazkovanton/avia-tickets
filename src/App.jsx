import { useState } from "react";

import data from './tickets.json';

import Header from "./componets/Header/Header";
import Main from "./componets/Main/Main";
import TicketList from "./componets/TicketList/TicketList";
import Card from "./componets/UI/Card/Card";
import FormFilters from "./componets/FormFilters/FormFilters";

const App = () => {
  const sortData = [...data].sort((a, b) => a['price'] - b['price']);
  const [tickets, setTickets] = useState(sortData);
  const [transfer, setTransfer] = useState(['all']);

  const changeFilter = (e) => {
      const value = e.target.value;
      transfer.includes(value) 
          ? setTransfer(transfer.filter(item => item !== value))
          : setTransfer([...transfer, value]);
      filterTransfer();
  }

  const filterTransfer = () => {
    if (transfer.includes('1')) setTickets(tickets.filter(a => a['transfers'] === 1))
    // if (filter.includes('not')) setTickets([...tickets].filter(a => a['transfers'] === null))
  }

  return (
    <div className="App">
      <Header/>
      <Main>
        <Card>
          <FormFilters changeFilter={changeFilter} transfer={transfer}/>
        </Card>
        {
          transfer.length === 0 
            ? <h1 style={{textAlign: 'center', width: '100%'}}>Не один фильтр не выбран</h1>
            : <TicketList tickets={tickets}/>
        }
      </Main>
    </div>
  );
}

export default App;
