import App from './src/App';
import { AppIcon } from './icon';

interface Settings {
	language: 'en';
}

export const path = '/npwd_BigDaddy_Weather';
export default (settings: Settings) => ({
	id: 'npwd_BigDaddy_Weather',
	path,
	nameLocale: 'Weather',
	color: '#fff',
	backgroundColor: '#333',
	icon: AppIcon,
	app: App,
});
