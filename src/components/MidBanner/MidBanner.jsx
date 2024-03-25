import styles from './styles/MidBanner.module.scss';
import Container from '../Container';
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const bannerVariants = {
	visible: { opacity: 1, transition: { duration: 3 } },
	hidden: { opacity: 0 }
};

function MidBanner(props) {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return (
		<div
			className={`${styles.midBannerContainer} ${props.color === 'gray' ? styles.gray : ''}`}
		>
			<Container>
				<motion.div
					ref={ref}
					variants={bannerVariants}
					initial='hidden'
					animate={controls}
					className={styles.midBanner}
				>
					<p>{props.text}</p>
				</motion.div>
			</Container>
		</div>
	);
}

export default MidBanner;
