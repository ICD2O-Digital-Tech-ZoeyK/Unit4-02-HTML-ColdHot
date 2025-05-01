// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
function checkTemperature() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var result = document.getElementById("result");

    if (isNaN(celsius)) {
        result.innerText = "Please enter a valid number.";
    } else if (celsius < 15) {
        result.innerText = "It is cold outside.";
    } else {
        result.innerText = "It is hot outside.";
    }
}
