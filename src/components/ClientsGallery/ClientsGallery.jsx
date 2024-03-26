import styles from './styles/ClientsGalleryStyled.module.scss';
import Container from '../Container';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import {
	LogoAfiko,
	LogoAngelMusicEvents,
	LogoBSG,
	LogoBucare,
	LogoDTJ,
	LogoCaminoAlSer,
	LogoByGaby,
	LogoHey,
	LogoHolyDonas,
	LogoLucchy,
	LogoTasty,
	LogoUCPL,
	AplicacionAfiko,
	AplicacionAngelMusicEvents,
	AplicacionBSG,
	AplicacionBucare,
	AplicacionByGaby,
	AplicacionCaminoAlSer,
	AplicacionDTJ,
	AplicacionHey,
	AplicacionHolyDonas,
	AplicacionLucchy,
	AplicacionTasty,
	AplicacionUCPL
} from '../../images';

const logos = [
	{ id: 1, logo: LogoAfiko, aplication: AplicacionAfiko },
	{
		id: 2,
		logo: LogoAngelMusicEvents,
		aplication: AplicacionAngelMusicEvents
	},
	{ id: 3, logo: LogoBSG, aplication: AplicacionBSG },
	{ id: 4, logo: LogoBucare, aplication: AplicacionBucare },
	{ id: 5, logo: LogoDTJ, aplication: AplicacionDTJ },
	{ id: 6, logo: LogoCaminoAlSer, aplication: AplicacionCaminoAlSer },
	{ id: 7, logo: LogoByGaby, aplication: AplicacionByGaby },
	{ id: 8, logo: LogoHey, aplication: AplicacionHey },
	{ id: 9, logo: LogoHolyDonas, aplication: AplicacionHolyDonas },
	{ id: 10, logo: LogoLucchy, aplication: AplicacionLucchy },
	{ id: 11, logo: LogoTasty, aplication: AplicacionTasty },
	{ id: 12, logo: LogoUCPL, aplication: AplicacionUCPL }
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
