interface ObgTickets {
    gettingTickets(): Promise<string>,
    obg: {
        arrTicket: [][],
        bandlStop: boolean,
        errorMesage: string,

    }, 
    id: string,
    getArrTickets(): Promise<{arrTicket: [][], bandlStop: boolean, errorMesage: string}>
}

export let api: ObgTickets = {
    // Получаем ключ
    obg: {
        arrTicket: [],
        bandlStop: false,
        errorMesage: '',
    },

    id: '',
    async gettingTickets() {            
            let response = await fetch('https://front-test.dev.aviasales.ru/search');
            let id = '';
            
            try {
                let searchId = await response.json();
                for(let key in searchId) {
                    id = key + '=' + searchId[key];
                };                
                return id
            } catch (e) {
                this.obg.errorMesage = 'Сервер не доступен! Попробуйте позже.'
                return id = 'error'              
                
            }
        },

        
        // Получаем пачку билетов
        async getArrTickets() {
            if(this.id === '') this.id = await this.gettingTickets();
            if(this.id == 'error') return this.obg;
            let responseTicket = await fetch('https://front-test.dev.aviasales.ru/tickets?' + this.id);
            let bundlTicket = undefined;

            try {
                bundlTicket = await responseTicket.json();
                
            } catch(e) {
                if(responseTicket.status === 500) return this.getArrTickets();
                if(responseTicket.status === 404 && this.obg.bandlStop === false) {
                    this.obg.errorMesage = 'Сервер не доступен! Попробуйте позже.'
                    return this.obg
                }                
            }
            
            this.obg.bandlStop = bundlTicket.stop;
            this.obg.arrTicket = [...this.obg.arrTicket, bundlTicket.tickets];
            return (!bundlTicket.stop)? this.getArrTickets(): this.obg; 
        },
}
