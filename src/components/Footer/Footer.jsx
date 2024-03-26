import Container from '../Container/Container';
import styles from './styles/FooterStyled.module.scss';
import LinkedinLogo from '../../images/ICONO_LINKEDIN.svg?react';
import InstagramLogo from '../../images/ICONO_INSTAGRAM.svg?react';
import BehanceLogo from '../../images/ICONO_BEHANCE.svg?react';
import WhatsappLogo from '../../images/ICONO_WHATSAPP.svg?react';
import EmailLogo from '../../images/ICONO_EMAIL.svg?react';

const Footer = () => {
	const socialIcons = [
		{ id: 0, icon: LinkedinLogo },
		{ id: 1, icon: InstagramLogo },
		{ id: 2, icon: BehanceLogo },
		{ id: 3, icon: WhatsappLogo },
		{ id: 4, icon: EmailLogo }
	];
	return (
		<Container>
			<div className={styles.footer}>
				<ul className={styles.socialIcon}>
					{socialIcons.map((icon, index) => (
						<li key={index} className={styles.socialIconItem}>
							<a className={styles.socialIconLink} href='#'>
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
