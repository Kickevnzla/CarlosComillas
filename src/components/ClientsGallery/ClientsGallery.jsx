import Container from '../Container';
import styles from './styles/ClientsGalleryStyled.module.scss';
import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
	Dot
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import logoAfiko from '../../images/Logos-Clientes/LogoAfiko.jpg';
import logoAngelMusicEvents from '../../images/Logos-Clientes/LogoAngelMusicEvents.jpg';
import logoBSG from '../../images/Logos-Clientes/LogoBSG.jpg';
import logoBucare from '../../images/Logos-Clientes/LogoBucare.jpg';
import logoByGaby from '../../images/Logos-Clientes/LogoByGaby.jpg';
import logoCaminoAlSer from '../../images/Logos-Clientes/LogoCaminoAlSer.jpg';
import logoDTJ from '../../images/Logos-Clientes/LogoDTJ.jpg';
import logoHey from '../../images/Logos-Clientes/LogoHey.jpg';
import logoHolyDonas from '../../images/Logos-Clientes/LogoHolyDonas.jpg';
import logoLucchy from '../../images/Logos-Clientes/LogoLucchy.jpg';
import logoTasty from '../../images/Logos-Clientes/LogoTasty.jpg';
import logoUCPL from '../../images/Logos-Clientes/LogoUCPL.jpg';

import aplicationAfiko from '../../images/Aplicaciones-Clientes/AplicacionAfiko.jpg';
import aplicationAngelMusicEvents from '../../images/Aplicaciones-Clientes/AplicacionAngelMusicEvents.jpg';
import aplicationBSG from '../../images/Aplicaciones-Clientes/AplicacionBSG.jpg';
import aplicationBucare from '../../images/Aplicaciones-Clientes/AplicacionBucare.jpg';
import aplicationByGaby from '../../images/Aplicaciones-Clientes/AplicacionByGaby.jpg';
import aplicationCaminoAlSer from '../../images/Aplicaciones-Clientes/AplicacionCaminoAlSer.jpg';
import aplicationDTJ from '../../images/Aplicaciones-Clientes/AplicacionDTJ.jpg';
import aplicationHey from '../../images/Aplicaciones-Clientes/AplicacionHey.jpg';
import aplicationHolyDonas from '../../images/Aplicaciones-Clientes/AplicacionHolyDonas.jpg';
import aplicationLucchy from '../../images/Aplicaciones-Clientes/AplicacionLucchy.jpg';
import aplicationTasty from '../../images/Aplicaciones-Clientes/AplicacionTasty.jpg';
import aplicationUCPL from '../../images/Aplicaciones-Clientes/AplicacionUCPL.jpg';

const logos = [
	{ id: 1, logo: logoAfiko, aplication: aplicationAfiko },
	{
		id: 2,
		logo: logoAngelMusicEvents,
		aplication: aplicationAngelMusicEvents
	},
	{ id: 3, logo: logoBSG, aplication: aplicationBSG },
	{ id: 4, logo: logoBucare, aplication: aplicationBucare },
	{ id: 5, logo: logoDTJ, aplication: aplicationDTJ },
	{ id: 6, logo: logoCaminoAlSer, aplication: aplicationCaminoAlSer },
	{ id: 7, logo: logoByGaby, aplication: aplicationByGaby },
	{ id: 8, logo: logoHey, aplication: aplicationHey },
	{ id: 9, logo: logoHolyDonas, aplication: aplicationHolyDonas },
	{ id: 10, logo: logoLucchy, aplication: aplicationLucchy },
	{ id: 11, logo: logoTasty, aplication: aplicationTasty },
	{ id: 12, logo: logoUCPL, aplication: aplicationUCPL }
];

function ClientsGallery() {
	const [isVisible, setIsVisible] = useState(false);
	const [tempImage, setTempImage] = useState('');

	return (
		<div className={styles.clientsGalleryContainer}>
			<Container>
				<div className={styles.clientsGallery}>
					<div className={styles.galleryTitle}>
						<h1>DISEÑO DE IDENTIDAD VISUAL</h1>
						<h3>MARCAS Y LOGOS CON SELLO COMILLAS</h3>
					</div>
					<CarouselProvider
						naturalSlideWidth={400}
						naturalSlideHeight={400}
						totalSlides={2}
						isIntrinsicHeight={true}
						infinite={true}
						visibleSlides={1}
						isPlaying={true}
						interval={6000}
						className={styles.carousel}
					>
						<div className={styles.carouselContent}>
							<ButtonBack className={styles.arrow}>
								<FaArrowCircleLeft />
							</ButtonBack>
							<Slider className={styles.slider}>
								<Slide className={styles.slide} index={0}>
									<div className={styles.gridContainer}>
										<div className={styles.clientsLogos}>
											{logos.map((item, index) => (
												<div
													key={index}
													className={styles.clientLogo}
													onClick={() => {
														setIsVisible(true);
														setTempImage(item.aplication);
													}}
												>
													<img src={item.logo} />
												</div>
											))}
										</div>
									</div>
								</Slide>
							</Slider>

							<ButtonNext className={styles.arrow}>
								<FaArrowCircleRight />
							</ButtonNext>
						</div>
					</CarouselProvider>
				</div>
			</Container>
			<AnimatePresence initial={false}>
				{isVisible && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={styles.clientAplicationContainer}
					>
						<img src={tempImage} />

						<IoClose
							className={styles.closeIcon}
							onClick={() => setIsVisible(false)}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default ClientsGallery;
