
function manageTickets(arr, str) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = arr.map(e=>{
        let [destination,price,status] = e.split("|");
        price = Number(price);
        return {destination, price, status};
    }).sort((a,b)=>{
        if(str==="price"){
            return 0;
        }else{
            return a[str].localeCompare(b[str]);
        }
    });
    return tickets;
}

const ticketDescriptions = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];

console.log(manageTickets(ticketDescriptions, 'destination'));
console.log(manageTickets(ticketDescriptions, 'status'));