var BMWi8 = {
    car: "BMW i8",
    image: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/si8/i8-03-media-hd.jpg?imwidth=1920",
    manufacture: "BMW",
    engine: "1.5 Liter 3-cylinder",
    horsepower: "369 HP",
    topspeed: "155 mph",
    zerotosixty: "4.6 seconds",
};
var LamborghiniAventador = {
    car: "Lamborghini Aventador",
    image: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/gate_aven_s_02_m.jpg",
    manufacture: "Lamborghini",
    engine: "6.5 Liter V12",
    horsepower: "769 HP",
    topspeed: " 220 mph",
    zerotosixty: "2.9 seconds",
}
var BugattiDivo = {
    car: "Bugatti Divo",
    image: "https://www.bugatti.com/fileadmin/_processed_/sei/p245/se-image-a58e30ad906c90155912fb3ad490ab6b.jpg",
    manufacture: "Bugatti",
    engine: "8.0-liter W16 engine",
    horsepower: "1,479 HP",
    topspeed: "236 mph",
    zerotosixty: "2.4 seconds",
}
function fillTable(temp) {
    document.getElementById("carName").innerHTML = temp.car;
    document.getElementById("carIMG").src = temp.image;
    document.getElementById("carManufacture").innerHTML = temp.manufacture;
    document.getElementById("carEngine").innerHTML = temp.engine;
    document.getElementById("carHP").innerHTML = temp.horsepower;
    document.getElementById("topSpeed").innerHTML = temp.topspeed;
    document.getElementById("0-60").innerHTML = temp.zerotosixty;
}
fillTable(BMWi8)
function i8() {
    fillTable(BMWi8);
    alert("The BMW i8 is a plug-in hybrid sports car developed by BMW. Here are some facts about the i8.")
    alert("The i8 coupe can seat 4 people, making it a family car. This does not compare to the Koenigsegg Gemera, though, with about 1,700 HP, and sits 4.")
    alert("This car has a perfect 50/50 weight distribution, and can be a FWD, RWD, and an AWD.")
}
function aventador() {
    fillTable(LamborghiniAventador);
    alert("The Lamborghini Aventador is a mid-engine super car produced by Lamborghini. Here are some facts about the Aventador.")
    alert("The Aventador is the most fuel-efficient, and the most powerful Lamborghini ever.")
    alert("This car has some interior controls that come from Volkswagen and Audi cars.")
}
function divo() {
    fillTable(BugattiDivo);
    alert("The Bugatti Divo is a mid-engine track-focused sports car developed and manufactured by Bugatti Automobiles. Here are some facts about the Divo.")
    alert("Only 40 units were ever produced, and all units were already sold before the car was unveiled.")
    alert("This is only 0.1 seconds faster in 0-60 than the Chiron, despite it being $2 million more.")
}
console.log("Welcome to Car Wiki! New cars will be added frequently!")
console.log("BMW i8 facts: The BMW i8 is a plug-in hybrid sports car developed by BMW. Here are some facts about the i8.The i8 coupe can seat 4 people, making it a family car. This does not compare to the Koenigsegg Gemera, though, with about 1,700 HP, and sits 4. This car has a perfect 50/50 weight distribution, and can be a FWD, RWD, and an AWD.")
console.log("Lamborghini Aventador facts: The Lamborghini Aventador is a mid-engine super car produced by Lamborghini. Here are some facts about the Aventador. The Aventador is the most fuel-efficient, and the most powerful Lamborghini ever. This car has some interior controls that come from Volkswagen and Audi cars.")
console.log("Bugatti Divo facts: The Bugatti Divo is a mid-engine track-focused sports car developed and manufactured by Bugatti Automobiles. Here are some facts about the Divo. Only 40 units were ever produced, and all units were already sold before the car was unveiled. This is only 0.1 seconds faster in 0-60 than the Chiron, despite it being $2 million more.")