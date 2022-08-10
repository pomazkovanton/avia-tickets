import { useState } from "react";
import Checkbox from '../Checkbox/Checkbox';

const CheckboxGroup = () => {
    const [transfer, setTransfer] = useState(['all']);

    const changeFilter = (e) => {
        const value = e.target.value;
        transfer.includes(value) 
            ? setTransfer(transfer.filter(item => item !== value))
            : setTransfer([...transfer, value]);
    }

    return (
        <div>
            <Checkbox text="Все" value="all" transfer={transfer} changeFilter={changeFilter}/>
            <Checkbox text="Без пересадок" value="not" transfer={transfer}  changeFilter={changeFilter}/>
            <Checkbox text="1 пересадка" value="1"  transfer={transfer} changeFilter={changeFilter}/>
            <Checkbox text="2 пересадки" value="2" transfer={transfer}  changeFilter={changeFilter}/>
            <Checkbox text="3 пересадки" value="3" transfer={transfer}  changeFilter={changeFilter}/>
        </div>
    )
}

export default CheckboxGroup;
