import classes from './Checkbox.module.css';

const Checkbox = ({value, text, transfer, changeFilter}) => {
    const checked = transfer.includes(value) ? true : false;

    return (
        <label className={classes.label}>
            <input 
                className={classes.checkbox}
                type="checkbox" 
                value={value}
                name={value}
                checked={checked}
                onChange={changeFilter}
            />
            <span className={classes.span}></span>
            {text}
        </label>
    );
}

export default Checkbox;