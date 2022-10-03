import React from 'react';
import s from './flightData.module.css';
import load from '../../img/loader.gif';
import { observer } from 'mobx-react-lite';
import { getHours } from './../../utilits/GetHours';

interface ObgData {
    carrier: string
    price: number
    segments: [
        {origin: string, destination: string, date: string, stops: string[], duration: number},
        {origin: string, destination: string, date: string, stops: string[], duration: number}
    ]
    
}
interface Props {
    state: {
        arrTicket: [][],
        bandlStop: boolean,
        errorMesage: string,
    }
    sortTickets: undefined | ObgData[];
    addElem: number;
    
};

const FlightData = ({state, sortTickets, addElem}:Props) => {
    if(state.errorMesage !== '') return <>{state.errorMesage}</>
    if(state.bandlStop) {
        let data = (sortTickets !== undefined) ? sortTickets: state.arrTicket.flat(1);
        let flightDataArr = data.map((e, i:number) => {
            if(i >= addElem) return;
            return (
                <div key={i} className={s.flightData}>
                    <div className={s.cost}>
                        <div className={s.price}>{e.price} р</div>
                        <div className={s.foto}>
                            <img src={`http://pics.avs.io/80/80/${e.carrier}.png`} alt="foto" />
                        </div>
                    </div>
                    <div className={s.parametrs}>
                        <div className={s.movHkt}>
                            <div className={s.text}>{e.segments[0].origin} - {e.segments[0].destination}</div>
                            <div className={s.e}>{getHours(e.segments[0].date, e.segments[0].duration)}</div>
                            <div className={s.text}>{e.segments[1].origin} - {e.segments[1].destination}</div>
                            <div className={s.e}>{getHours(e.segments[1].date, e.segments[1].duration)}</div>
                        </div>
        
                        <div className={s.time}>
                            <div className={s.text}>в пути</div>
                            <div className={s.e}>{Math.round(e.segments[0].duration / 60)} час</div>
                            <div className={s.text}>в пути</div>
                            <div className={s.e}>{Math.round(e.segments[1].duration / 60)} час</div>
                        </div>
        
                        <div className={s.transfer}>
                            <div className={s.text}>{e.segments[0].stops.length} пересадки</div>
                            <div className={s.e}>{e.segments[0].stops.join(', ')}</div>
                            <div className={s.text}>{e.segments[1].stops.length} пересадки</div>
                            <div className={s.e}>{e.segments[1].stops.join(', ')}</div>
                        </div>
                    </div>
                    
                </div>
                
            );

        })
        return <>{flightDataArr}</>
    } else {
        return (
            <> Идет загрузка билетов, подождите...
        <img style={{width: '300px', height: '250px', margin: '0 auto', display: 'block'}}
        src={load} alt="loader" />
            </>)
    }
    
};

export default observer(FlightData);