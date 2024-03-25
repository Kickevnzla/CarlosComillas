import Container from '../Container';
import styles from './styles/MainBannerStyled.module.scss';
import carlosImage from '../../images/FotoCarlos.png';
import LinkedinLogo from '../../images/ICONO_LINKEDIN.svg?react';
import InstagramLogo from '../../images/ICONO_INSTAGRAM.svg?react';
import BehanceLogo from '../../images/ICONO_BEHANCE.svg?react';

function MainBanner() {
	return (
		<div className={styles.mainBanner}>
			<Container>
				<div className={styles.mainBannerContainer}>
					<div className={styles.carlosImage}>
						<img src={carlosImage} alt='Foto Carlos Comillas' />
					</div>

					<div className={styles.mainBannerContent}>
						<h1>
							HOLA, SOY
							<br />
							CARLOS COMILLAS
						</h1>
						<p>
							Y aquí te mostraré un poco más de lo que hago como diseñador
							gráfico y asesor de emprendedores en identidad visual y marca
							gráfica.
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
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default MainBanner;
