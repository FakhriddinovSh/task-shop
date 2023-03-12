import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import './App.styled.js';
import { GlobalStyles } from './App.styled.js';
import { Home } from './pages/Home/Home';
import { Orders } from './pages/Orders/Orders.js';
import { SingleCard } from './pages/SingleCard/SingleCard.js';

export const App = ({ data }) => {
	const queryClient = new QueryClient();

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<GlobalStyles />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:id" element={<SingleCard />} />
				</Routes>
			</QueryClientProvider>
		</>
	);
};
