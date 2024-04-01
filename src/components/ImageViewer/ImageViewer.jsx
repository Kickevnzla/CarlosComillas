import styles from './styles/ImageViewerStyled.module.scss';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const variants = {
	visible: { opacity: 1, transition: { duration: 1 } },
	hidden: { opacity: 0 }
};

function ImageViewer(props) {
	const handleAplicationSwipe = direction => () => {
		const slides = clients.slides
			.map(slide => slide.map(client => client))
			.flat();

		const currentIndex = slides.findIndex(
			client => client === props.tempClient
		);
		const nextIndex =
			direction === 'right'
				? (currentIndex + 1) % slides.length
				: (currentIndex - 1 + slides.length) % slides.length;

		setTempClient(slides[nextIndex]);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={styles.imageContainer}
		>
			<span className={styles.arrowImage}>
				<FaArrowLeft onClick={handleAplicationSwipe('left')} />
			</span>

			<div>
				<img src={props.tempClient.image} />

				<IoClose
					className={styles.closeIcon}
					onClick={() => setIsVisible(false)}
				/>
			</div>
			<span className={styles.arrowImage}>
				<FaArrowRight onClick={handleAplicationSwipe('right')} />
			</span>
		</motion.div>
	);
}
export default ImageViewer;
