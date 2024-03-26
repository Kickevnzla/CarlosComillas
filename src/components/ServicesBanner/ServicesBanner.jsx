import Button from '../Button';
import Container from '../Container';
import styles from './styles/ServicesBannerStyled.module.scss';
import Diseño from '../../images/ICONO_DISENO.svg?react';
import Asesoria from '../../images/ICONO_ASESORIA.svg?react';

function ServicesBanner() {
	return (
		<div className={styles.servicesBannerContainer}>
			<Container>
				<div className={styles.servicesBanner}>
					<h1>¿QUÉ SERVICIOS OFREZCO?</h1>
					<div className={styles.servicesContainer}>
						<div className={styles.service}>
							<Diseño className={styles.serviceIcon} />
							<h3>DISEÑO GRÁFICO</h3>
							<p>
								Diseño de identidad visual, logotipos y branding, páginas web,
								landing pages y material impreso o POP.
							</p>
							<Button text='COTIZAR DISEÑO' color='secundary' hover='color' />
						</div>
						<div className={styles.service}>
							<Asesoria className={styles.serviceIcon} />
							<h3>ASESORÍA</h3>
							<p>
								Te ayudo a aclarar el camino para desarrollar de forma adecuada
								la identidad de tu marca o producto.
							</p>
							<Button text='QUIERO ASESORÍA' color='secundary' hover='color' />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default ServicesBanner;
