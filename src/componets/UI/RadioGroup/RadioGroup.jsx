import RadioBtn from "../RadioBtn/RadioBtn";

import { useState } from "react";

import classes from "./RadioGroup.module.css"

const RadioGroup = ({currencys}) => {
  const [currency, setСurrency] = useState(currencys[0]);

  const chengeCurrency = (e) => {
    setСurrency(e.target.value);
 }

  return (
    <div className={classes.container}>
      {
        currencys.map( (curren) => {
          return (
            <RadioBtn curren={curren} key={curren} currency={currency} chengeCurrency={chengeCurrency}/>
          )
        })
      }
    </div>
  );
}

export default RadioGroup;