import React, { useState } from 'react';

import { i18n } from 'i18next';
import { Theme, Paper, StyledEngineProvider } from '@mui/material';
import Header from './components/Header';
import styled from '@emotion/styled';
import ThemeSwitchProvider from './ThemeSwitchProvider';
import { RecoilRoot } from 'recoil';
import { useNuiEvent } from './hooks/useNuiEvent';
import WeatherCard from './components/WeatherCard';

const Container = styled(Paper)`
	flex: 1;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	max-height: 100%;
	background: linear-gradient(-135deg, #0062ff 0%, #478eff 100%);
	color: white;
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

export function App(props: AppProps) {
	const [nuiData, setNuiData] = useState(null);

	useNuiEvent('w_bd_weather', 'setWeather', (data) => {
		setNuiData(data);
	});

	return (
		<StyledEngineProvider injectFirst>
			<ThemeSwitchProvider mode={props.theme.palette.mode}>
				<Container square elevation={0}>
					<Header>
						<span className="bdFont text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
							Big Daddy Weather
						</span>
					</Header>
					<Content>
						<div className="w-full h-full flex flex-col gap-3 items-center">
							<WeatherCard weather="SNOWLIGHT" temp={69} />
							<WeatherCard weather="CLEAR" temp={69} />
							<WeatherCard weather="CLEARING" temp={69} />
							<WeatherCard weather="OVERCAST" temp={69} />
							<WeatherCard weather="CLEARING" temp={69} />
							<WeatherCard weather="THUNDER" temp={69} />
						</div>
					</Content>
				</Container>
			</ThemeSwitchProvider>
		</StyledEngineProvider>
	);
}

export default function WithProviders(props: AppProps) {
	return (
		<RecoilRoot override key="npwd_BigDaddy_Weather">
			<App {...props} />
		</RecoilRoot>
	);
}
