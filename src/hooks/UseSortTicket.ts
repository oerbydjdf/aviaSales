interface ObgData {
    carrier: string
    price: number
    segments: [
        {origin: string, destination: string, date: string, stops: string[], duration: number},
        {origin: string, destination: string, date: string, stops: string[], duration: number},
    ]

}

export const useSortTicketsParam = (arr: [][], arrParam: number[]) => {
    let sortArr = [];
    let unsortedArr = [];
    if(arrParam.length == 0 || arrParam.includes(0)) return undefined;
    sortArr = arr.map((e: ObgData[]) => {
       return unsortedArr = e.filter((e: ObgData) => {
            if(arrParam.includes(e.segments[0].stops.length + 1) || arrParam.includes(e.segments[1].stops.length + 1)) return e;

        });
    });
    return sortArr.flat(1);

}