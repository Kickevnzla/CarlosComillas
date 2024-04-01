import styles from './styles/ImageViewerStyled.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

function ImageViewer({ images, starterIndex, visibility }) {
	const [direction, setDirection] = useState('hidden');
	const [imageLoaded, setImageLoaded] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(starterIndex);

	const slideVariants = {
		hiddenRight: {
			x: '100%',
			opacity: 0
		},
		hiddenLeft: {
			x: '-100%',
			opacity: 0
		},
		visible: {
			x: '0',
			opacity: 1
		},
		hidden: {
			opacity: 0
		},
		exit: {
			opacity: 0
		}
	};

	const handleNext = () => {
		setImageLoaded(false);
		setDirection('right');
		setCurrentIndex(prevIndex =>
			prevIndex + 1 === images.length ? 0 : prevIndex + 1
		);
	};

	const handlePrevious = () => {
		setImageLoaded(false);
		setDirection('left');

		setCurrentIndex(prevIndex =>
			prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className={styles.viewerContainer}>
			<div className={styles.viewer}>
				<AnimatePresence>
					<motion.div
						key={currentIndex}
						src={images[currentIndex]}
						variants={slideVariants}
						initial={
							direction === 'right'
								? 'hiddenRight'
								: direction === 'left'
									? 'hiddenLeft'
									: 'hidden'
						}
						animate='visible'
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 30 },
							duration: 0.2
						}}
						exit='exit'
						className={styles.imageContainer}
					>
						{!imageLoaded ? null : (
							<div className={styles.closeIcon}>
								<IoClose
									onClick={() => {
										visibility();
									}}
								/>
							</div>
						)}
						<img
							src={images[currentIndex]}
							onLoad={() => setImageLoaded(true)}
							alt='Previsualización de imagen'
						/>
					</motion.div>
				</AnimatePresence>

				<div className={styles.left} onClick={handlePrevious}>
					<FaArrowLeft />
				</div>
				<div className={styles.right} onClick={handleNext}>
					<FaArrowRight />
				</div>
			</div>
		</div>
	);
}
export default ImageViewer;
