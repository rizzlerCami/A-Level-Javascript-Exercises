// script1.js
let base1 = 0
let base2 = 0
let height = 0
// Function to calculate the area of a trapezium
function trapezium() {
    // TODO: Write the formula to calculate trapezium area
    base1 = document.getElementById("trapBase1").value
    base2 = document.getElementById("trapBase2").value
    height = document.getElementById("trapHeight").value
    output1.innerHTML = `Area = ${(Number(base1) + Number(base2)) * height / 2}`
}

// Function to calculate the volume of a cylinder
function cylVol() {
    // TODO: Write the formula for cylinder volume
    base1 = document.getElementById("cylRadius").value
    height = document.getElementById("cylHeight").value
    output2.innerHTML = `Volume = ${height * Math.PI * base1 ** 2}`
}

// Function to calculate the total surface area of a cylinder
function cylArea() {
    // TODO: Write the formula for cylinder surface area
    base1 = document.getElementById("cylRadius").value
    height = document.getElementById("cylHeight").value
    output2.innerHTML = `Area = ${2 * Math.PI * base1 * (Number(base1) + Number(height))}`
}

// Function to calculate the volume of a cone
function cone() {
    // TODO: Write the formula for cone volume
    base1 = document.getElementById("coneRadius").value
    height = document.getElementById("coneHeight").value
    output3.innerHTML = `Volume = ${Math.PI * base1**2 * height / 3}`
}

// Function to calculate the hypotenuse using Pythagoras' theorem
function pythag() {
    // TODO: Write the formula for hypotenuse
    base1 = document.getElementById("sideA").value
    base2 = document.getElementById("sideB").value
    output4.innerHTML = `Hypotenuse = ${(base1**2 + base2**2)**(1/2)}`
}

// Function to calculate the area of a triangle using Hero's formula
function HERO() {
    // TODO: Write the formula for Hero's area
    base1 = document.getElementById("side1").value
    base2 = document.getElementById("side2").value
    height = document.getElementById("side3").value
    output5.innerHTML = `Area = ${(((Number(base1) + Number(base2) + Number(height)) / 2)*((Number(base1) + Number(base2) + Number(height)) / 2 - base1)*((Number(base1) + Number(base2) + Number(height)) / 2 - base2)*((Number(base1) + Number(base2) + Number(height)) / 2 - height))**(1/2)}`
}