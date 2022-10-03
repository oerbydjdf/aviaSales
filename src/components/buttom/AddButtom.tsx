import React from 'react';
import s from './buttom.module.css';
import store from '../../store/store';

interface ButtomProps {
    condition: boolean;
}
const AddButtom = ({condition}: ButtomProps) => {
    return (condition)?        
        <div className={s.add}>
            <button onClick={() => store.addElements()} className={s.buttomAdd}>Добавить еще</button>
        </div> :
         <></>
};

export default AddButtom;