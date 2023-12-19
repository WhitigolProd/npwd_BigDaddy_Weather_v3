import React, { useEffect, useState } from 'react';

import { i18n } from 'i18next';
import { Theme, Paper, StyledEngineProvider, Icon } from '@mui/material';
import Header from './components/Header';
import styled from '@emotion/styled';
import ThemeSwitchProvider from './ThemeSwitchProvider';
import './globals.css';
import { NuiProvider, useNuiEvent } from 'fivem-nui-react-lib';
import { useWeather } from './hooks/useWeather';
import { RecoilRoot, useRecoilState } from 'recoil';
import type { WeatherExport } from './types/validWeather';
import selectWeatherImage from './utils/selectWeatherImage';
import weatherText from './utils/weatherText';

const Container = styled(Paper)`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-height: 100%;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1.5rem;
  overflow: auto;
`;

interface AppProps {
  theme: Theme;
  i18n: i18n;
  settings: any;
}

function App(props: AppProps) {
  const { weather, setWeather } = useWeather();
  useNuiEvent('npwd_BigDaddy_Weather', 'forecast', setWeather);

  const weatherItems = weather.map((item, index) => {
    return (
      <div
        key={index}
        className="flex flex-row items-center gap-3 w-full h-full bg-black/50 rounded-2xl p-4"
      >
        <img src={selectWeatherImage(item.weather)} className="w-16 h-16" />
        <span className="text-4xl mr-2">•</span>
        <div className="flex flex-col justify-center gap-1">
          <span className="text-3xl font-extrabold">{item.temp}&deg;</span>
          <span className="text-lg font-semibold">{weatherText(item.weather)}</span>
        </div>
      </div>
    );
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeSwitchProvider mode="dark">
        <Container square elevation={0} className="bg-gradient-to-br from-blue-500 to-blue-600">
          <Header>Big Daddy's Forecast</Header>
          <Content>
            <div className="flex flex-col items-center justify-center w-full h-full gap-2">
              {weatherItems ? weatherItems : <Icon className="text-6xl animate-spin">refresh</Icon>}
            </div>
          </Content>
        </Container>
      </ThemeSwitchProvider>
    </StyledEngineProvider>
  );
}

export default function WithProviders(props: AppProps) {
  return <App {...props} />;
}
