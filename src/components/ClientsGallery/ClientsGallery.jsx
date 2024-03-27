import styles from './styles/ClientsGalleryStyled.module.scss';
import Container from '../Container';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import clients from '../../assets/clients.json';
import Button from '../Button';
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function ClientsGallery() {
	const [isVisible, setIsVisible] = useState(false);
	const [tempImage, setTempImage] = useState('');

	return (
		<section id='portfolio' className={styles.clientsGalleryContainer}>
			<Container>
				<div className={styles.clientsGallery}>
					<div className={styles.galleryTitle}>
						<h1>PORTAFOLIO</h1>
						<h3>MARCAS Y LOGOS CON SELLO COMILLAS</h3>
					</div>
					<CarouselProvider
						naturalSlideWidth={400}
						naturalSlideHeight={400}
						totalSlides={3}
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
								{clients.slides.map((slide, index) => (
									<Slide key={index} className={styles.slide} index={index}>
										<div className={styles.gridContainer}>
											<div className={styles.clientsLogos}>
												{slide.map((client, index) => (
													<div
														key={index}
														className={styles.clientLogo}
														onClick={() => {
															setIsVisible(true);
															setTempImage(client.aplicacion);
														}}
													>
														<img src={client.logo} />
													</div>
												))}
											</div>
										</div>
									</Slide>
								))}
							</Slider>

							<ButtonNext className={styles.arrow}>
								<FaArrowCircleRight />
							</ButtonNext>
						</div>
					</CarouselProvider>
					<Button
						text='VER MÁS LOGOS'
						color='primary'
						hover='color'
						link='https://www.instagram.com/comillasestudio/'
					/>
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
						<div>
							<img src={tempImage} />

							<IoClose
								className={styles.closeIcon}
								onClick={() => setIsVisible(false)}
							/>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}

export default ClientsGallery;
