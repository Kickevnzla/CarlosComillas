import styles from './styles/MidBanner.module.scss';
import Container from '../Container';
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const bannerVariants = {
	visible: {
		scale: 1,
		transition: { ease: 'easeInOut', duration: 0.5 }
	},
	hidden: { scale: 0.8 }
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
