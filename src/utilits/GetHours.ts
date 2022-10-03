export const getHours = (strDate: string, duration: number) => {
    let date = new Date(Date.parse(strDate));
    let date2 = new Date(Date.parse(strDate));
    date2.setHours(date2.getHours() + duration / 60);
    
    let departHours = (date.getHours() < 10) ? '0' + date.getHours(): date.getHours(); 
    let arrivalHours = (date2.getHours() < 10) ? '0' + date2.getHours(): date2.getHours();
    let departMinutes = (date.getMinutes() < 10) ? '0' + date.getMinutes(): date.getMinutes(); 
    let arrivalMinutes = (date2.getMinutes() < 10) ? '0' + date2.getMinutes(): date2.getMinutes();
    return departHours + ':' + departMinutes + ' - ' +  arrivalHours + ':' + arrivalMinutes;
}  