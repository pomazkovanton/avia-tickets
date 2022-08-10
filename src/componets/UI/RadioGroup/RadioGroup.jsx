import { useState } from "react";

import classes from "./RadioGroup.module.css"

const RadioGroup = () => {
    const [currency, setСurrency] = useState("RUB");

    const chengeCurrency = (e) => {
        setСurrency(e.target.value);
     }
    
    return (
        <div className={classes.container}>
            <input 
                className={classes.radio}
                type="radio" 
                value="RUB" 
                name="RUB" 
                id="rub"
                checked={currency==="RUB" ? true : false} 
                onChange={chengeCurrency}
            />
            <label className={classes.label} htmlFor="rub">RUB</label>
            <input
                className={classes.radio}
                type="radio" 
                value="USD" 
                name="USD" 
                id="usd"
                checked={currency==="USD" ? true : false} 
                onChange={chengeCurrency} 
            />
            <label className={classes.label} htmlFor="usd">USD</label>
            <input 
                className={classes.radio}
                type="radio" 
                value="EUR" 
                name="EUR" 
                id="eur"
                checked={currency==="EUR" ? true : false} 
                onChange={chengeCurrency} 
            />
            <label className={classes.label} htmlFor="eur">EUR</label>
        </div>
    );
}

export default RadioGroup;