import Container from '../Container';
import styles from './styles/MainBannerStyled.module.scss';
import { motion } from 'framer-motion';
import carlosImage from '../../images/FotoCarlos.png';
import LinkedinLogo from '../../images/ICONO_LINKEDIN.svg?react';
import InstagramLogo from '../../images/ICONO_INSTAGRAM.svg?react';
import BehanceLogo from '../../images/ICONO_BEHANCE.svg?react';
import WhatsappLogo from '../../images/ICONO_WHATSAPP.svg?react';

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
								<LinkedinLogo className={styles.socialMediaIcon} />
							</a>
							<a href='#'>
								<InstagramLogo className={styles.socialMediaIcon} />
							</a>
							<a href='#'>
								<BehanceLogo className={styles.socialMediaIcon} />
							</a>
							<a href='#'>
								<WhatsappLogo className={styles.socialMediaIcon} />
							</a>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default MainBanner;
