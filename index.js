//Курс Node.js - Урок 5 ДЗ - задача 5.2 - приложение "Погода в городе"
const readline = require('readline');
const input = readline.createInterface(process.stdin);
require('dotenv').config();

const axios = require('axios');
const params = {
  access_key: "",
  query: "",
}


params.access_key = process.env.myAPIkey;
console.log("Чтобы узнать погоду введите название города или нажмите 'Ctrl+C' для выхода");
input.on('line', (data) => getWeatherInCity(data));


function getWeatherInCity(cityName) {
  
  params.query = cityName;
  axios.get('http://api.weatherstack.com/current', {params})
    .then(response => {
      const apiResponse = response.data;
      console.log(apiResponse);
      console.log("Чтобы узнать погоду введите название города или нажмите 'Ctrl+C' для выхода");
    }).catch(error => {
      console.log(error);
    });

}


