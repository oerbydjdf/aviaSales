
interface ObgData {
    carrier: string
    price: number
    segments: [
        {origin: string, destination: string, date: string, stops: string[], duration: number},
        {origin: string, destination: string, date: string, stops: string[], duration: number},
    ]

}

export const useSortPrice = (arr: ObgData[], paramPrice: number) => {

    if(paramPrice === 0) return arr.sort((a, b) => a.price - b.price);

    if(paramPrice === 1) {
        return arr.sort((a, b) => {
            return (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration);
        });
    }
     
    if(paramPrice === 2) {
        return arr.sort((a, b) => {
            return (b.price / (b.segments[0].duration + b.segments[1].duration)) - (a.price / (a.segments[0].duration + a.segments[1].duration));
        });
    } 

}
