// Copyright (c) 2022 Andre Deveau All rights reserved
//
// Created by: Andre Deveau
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit3-04-JS/sw.js", {
    scope: "/ICS20-Unit3-04-JS/",
  })
}

/**
 * This function displays an alert.
 */
function enterClicked() {
  //input
  const fahrenheit = parseInt(document.getElementById("fahrenheit").value)

  //process
  const celsius = ((fahrenheit - 32) * 5) / 9

  //output
  document.getElementById("fahrenheit-converted-to-celsius").innerHTML =
    "This the the temperature in celsius: " + celsius.toFixed(2) + "cm³"
}
