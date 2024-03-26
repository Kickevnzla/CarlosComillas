import Container from '../Container';
import styles from './styles/MainBannerStyled.module.scss';
import { motion } from 'framer-motion';
import carlosImage from '../../images/FotoCarlos.png';
import IconoLinkedin from '../../images/Iconos/ICONO_LINKEDIN.svg?react';
import IconoInstagram from '../../images/Iconos/ICONO_INSTAGRAM.svg?react';
import IconoBehance from '../../images/Iconos/ICONO_BEHANCE.svg?react';
import IconoWhatsapp from '../../images/Iconos/ICONO_WHATSAPP.svg?react';

function MainBanner() {
	const text = 'BIENVENIDOS A LA WEB COMILLAS'.split('');

	return (
		<div className={styles.mainBanner}>
			<Container>
				<div className={styles.mainBannerContainer}>
					<div className={styles.carlosImage}>
						<img src={carlosImage} alt='Foto Carlos Comillas' />
					</div>

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
							Aquí te mostraré un poco más de lo que hago como diseñador gráfico
							y asesor de emprendedores en identidad visual y marca gráfica.
						</p>
						<div className={styles.socialMedia}>
							<a href='#'>
								<IconoLinkedin className={styles.socialMediaIcon} />
							</a>
							<a href='#'>
								<IconoInstagram className={styles.socialMediaIcon} />
							</a>
							<a href='#'>
								<IconoBehance className={styles.socialMediaIcon} />
							</a>
							<a href='#'>
								<IconoWhatsapp className={styles.socialMediaIcon} />
							</a>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default MainBanner;
