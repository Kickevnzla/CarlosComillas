import Container from '../Container';
import styles from './styles/BoostYourBrandStyled.module.scss';
import Button from '../Button';

function BoostYourBrand() {
	return (
		<section className={styles.boostYourBrandContainer}>
			<Container>
				<div className={styles.boostYourBrand}>
					<h3>DISEÑO GRÁFICO | LOGOS | ASESORÍA</h3>
					<h1>POTENCIA TU MARCA</h1>
					<p className={styles.boostYourBrandP}>
						Te ofrezco las herramientas para que puedas darle fuerza a tu marca
						y empezar a comunicar con mayor impacto tu propuesta de valor.
					</p>
					<Button
						text='POTENCIAR TU MARCA'
						color='primary'
						hover='color'
						link='https://wa.me/message/TDROOFLRB2OCH1'
					/>
				</div>
			</Container>
		</section>
	);
}

export default BoostYourBrand;
