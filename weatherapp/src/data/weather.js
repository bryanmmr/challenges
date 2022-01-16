import axios from 'axios';

const API_KEY_WEATHER_API = process.env.REACT_APP_WEATHER_API
/* LAT LNG Puno, Peru
const latitude = -15.844288793688836
const longitude = -70.01917734166632
*/
const UNITS = 'metric'
export const weather = async (lat, lng) => {
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=${UNITS}&appid=${API_KEY_WEATHER_API}`)
    return data
}

export const daysOfWeekMap = {
    0: 'SUN', 
    1: 'MON', 
    2: 'TUES', 
    3: 'WED', 
    4: 'THUR', 
    5: 'FRI', 
    6: 'SAT'
  }

export const iconNameToSizeMap = {
      cloudy: { width: 264, height: 166},
      sunny: { width: 208, height: 213},
      stormy: { width: 246, height: 187},
      snowy: { width: 230, height: 196},
      'partly-cloudy': {width: 230, height:209},
      rainy: { width: 160, height: 222},
  }

export const weatherState = {
  'Rain': 'rainy', 
  'Clear': 'sunny', 
  'Clouds': 'cloudy', 
  'Thunderstorm': 'stormy', 
  'Drizzle': 'partly-cloudy', 
  'Snow': 'snowy'
}