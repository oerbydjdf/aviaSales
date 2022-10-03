import { makeAutoObservable } from "mobx";
import {useSortTicketsParam} from '../hooks/UseSortTicket';
import {useSortPrice} from '../hooks/UseSortPrice';

interface BandlTickets {
    arrTicket: [][];
    bandlStop: boolean;
    errorMesage: string,
}

interface ObgData {
    carrier: string
    price: number
    segments: [
        {origin: string, destination: string, date: string, stops: string[], duration: number},
        {origin: string, destination: string, date: string, stops: string[], duration: number}
    ]

}

class Store {

    bandl: BandlTickets = {
        arrTicket: [[]],
        bandlStop: false,
        errorMesage: '',
    };

    arrSortTickets: ObgData[] | undefined;
    navNumber: number| undefined;
    numElem = 5;

    constructor() {
        makeAutoObservable(this)
    }
    
    getBandlTicket = (obj: BandlTickets) => this.bandl = obj;

    getArrIndexParam = (arr: number[]) => {
        // if(this.arrSortTickets !== undefined && arr.length === 0) return this.arrSortTickets;
        this.arrSortTickets = useSortTicketsParam(this.bandl.arrTicket, arr);
        if(this.arrSortTickets === undefined && this.navNumber !== undefined) return this.getNumNavigation(this.navNumber)
        if(this.navNumber !== undefined && this.arrSortTickets !== undefined) useSortPrice(this.arrSortTickets, this.navNumber)
        // console.log(this.arrSortTickets + ';' + this.navNumber)
    }  
      
    getNumNavigation = (num: number) => {
        this.navNumber = num;
        if( this.arrSortTickets === undefined) {
            this.arrSortTickets = useSortPrice(this.bandl.arrTicket.flat(1), this.navNumber);
        }  
        if(this.navNumber !== undefined && this.arrSortTickets !== undefined) useSortPrice(this.arrSortTickets, this.navNumber)
    }

    addElements = () => this.numElem += 5;


}

export default new Store();