import { create } from 'zustand';
import { validWeather } from '../types/validWeather';

type WeatherExport = {
  weather: validWeather;
  temp: number;
};

interface WeatherState {
  weather: WeatherExport[];
  setWeather: (weather: WeatherExport[]) => void;
}

export const useWeather = create<WeatherState>((set) => ({
  weather: [
    {
      weather: 'EXTRASUNNY',
      temp: 85,
    },
    {
      weather: 'RAIN',
      temp: 65,
    },
    {
      weather: 'CLOUDS',
      temp: 75,
    },
    {
      weather: 'SNOW',
      temp: 32,
    },
    {
      weather: 'FOGGY',
      temp: 60,
    },
    {
      weather: 'THUNDER',
      temp: 70,
    },
  ],
  setWeather: (weather) => set({ weather }),
}));
