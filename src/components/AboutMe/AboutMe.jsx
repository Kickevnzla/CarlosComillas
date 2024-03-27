import Button from '../Button';
import Container from '../Container';
import styles from './styles/AboutMeStyled.module.scss';
import { FotoComillas2024 } from '../../images';

function AboutMe() {
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
							<img src={FotoComillas2024} alt='Foto Carlos Rodríguez' />
						</div>
					</div>
					<Button
						text='MI PERFIL PROFESIONAL'
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
