import Container from '../../Container';
import NavBar from '../../NavBar';

const HomeLayout = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
		</>
	);
};

export default HomeLayout;
