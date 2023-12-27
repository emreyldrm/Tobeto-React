import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import AddProduct from './pages/AddProduct/AddProduct';

function App() {
  return (
		<>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/product-detail/:id" element={<ProductDetail />}></Route>
					<Route path="/add-product" element={<AddProduct />}></Route>
					<Route path="*" element={<p>Not Found</p>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;
