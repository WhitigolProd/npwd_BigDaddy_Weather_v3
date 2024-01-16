import { ValidWeather } from '../types/weather';

import Blizzard from '../img/BLIZZARD.png';
import Clear from '../img/EXTRASUNNY.png';
import Clearing from '../img/CLEARING.png';
import Clouds from '../img/CLOUDS.png';
import ExtraSunny from '../img/EXTRASUNNY.png';
import Foggy from '../img/SMOG.png';
import Halloween from '../img/HALLOWEEN.png';
import Neutral from '../img/CLOUDS.png';
import Overcast from '../img/OVERCAST.png';
import Rain from '../img/RAIN.png';
import Smog from '../img/SMOG.png';
import Snow from '../img/SNOW.png';
import SnowLight from '../img/SNOWLIGHT.png';
import Thunder from '../img/THUNDER.png';
import Xmas from '../img/XMAS.png';

export function chooseWeatherImage(weather: ValidWeather) {
	switch (weather) {
		case 'BLIZZARD':
			return Blizzard;
		case 'CLEAR':
			return Clear;
		case 'CLEARING':
			return Clearing;
		case 'CLOUDS':
			return Clouds;
		case 'EXTRASUNNY':
			return ExtraSunny;
		case 'FOGGY':
			return Foggy;
		case 'HALLOWEEN':
			return Halloween;
		case 'NEUTRAL':
			return Neutral;
		case 'OVERCAST':
			return Overcast;
		case 'RAIN':
			return Rain;
		case 'SMOG':
			return Smog;
		case 'SNOW':
			return Snow;
		case 'SNOWLIGHT':
			return SnowLight;
		case 'THUNDER':
			return Thunder;
		case 'XMAS':
			return Xmas;
		default:
			return Clouds; // Default to clouds if weather is not found
	}
}

export function chooseWeatherText(weather: ValidWeather) {
	switch (weather) {
		case 'BLIZZARD':
			return 'Heavy Snow';
		case 'CLEAR':
			return 'Mostly Sunny';
		case 'CLEARING':
			return 'Light Rain';
		case 'CLOUDS':
			return 'Mostly Cloudy';
		case 'EXTRASUNNY':
			return 'Extra Sunny';
		case 'FOGGY':
			return 'Foggy';
		case 'HALLOWEEN':
			return 'Halloween';
		case 'NEUTRAL':
			return 'Neutral';
		case 'OVERCAST':
			return 'Overcast';
		case 'RAIN':
			return 'Rain';
		case 'SMOG':
			return 'Smog';
		case 'SNOW':
			return 'Snow';
		case 'SNOWLIGHT':
			return 'Light Snow';
		case 'THUNDER':
			return 'Thunder Storms';
		case 'XMAS':
			return 'Snow';
		default:
			return 'Clouds'; // Default to clouds if weather is not found
	}
}
