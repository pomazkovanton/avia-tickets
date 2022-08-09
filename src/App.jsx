import { useState } from "react";
import Header from "./componets/Header/Header";
import Main from "./componets/Main/Main";
import TicketList from "./componets/TicketList/TicketList";

const App = () => {
  const [tickets, setTickets] = useState([
    {
      id: 1, 
      logo: "https://aviakompaniya.info/sites/default/files/imagecache/icologobig/turkmenistan-airlines.png", 
      price: 106547, 
      departurePoint: {time: "9:25", place: "VVO, Владивосток", date: "9 окт 2018, Пт"}, 
      destination: {time: "11:45", place: "TLV, Тель-Авив", date: "10 окт 2018, Пт"}, 
      transfers: 1
    },
    {
      id: 2, 
      logo: "https://aviakompaniya.info/sites/default/files/imagecache/icologobig/Shanghai-Airlines.gif", 
      price: 21032, 
      departurePoint: {time: "9:25", place: "VVO, Владивосток", date: "9 ноя 2018, Пт"}, 
      destination: {time: "11:45", place: "TLV, Тель-Авив", date: "10 ноя 2018, Пт"}, 
      transfers: 2
    },
    {
      id: 3, 
      logo: "https://aviakompaniya.info/sites/default/files/imagecache/icologobig/yakutia.jpg", 
      price: 36879, 
      departurePoint: {time: "15:25", place: "VVO, Владивосток", date: "9 сен 2018, Пт"}, 
      destination: {time: "9:45", place: "TLV, Тель-Авив", date: "15 сен 2018, Пт"}, 
      transfers: 3
    },
    {
      id: 4, 
      logo: "https://aviakompaniya.info/sites/default/files/imagecache/icologobig/Turkish-Airlines.jpg", 
      price: 66790, 
      departurePoint: {time: "11:25", place: "VVO, Владивосток", date: "13 окт 2018, Пт"}, 
      destination: {time: "11:45", place: "TLV, Тель-Авив", date: "16 окт 2018, Пт"}, 
      transfers: null
    },
  ]);

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
