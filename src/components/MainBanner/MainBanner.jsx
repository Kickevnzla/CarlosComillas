import Container from '../Container';
import styles from './styles/MainBannerStyled.module.scss';
import { motion } from 'framer-motion';
import carlosImage from '../../images/FotoCarlos.png';
import IconoLinkedin from '../../images/Iconos/ICONO_LINKEDIN.svg?react';
import IconoInstagram from '../../images/Iconos/ICONO_INSTAGRAM.svg?react';
import IconoBehance from '../../images/Iconos/ICONO_BEHANCE.svg?react';
import IconoWhatsapp from '../../images/Iconos/ICONO_WHATSAPP.svg?react';
import LogoComillas from '../../images/Iconos/ICONO_COMILLAS.svg?react';

function MainBanner() {
	const text = ' ESTA ES LA WEB COMILLAS'.split('');

	return (
		<section id='mainBanner' className={styles.mainBanner}>
			<div className={styles.mainBannerContainer}>
				<a
					href='https://www.instagram.com/comillasestudio/'
					target='_blank'
					rel='noreferrer'
					aria-label='Link a Instagram de Comillas Estudio'
				>
					<LogoComillas className={styles.logoComillas} />
				</a>
				<div className={styles.mainBannerContent}>
					<div>
						{text.map((el, i) => (
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									delay: i / 25
								}}
								key={i}
							>
								{el}
							</motion.span>
						))}
					</div>
					<p>
						Aquí les mostraré un poco más de lo que hago como diseñador gráfico
						y asesor de emprendedores en identidad visual y marca gráfica.
					</p>
					<div className={styles.socialMedia}>
						<a
							href='https://www.linkedin.com/in/carloscomillas/'
							target='_blank'
							rel='noreferrer'
							aria-label='Link a Linkedin de Carlos Comillas'
						>
							<IconoLinkedin className={styles.socialMediaIcon} />
						</a>
						<a
							href='https://www.instagram.com/comillasestudio/'
							target='_blank'
							rel='noreferrer'
							aria-label='Link a Instagram de Comillas Estudio'
						>
							<IconoInstagram className={styles.socialMediaIcon} />
						</a>
						<a
							href='https://www.behance.net/carloscomillas'
							target='_blank'
							rel='noreferrer'
							aria-label='Link a Behance de Carlos Comillas'
						>
							<IconoBehance className={styles.socialMediaIcon} />
						</a>
						<a
							href='https://wa.me/message/TDROOFLRB2OCH1'
							target='_blank'
							rel='noreferrer'
							aria-label='Link a Whatsapp de Carlos Comillas'
						>
							<IconoWhatsapp className={styles.socialMediaIcon} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MainBanner;
