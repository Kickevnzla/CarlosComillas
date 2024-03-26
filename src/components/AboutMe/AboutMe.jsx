import Button from '../Button';
import Container from '../Container';
import styles from './styles/AboutMeStyled.module.scss';

function AboutMe() {
	return (
		<div className={styles.aboutMeContainer}>
			<Container>
				<div className={styles.aboutMe}>
					<h1>SOY CARLOS RODRÍGUEZ</h1>
					<p className={styles.aboutMe}>
						Como diseñador gráfico tengo más de 15 años de experiencia en la
						creación de marcas gráficas, asesoría e implementación de identidad
						visual y diseño de piezas para sitios web, eCommerce y redes
						sociales.
					</p>
					<Button text='MI PERFIL PROFESIONAL' color='primary' hover='color' />
				</div>
			</Container>
		</div>
	);
}

export default AboutMe;
