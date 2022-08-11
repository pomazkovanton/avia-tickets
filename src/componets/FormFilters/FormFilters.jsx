import { useState } from "react";

import classes from './FormFilters.module.css';

import Fieldset from '../UI/Fieldset/Fieldset';
import RadioGroup from '../UI/RadioGroup/RadioGroup';
import CheckboxGroup from '../UI/CheckboxGroup/CheckboxGroup';

const FormFilters = ({transfer, filterTransfer, changeFilter}) => {
    return (
        <form className={classes.form} action="">
            <Fieldset title="Валюта">
                <RadioGroup currencys={["RUB", "USD", "EUR"]}/>
            </Fieldset>
            <Fieldset title="Количество пересадок">
                <CheckboxGroup transfer={transfer} changeFilter={changeFilter} onChange={filterTransfer(transfer)}/>
            </Fieldset>
        </form>
    )
}

export default FormFilters;