import styles from './styles/NavBarStyled.module.scss';

import { useState } from 'react';

import { LogoComillasSinFondo } from '../../images';
import Container from '../Container/Container';

import { RiMenu3Line } from 'react-icons/ri';

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
							<a to='/'>
								<img
									src={LogoComillasSinFondo}
									alt='Logo Zelf'
									className={styles.logo}
								/>
							</a>
						</div>

						<div className={styles.burgerMenu} onClick={toggleMenu}>
							<RiMenu3Line />
						</div>

						<ul
							className={`${styles.navBarMenu} ${isOpen ? styles.isOpen : ''}`}
						>
							<li>
								<a
									href='#Servicios'
									className={({ isActive }) =>
										isActive ? styles.isActive : ''
									}
								>
									Servicios
								</a>
							</li>
							<li>
								<a
									href={'#SobreMi'}
									className={({ isActive }) =>
										isActive ? styles.isActive : ''
									}
								>
									Sobre Mí
								</a>
							</li>
							<li>
								<a
									href={'#Portafolio'}
									className={({ isActive }) =>
										isActive ? styles.isActive : ''
									}
								>
									Portafolio
								</a>
							</li>
							<li>
								<a
									href={'#Contacto'}
									className={({ isActive }) =>
										isActive ? styles.isActive : ''
									}
								>
									Contacto
								</a>
							</li>
						</ul>
					</nav>
				</header>
			</Container>
		</div>
	);
};

export default HomeNavBar;
