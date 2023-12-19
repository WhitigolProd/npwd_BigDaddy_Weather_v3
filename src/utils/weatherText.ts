import { validWeather } from '../types/validWeather';

export default function weatherText(weather: validWeather) {
  switch (weather) {
    case 'BLIZZARD':
      return 'Blizzard';
    case 'CLEAR':
      return 'Clear';
    case 'CLEARING':
      return 'Clearing';
    case 'CLOUDS':
      return 'Cloudy';
    case 'EXTRASUNNY':
      return 'Sunny';
    case 'FOGGY':
      return 'Foggy';
    case 'HALLOWEEN':
      return 'Halloween';
    case 'NEUTRAL':
      return 'Neutral';
    case 'OVERCAST':
      return 'Overcast';
    case 'RAIN':
      return 'Rainy';
    case 'SMOG':
      return 'Smog';
    case 'SNOW':
      return 'Snowy';
    case 'SNOWLIGHT':
      return 'Snowlight';
    case 'THUNDER':
      return 'Thunder';
    case 'XMAS':
      return 'Christmas';
    default:
      return 'Unknown';
  }
}
