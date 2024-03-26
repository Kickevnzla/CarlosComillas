import AboutMe from '../components/AboutMe';
import BoostYourBrand from '../components/BoostYourBrand';
import ClientsGallery from '../components/ClientsGallery';
import ContactForm from '../components/ContactForm';
import { HomeLayout } from '../components/Layouts';
import MainBanner from '../components/MainBanner';
import MidBanner from '../components/MidBanner';
import ServicesBanner from '../components/ServicesBanner';

function HomePage() {
	return (
		<>
			<HomeLayout>
				<MainBanner />
				<BoostYourBrand />
				<MidBanner
					color='gray'
					text='UNA MARCA CON BUEN DISEÑO, IMPACTA Y FIDELIZA MUCHO MÁS.'
				/>
				<ServicesBanner />
				<AboutMe />
				<MidBanner
					color='transparent'
					text='EL LOGO ES EL IDENTIFICADOR DE LA MARCA, SI NO ES BUENO, LA MARCA SE PIERDE.'
				/>
				<ClientsGallery />
				<ContactForm />
			</HomeLayout>
		</>
	);
}

export default HomePage;
