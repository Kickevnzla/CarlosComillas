import Container from '../Container';
import styles from './styles/BoostYourBrandStyled.module.scss';
import Button from '../Button';

function BoostYourBrand() {
	return (
		<div className={styles.boostYourBrandContainer}>
			<Container>
				<div className={styles.boostYourBrand}>
					<h3>DISEÑO GRÁFICO | LOGOS | ASESORÍA</h3>
					<h2>POTENCIA TU MARCA</h2>
					<p className={styles.boostYourBrandP}>
						Te ofrezco las herramientas para que puedas darle fuerza a tu marca
						y empezar a comunicar con mayor impacto tu propuesta de valor.
					</p>
					<Button
						text='QUIERO POTENCIAR MI MARCA'
						color='primary'
						hover='color'
					/>
				</div>
			</Container>
		</div>
	);
}

export default BoostYourBrand;
