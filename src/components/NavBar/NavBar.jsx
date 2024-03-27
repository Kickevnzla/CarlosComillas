import styles from './styles/NavBarStyled.module.scss';

import { useState, useEffect } from 'react';

import { LogoComillasSinFondo } from '../../images';
import Container from '../Container/Container';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const HomeNavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [hidden, setHidden] = useState(false);

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', latest => {
		const previous = scrollY.getPrevious();
		if (latest > previous && latest > 150) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	const toggleMenu = () => {
		setIsOpen(open => !open);
	};

	return (
		<motion.div
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: -100 }
			}}
			animate={hidden ? 'hidden' : 'visible'}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			className={styles.navBarContainer}
		>
			<Container>
				<header>
					<nav className={styles.navBar}>
						<div className={styles.navLogoContainer}>
							<a
								onClick={() => {
									const element = document.getElementById('mainBanner');
									element?.scrollIntoView({ behavior: 'smooth' });
								}}
							>
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
		</motion.div>
	);
};

export default HomeNavBar;
