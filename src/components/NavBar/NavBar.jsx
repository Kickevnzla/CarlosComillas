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
								<a
									onClick={() => {
										const element = document.getElementById('services');
										element?.scrollIntoView({ behavior: 'smooth' });
									}}
								>
									Servicios
								</a>
							</li>
							<li>
								<a
									onClick={() => {
										const element = document.getElementById('aboutMe');
										element?.scrollIntoView({ behavior: 'smooth' });
									}}
								>
									Sobre Mí
								</a>
							</li>
							<li>
								<a
									onClick={() => {
										const element = document.getElementById('portfolio');
										element?.scrollIntoView({ behavior: 'smooth' });
									}}
								>
									Portafolio
								</a>
							</li>
							<li>
								<a
									onClick={() => {
										const element = document.getElementById('contact');
										element?.scrollIntoView({ behavior: 'smooth' });
									}}
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
