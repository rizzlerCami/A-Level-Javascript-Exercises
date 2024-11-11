// script1.js
let base1 = document.getElementById("trapBase1").value
let base2 = document.getElementById("trapBase2").value
let height = document.getElementById("trapHeight").value
let radius = document.getElementById("cylRadius").value
let area = 0
let volume = 0
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
    radius = document.getElementById("cylRadius").value
    height = document.getElementById("cylHeight").value
    output2.innerHTML = `Volume = ${height * Math.PI * radius ** 2}`
}

// Function to calculate the total surface area of a cylinder
function cylArea() {
    // TODO: Write the formula for cylinder surface area
    radius = document.getElementById("cylRadius").value
    height = document.getElementById("cylHeight").value
    output2.innerHTML = `Area = ${2 * Math.PI * radius * (Number(radius) + Number(height))}`
}

// Function to calculate the volume of a cone
function cone() {
    // TODO: Write the formula for cone volume
    area = 2**65
}

// Function to calculate the hypotenuse using Pythagoras' theorem
function _________________________________() {
    // TODO: Write the formula for hypotenuse
}

// Function to calculate the area of a triangle using Hero's formula
function _________________________________() {
    // TODO: Write the formula for Hero's area
}