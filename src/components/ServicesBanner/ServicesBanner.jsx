import Button from '../Button';
import Container from '../Container';
import styles from './styles/ServicesBannerStyled.module.scss';
import IconoDiseno from '../../images/Iconos/ICONO_DISENO.svg?react';
import IconoAsesoria from '../../images/Iconos/ICONO_ASESORIA.svg?react';

function ServicesBanner() {
	return (
		<section id='services' className={styles.servicesBannerContainer}>
			<Container>
				<div className={styles.servicesBanner}>
					<h1>MIS SERVICIOS</h1>
					<div className={styles.servicesContainer}>
						<div className={styles.service}>
							<IconoDiseno className={styles.serviceIcon} />
							<h3>DISEÑO GRÁFICO</h3>
							<p>
								Diseño de identidad visual, logotipos y branding, páginas web,
								landing pages y material impreso o POP.
							</p>
							<Button
								text='COTIZAR DISEÑO'
								color='secundary'
								hover='color'
								link='https://wa.me/message/TDROOFLRB2OCH1'
							/>
						</div>
						<div className={styles.service}>
							<IconoAsesoria className={styles.serviceIcon} />
							<h3>ASESORÍA</h3>
							<p>
								Te ayudo a aclarar el camino para desarrollar de forma adecuada
								la identidad de tu marca o producto.
							</p>
							<Button
								text='QUIERO ASESORÍA'
								color='secundary'
								hover='color'
								link='https://wa.me/message/TDROOFLRB2OCH1'
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default ServicesBanner;
