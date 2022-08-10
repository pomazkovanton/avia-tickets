import classes from './Fieldset.module.css';

const Fieldset = ({title, children}) => {
    return (
        <fieldset className={classes.wrapper}>
            <legend className={classes.title}>{title}</legend>
            {children}
        </fieldset>
    );
}

export default Fieldset;