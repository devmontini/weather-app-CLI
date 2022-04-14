import axios from "axios";

import {
  GET_COUNTRY,
  GET_SEARCH,
  GET_DATA,
  GET_POLLUTION,
  GET_SUNRISE,
} from "./types";

// import * as functions from "firebase-functions";
// const apiKey = require("stripe")(functions.config().api.key);
// const functions = require("firebase-functions");
// const config = functions.config();
// const apiKey = config.api.key;
// const apiKey = process.env.REACT_APP_weatherKey;

export function getCountry(lat, lon) {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f6f080f7e7481092784c339140a35c4d&units=metric`
      );
      return dispatch({
        type: GET_COUNTRY,
        payload: res.data,
      });
    } catch (error) {
      return alert(`Please enbale 
      location for weather`);
    }
  };
}

export function getCountryData(name) {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=f6f080f7e7481092784c339140a35c4d&units=metric`
      );

      return dispatch({
        type: GET_DATA,
        payload: res.data,
      });
    } catch (error) {
      return alert(`The API is not aviable. Please try later`);
    }
  };
}

export function getSearch(name) {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=f6f080f7e7481092784c339140a35c4d&units=metric`
      );
      return dispatch({
        type: GET_SEARCH,
        payload: res.data,
      });
    } catch (error) {
      if (!name || name.length === 0) {
        return alert(`Name is empty `);
      }
      return alert(
        `Location "${name}" not found!
        The input must be a: 
        -Strings 
        -Real names `
      );
    }
  };
}

export function getPollution(lat, lon) {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5//air_pollution?lat=${lat}&lon=${lon}&appid=f6f080f7e7481092784c339140a35c4d&units=metric`
      );
      return dispatch({
        type: GET_POLLUTION,
        payload: res.data,
      });
    } catch (error) {
      return alert(`The pollution its not available now`);
    }
  };
}

export function getSunrise(lat, lon) {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}`
      );
      return dispatch({
        type: GET_SUNRISE,
        payload: res.data,
      });
    } catch (error) {
      return alert(`The sunrise data its not available now`);
    }
  };
}
