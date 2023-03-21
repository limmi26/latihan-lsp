// Input nilai A, Nilai B, Nilai C
let a = 20;
let b = 60;
let c = 10;

// Menampilkan input nilai
console.log("Nilai A: " + a);
console.log("Nilai B: " + b);
console.log("Nilai C: " + c);

// Menampilkan pengurutkan angka dengan menggunakan descending dan ascending
let arr = [a, b, c];
arr.sort(function(x, y) {
  return x - y;
});

console.log("Urutan angka (ascending): " + arr);
arr.reverse();
console.log("Urutan angka (descending): " + arr);

// Menampilkan nilai MAX
let max = Math.max(a, b, c);
console.log("Nilai MAX: " + max);

// Menampilkan nilai MIN
let min = Math.min(a, b, c);
console.log("Nilai MIN: " + min);

// Menampilkan rata-rata
let average = (a + b + c) / 3;
console.log("Rata-rata: " + average);
