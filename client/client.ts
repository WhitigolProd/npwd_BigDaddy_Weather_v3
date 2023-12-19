const exps = global.exports;

setTick(async () => {
  while (true) {
    emitNet('w.npwd_BigDaddy_Weather:RequestWeather', GetPlayerServerId(PlayerId()));
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
});

onNet('w.npwd_BigDaddy_Weather:SendWeather', (weather: any[]) => {
  SendNuiMessage(
    JSON.stringify({
      app: 'npwd_BigDaddy_Weather',
      method: 'forecast',
      data: weather,
    }),
  );
});
