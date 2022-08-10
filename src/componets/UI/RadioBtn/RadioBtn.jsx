import classes from './RadioBtn.module.css';


const RadioBtn = ({curren, currency, chengeCurrency}) => {
   
    return (
        < >
            <input 
                className={classes.radio}
                type="radio" 
                value={curren}
                name={curren}
                id={curren}
                checked={currency===curren ? true : false} 
                onChange={chengeCurrency}
            />
            <label className={classes.label} htmlFor={curren}>{curren}</label> 
        </>
    );
}

export default RadioBtn;