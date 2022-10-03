import { makeAutoObservable } from "mobx";

// interface ObgData {
//     carrier: string
//     price: number
//     segments: [
//         { origin: string, destination: string, date: string, stops: string[], duration: number },
//         { origin: string, destination: string, date: string, stops: string[], duration: number },
//     ]

// }
class StoreParametrs {



    constructor() {
        makeAutoObservable(this)
    }


    // sortTicketsParam = (arr: [][], arrParam: number[]) => {
    //     let sortArr = [];
    //     let unsortedArr = [];
    //     if (arrParam.includes(0) || arrParam.length == 0) return arr.flat(Infinity);
    //     sortArr = arr.map((e: ObgData[]) => {
    //         return unsortedArr = e.filter((e: ObgData) => {
    //             if (arrParam.includes(e.segments[0].stops.length) || arrParam.includes(e.segments[1].stops.length)) return e;

    //         });
    //     });
    //     return sortArr.flat(Infinity);

    // }
}

export default new StoreParametrs();