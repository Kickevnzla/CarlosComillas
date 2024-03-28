import Button from '../Button';
import Container from '../Container';
import styles from './styles/AboutMeStyled.module.scss';
import { FotoComillas2024 } from '../../images';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

function AboutMe() {
	const [ref, isInView] = useInView();
	const controls = useAnimation();

	const imageVariants = {
		visible: {
			opacity: 1,
			scale: [1, 1.1, 1],
			transition: { delay: 0.5, duration: 0.8 },
			filter: ['grayscale(100%)', 'grayscale(0)']
		},
		hidden: { scale: 1, filter: 'grayscale(100%)' },
		hover: { scale: 1.1, transition: { duration: 0.5 } }
	};

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [controls, isInView]);

	return (
		<section id='aboutMe' className={styles.aboutMeContainer}>
			<Container>
				<div className={styles.aboutMe}>
					<div className={styles.aboutMeContent}>
						<div className={styles.aboutMeText}>
							<h1>SOY CARLOS RODRÍGUEZ</h1>
							<p className={styles.aboutMe}>
								Licenciado en Artes mención Diseño Gráfico, con más de 15 años
								de experiencia en la creación de marcas gráficas, asesoría e
								implementación de identidad visual y diseño de piezas para
								sitios web, eCommerce y redes sociales, así como fotografía de
								productos para medios digitales.
							</p>
						</div>
						<div className={styles.aboutMeImg}>
							<motion.img
								ref={ref}
								animate={controls}
								variants={imageVariants}
								initial='hidden'
								whileHover='hover'
								src={FotoComillas2024}
								alt='Foto Carlos Rodríguez'
							/>
						</div>
					</div>
					<Button
						text='MI LINKEDIN'
						color='primary'
						hover='color'
						link='https://www.linkedin.com/in/carloscomillas/'
					/>
				</div>
			</Container>
		</section>
	);
}

export default AboutMe;
