import React, { useEffect, useState } from 'react';
import s from './parametrs.module.css';
import store from '../../store/store';
import {useSortTicketsParam} from '../../hooks/UseSortTicket';



const Parametrs = () => {
    let textInput: string[] = ["Все", "Без пересадок", "Одна пересадка", "Две пересадки", "Три пересадки",];
    let [index, setIndex] = useState<number[]>([]);
    let handelClick = (i: number) :void => {
        if(index.includes(i)) {
            index.splice(index.indexOf(i), 1);
            setIndex([...index]);    
        } else {
            setIndex([...index, i]);    
        }
    }

    useEffect(() => {store.getArrIndexParam(index)}, [index]);
    
    return (
        <div className={s.parametrs}>
            <h2>Количество пересадок</h2>
             {textInput.map((e:string, i: number) => {
             return (
            (!index.includes(i))?
             <div key={i} onClick={() => handelClick(i)} className={s.parametrs__check}>
                <input checked={false} type="checkBox" /><label>{e}</label></div>:
             <div key={i} onClick={() => handelClick(i)} className={s.parametrs__check}>
                <input checked={true} type="checkBox" /><label>{e}</label></div>);
             })}
        </div>
    );
};

export default Parametrs;