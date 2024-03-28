import styles from './styles/MidBanner.module.scss';
import Container from '../Container';
import React from 'react';

function MidBanner(props) {
	return (
		<section
			className={`${styles.midBannerContainer} ${props.color === 'transparent' ? styles.trasparent : ''}`}
		>
			<Container>
				<div className={styles.midBanner}>
					<p>{props.text}</p>
				</div>
			</Container>
		</section>
	);
}

export default MidBanner;
