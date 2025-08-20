import { Header } from './components/Header';
import { songs } from './utilities/mock';
import { Main } from './components/Main';

function App() {
	return (
		<>
			<Header />
			<Main media={songs} />
		</>
	);
}

export default App;
