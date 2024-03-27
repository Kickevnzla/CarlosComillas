import styles from './styles/NavBarStyled.module.scss';

import { useState } from 'react';

import { LogoComillasSinFondo } from '../../images';
import Container from '../Container/Container';

const HomeNavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(open => !open);
	};

	return (
		<div className={styles.navBarContainer}>
			<Container>
				<header>
					<nav className={styles.navBar}>
						<div className={styles.navLogoContainer}>
							<a href='#'>
								<img
									src={LogoComillasSinFondo}
									alt='Logo Zelf'
									className={styles.logo}
								/>
							</a>
						</div>

						<ul
							className={`${styles.navBarMenu} ${isOpen ? styles.isOpen : ''}`}
						>
							<li>
								<a href='#Servicios'>Servicios</a>
							</li>
							<li>
								<a href='#SobreMi'>Sobre Mí</a>
							</li>
							<li>
								<a href='#Portafolio'>Portafolio</a>
							</li>
							<li>
								<a href='#Contacto'>Contacto</a>
							</li>
						</ul>
					</nav>
				</header>
			</Container>
		</div>
	);
};

export default HomeNavBar;
