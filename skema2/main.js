// import readline
const readline = require("readline");

// buatlah daftar harga
const list = [
  {
    type: "Superior",
    "1-2 hari": 100000,
    "3-4 hari": 90000,
    ">=5 hari": 80000,
  },
  {
    type: "Deluxe",
    "1-2 hari": 150000,
    "3-4 hari": 135000,
    ">=5 hari": 120000,
  },
  {
    type: "Premium",
    "1-2 hari": 200000,
    "3-4 hari": 180000,
    ">=5 hari": 160000,
  },
];

console.table(list, ["type", "1-2 hari", "3-4 hari", ">=5 hari"], {
  showIndex: false,
});
console.log("Keterangan :");
console.log("1. Superior");
console.log("2. Deluxe");
console.log("3. Premium");

// tentukan harga
const harga = {
  1: [
    { hari: 1, harga: 100000 },
    { hari: 2, harga: 100000 },
    { hari: 3, harga: 90000 },
    { hari: 4, harga: 90000 },
    { hari: 5, harga: 80000 },
    { hari: Infinity, harga: 80000 },
  ],
  2: [
    { hari: 1, harga: 150000 },
    { hari: 2, harga: 150000 },
    { hari: 3, harga: 135000 },
    { hari: 4, harga: 135000 },
    { hari: 5, harga: 120000 },
    { hari: Infinity, harga: 120000 },
  ],
  3: [
    { hari: 1, harga: 200000 },
    { hari: 2, harga: 200000 },
    { hari: 3, harga: 180000 },
    { hari: 4, harga: 180000 },
    { hari: 5, harga: 160000 },
    { hari: Infinity, harga: 160000 },
  ],
};

// tipe menjadi nama
const jenisKamar = {
  1: "Superior",
  2: "Deluxe",
  3: "Premium",
};

// process input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function booking() {
  rl.question(
    "Pilih tipe kamar : ",
    (tipeKamar) => {
      if (tipeKamar in jenisKamar) {
        rl.question(
          "Lama menginap : ",
          (lama) => {
            const tipe = jenisKamar[tipeKamar];
            const hargaKamar = harga[tipeKamar];
            const hargaMalam = hargaKamar.find(
              (data) => lama <= data.hari
            );
            const total = hargaMalam.harga * lama;
            console.log(`Total Harga: Rp ${total}`); //total harga

            // askAgain();
            rl.question("Ingin memesan lagi? (y/n)", (answer) => {
              if (answer === "y") {
                booking();
              } else {
                console.log("terima kasih");
                rl.close();
              }
            });
          }
        );
      } else {
        console.log("pilihan kamar tidak tersedia");
        booking();
      }
    }
  );
}

booking();