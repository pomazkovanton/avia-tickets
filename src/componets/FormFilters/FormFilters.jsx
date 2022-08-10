import classes from './FormFilters.module.css';

import Fieldset from '../UI/Fieldset/Fieldset';
import RadioGroup from '../UI/RadioGroup/RadioGroup';
import CheckboxGroup from '../UI/CheckboxGroup/CheckboxGroup';

const FormFilters = () => {
    return (
        <form className={classes.form} action="">
            <Fieldset title="Валюта">
                <RadioGroup currencys={["RUB", "USD", "EUR"]}/>
            </Fieldset>
            <Fieldset title="Количество пересадок">
                <CheckboxGroup/>
            </Fieldset>
        </form>
    )
}

export default FormFilters;