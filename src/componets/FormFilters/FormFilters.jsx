import { useState } from "react";

import classes from './FormFilters.module.css';

import Fieldset from '../UI/Fieldset/Fieldset';
import RadioGroup from '../UI/RadioGroup/RadioGroup';
import CheckboxGroup from '../UI/CheckboxGroup/CheckboxGroup';

const FormFilters = ({transfer, changeFilter}) => {
    return (
        <form className={classes.form} action="">
            <Fieldset title="Валюта">
                <RadioGroup currencys={["RUB", "USD", "EUR"]}/>
            </Fieldset>
            <Fieldset title="Количество пересадок">
                <CheckboxGroup transfer={transfer} changeFilter={changeFilter}/>
            </Fieldset>
        </form>
    )
}

export default FormFilters;