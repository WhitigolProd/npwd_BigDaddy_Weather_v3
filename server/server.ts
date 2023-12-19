type WeatherExport = {
  weather: string;
  temp: number;
};

onNet('w.npwd_BigDaddy_Weather:RequestWeather', (playerId: number) => {
  const forecast: WeatherExport[] = exports['BigDaddy-Weather']['ExportForecast']();

  const weather = forecast.slice(0, 6);

  emitNet('w.npwd_BigDaddy_Weather:SendWeather', playerId, weather);
});
