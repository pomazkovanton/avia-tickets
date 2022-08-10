import { useState } from "react";

import data from './tickets.json';

import Header from "./componets/Header/Header";
import Main from "./componets/Main/Main";
import TicketList from "./componets/TicketList/TicketList";
import RadioGroup from "./componets/UI/RadioGroup/RadioGroup";
import CheckboxGroup from "./componets/UI/CheckboxGroup/CheckboxGroup";
import Fieldset from "./componets/UI/Fieldset/Fieldset";
import Card from "./componets/UI/Card/Card";
import FormFilters from "./componets/FormFilters/FormFilters";

const App = () => {
  const [tickets, setTickets] = useState(data);

  return (
    <div className="App">
      <Header/>
      <Main>
        <Card>
          <FormFilters/>
        </Card>
        <TicketList tickets={tickets}/>
      </Main>
    </div>
  );
}

export default App;
