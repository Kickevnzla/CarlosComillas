import styles from './styles/CarousellStyled.module.scss';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Carousell(props) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const [tempClient, setTempClient] = useState('');
	const [direction, setDirection] = useState('left');

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
		exit: {
			opacity: 0
		}
	};

	const handleNext = () => {
		setDirection('right');
		setCurrentIndex(prevIndex =>
			prevIndex + 1 === props.slides.length ? 0 : prevIndex + 1
		);
	};

	const handlePrevious = () => {
		setDirection('left');

		setCurrentIndex(prevIndex =>
			prevIndex - 1 < 0 ? props.slides.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className={styles.carousel}>
			<AnimatePresence>
				<motion.div
					className={styles.content}
					key={currentIndex}
					src={props.slides[currentIndex]}
					variants={slideVariants}
					initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
					animate='visible'
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 }
					}}
					exit='exit'
				>
					<div className={styles.gridContainer}>
						<div className={styles.clientsLogos}>
							{props.slides[currentIndex].map((data, index) => (
								<div
									key={index}
									className={styles.logo}
									onClick={() => {
										setIsVisible(true);
										setTempClient(data);
									}}
								>
									<img src={data.logo} />
								</div>
							))}
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
			<div className={styles.left} onClick={handlePrevious}>
				<FaArrowLeft />
			</div>
			<div className={styles.right} onClick={handleNext}>
				<FaArrowRight />
			</div>
		</div>
	);
}
export default Carousell;
