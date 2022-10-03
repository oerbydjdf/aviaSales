import cx from 'classnames';
import React, { useState } from 'react';
import s from './navigation.module.css';
import store from '../../store/store';
import { observer } from 'mobx-react-lite';


const Navigation = () => {
    let [num, setNUm] = useState<number>(-1)
    let ArrItems: string[] = ['Самый дешевый', 'Самый быстрый', 'Оптимальный',];
    let handleClick = (i: number) => {
        setNUm(i)
        store.getNumNavigation(i);
    }
    
    return (
        <div className={s.menuWrap}>
            {ArrItems.map((e:string, i:number) =>{
                return (
                (num === i)? <div key={i} onClick={() => handleClick(i)} className={cx(s.menuStyle, s.menuStyleActive)}>{e}</div>:
                <div key={i} onClick={() => handleClick(i)} className={s.menuStyle}>{e}</div>)

            })}
        </div>
    );
};

export default observer(Navigation);