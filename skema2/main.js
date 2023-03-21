// list harga hotel
const data = [
    {sewa: '1-2 hari', superior: '100000/malam', deluxe: '150000/malam', premium: '200000/malam'},
    {sewa: '3-4 hari', superior: '90000/malam', deluxe: '135000/malam', premium: '180000/malam'},
    {sewa: '>=5 hari', superior: '80000/malam', deluxe: '120000/malam', premium: '160000/malam'}
];

// input dan output data
console.table(data);

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// memesan hotel
rl.question("Tipe kamar: \n 1. superior \n 2. deluxe \n 3. premium \n pilih tipe kamar: ", (kamar) => {
    rl.question("lama menginap: ", (inap) => {
        let harga = 0;
        if(kamar === "1"){
            harga = inap <= 2 ? 100000 : inap <= 4 ? 90000 : 80000;
        } else if(kamar === "2"){
            harga = inap <= 2 ? 150000 : inap <= 4 ? 135000 : 1200000;
        } else if(kamar){
            harga = inap <= 2 ? 200000 : inap <= 4 ? 180000 : 160000;
        }

        const total = harga * inap;
        console.log("total harga: " + total);
    });
});