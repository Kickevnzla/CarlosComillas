import Container from '../Container/Container';
import styles from './styles/FooterStyled.module.scss';
import IconoLinkedin from '../../images/Iconos/ICONO_LINKEDIN.svg?react';
import IconoInstagram from '../../images/Iconos/ICONO_INSTAGRAM.svg?react';
import IconoBehance from '../../images/Iconos/ICONO_BEHANCE.svg?react';
import IconoWhatsapp from '../../images/Iconos/ICONO_WHATSAPP.svg?react';
import IconoEmail from '../../images/Iconos/ICONO_EMAIL.svg?react';

const Footer = () => {
	const socialIcons = [
		{
			id: 0,
			icon: IconoLinkedin,
			link: 'https://www.linkedin.com/in/carloscomillas/'
		},
		{
			id: 1,
			icon: IconoInstagram,
			link: 'https://www.instagram.com/comillasestudio/'
		},
		{
			id: 2,
			icon: IconoBehance,
			link: 'https://www.behance.net/carloscomillas'
		},
		{
			id: 3,
			icon: IconoWhatsapp,
			link: 'https://wa.me/message/TDROOFLRB2OCH1'
		},
		{ id: 4, icon: IconoEmail, link: 'mailto:hola@carloscomillas.cl' }
	];
	return (
		<Container>
			<div className={styles.footer}>
				<ul className={styles.socialIcon}>
					{socialIcons.map((icon, index) => (
						<li key={index} className={styles.socialIconItem}>
							<a
								className={styles.socialIconLink}
								href={icon.link}
								target='_blank'
							>
								<icon.icon />
							</a>
						</li>
					))}
				</ul>
				<p>
					Actualmente en: <span>Santiago de Chile</span>
				</p>
				<p>&copy;2024 Grupo Comillas SpA | Todos Los Derechos Reservados</p>
			</div>
		</Container>
	);
};

export default Footer;
