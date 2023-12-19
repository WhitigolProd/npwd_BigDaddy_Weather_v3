export type validWeather =
  | 'BLIZZARD'
  | 'CLEAR'
  | 'CLEARING'
  | 'CLOUDS'
  | 'EXTRASUNNY'
  | 'FOGGY'
  | 'HALLOWEEN'
  | 'NEUTRAL'
  | 'OVERCAST'
  | 'RAIN'
  | 'SMOG'
  | 'SNOW'
  | 'SNOWLIGHT'
  | 'THUNDER'
  | 'XMAS';

export type WeatherExport = {
  weather: validWeather;
  temp: number;
};
