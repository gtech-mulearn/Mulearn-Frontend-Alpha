import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Layout from "./components/layout";


const App: React.FC = () => {
	return (
		<Router>
			{/* <Toaster position="bottom-center" reverseOrder={false} /> */}
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
				<Route path="/" element={<Home />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="/*" element={<Navigate to="/404" replace />} />
			</Routes>
		</Router>
	);
};

export default App;
