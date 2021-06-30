import Navbar from '../components/navbar';
import Footer from '../components/footer';

function DefaultLayout({ children }) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}

export default DefaultLayout;
