import ImgBlizzard from '../img/BLIZZARD.png';
import ImgClearing from '../img/CLEARING.png';
import ImgClouds from '../img/CLOUDS.png';
import ImgExtrasunny from '../img/EXTRASUNNY.png';
import ImgHalloween from '../img/HALLOWEEN.png';
import ImgOvercast from '../img/OVERCAST.png';
import ImgRain from '../img/RAIN.png';
import ImgSmog from '../img/SMOG.png';
import ImgSnow from '../img/SNOW.png';
import ImgSnowlight from '../img/SNOWLIGHT.png';
import ImgThunder from '../img/THUNDER.png';
import ImgXmas from '../img/XMAS.png';
import { validWeather } from '../types/validWeather';

export default function selectWeatherImage(type: validWeather) {
  switch (type) {
    case 'BLIZZARD':
      return ImgBlizzard;
    case 'CLEAR':
      return ImgExtrasunny;
    case 'CLEARING':
      return ImgClearing;
    case 'CLOUDS':
      return ImgClouds;
    case 'EXTRASUNNY':
      return ImgExtrasunny;
    case 'FOGGY':
      return ImgSmog;
    case 'HALLOWEEN':
      return ImgHalloween;
    case 'NEUTRAL':
      return ImgExtrasunny;
    case 'OVERCAST':
      return ImgOvercast;
    case 'RAIN':
      return ImgRain;
    case 'SMOG':
      return ImgSmog;
    case 'SNOW':
      return ImgSnow;
    case 'SNOWLIGHT':
      return ImgSnowlight;
    case 'THUNDER':
      return ImgThunder;
    case 'XMAS':
      return ImgXmas;
  }
}
