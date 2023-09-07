brand = "Audi"
modelYear = 2000
model = "A3"
currentMileage = 7410
bigServiceMileage = 10000

let message = `You own a ${brand} ${model} that has been driven for ${currentMileage} km`
console.log(message);
if (currentMileage > bigServiceMileage) {
    console.log(`Time for a big service`)
}
else {
    console.log(`${bigServiceMileage-currentMileage} km left until big service`)
}
