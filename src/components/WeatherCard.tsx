import React from 'react';
import { chooseWeatherImage, chooseWeatherText } from '../utils/getWeatherData';
import { ValidWeather } from '../types/weather';

interface Props {
	weather: ValidWeather;
	temp: number;
}

export default function WeatherCard(props: Props) {
	return (
		<div className="p-3 flex flex-row gap-10 items-center w-full h-full bg-black/30 rounded-lg">
			<div className="flex items-center">
				<img
					src={chooseWeatherImage(props.weather)}
					alt={props.weather}
					className="w-16 h-16"
				/>
			</div>
			<div className="text-3xl">•</div>
			<div className="flex flex-col gap-2">
				<span className="text-3xl font-bold">{props.temp}°</span>
				<span className="text-xl">{chooseWeatherText(props.weather)}</span>
			</div>
		</div>
	);
}
