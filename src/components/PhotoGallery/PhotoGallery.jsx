import Container from '../Container';
import styles from './styles/PhotoGalleryStyled.module.scss';
import clients from '../../assets/clients.json';
import { useState } from 'react';
import ImageViewer from '../ImageViewer';

function PhotoGallery() {
	const images = clients.photos.map(photo => photo);
	const [isVisible, setIsVisible] = useState(false);
	const [tempImage, setTempImage] = useState('');

	function shuffleArray(array) {
		let len = array.length,
			currentIndex;
		for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
			let randIndex = Math.floor(Math.random() * (currentIndex + 1));
			var temp = array[currentIndex];
			array[currentIndex] = array[randIndex];
			array[randIndex] = temp;
		}
	}

	shuffleArray(images);

	const handleVisibility = () => {
		setIsVisible(false);
	};

	return (
		<section className={styles.photoGalleryContainer}>
			<Container>
				<div className={styles.gallery}>
					<div className={styles.title}>
						<h1>FOTOGRAFÍA</h1>
						<p>SI ALGUNA TE PROVOCA, ENTONCES SE CUMPLIÓ EL OBJETIVO.</p>
					</div>

					<div className={styles.mansonryContainer}>
						<div className={styles.masonryLayout}>
							{images.map((image, index) => (
								<div
									key={index}
									className={styles.masonryItem}
									onClick={() => {
										setTempImage(image);
										setIsVisible(true);
									}}
								>
									<img
										src={image.link}
										alt={`Imagen de producto de ${image.Cliente}`}
									/>
									<span className={styles.imageTitle}>{image.Cliente}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
			{isVisible && (
				<ImageViewer
					images={images.map(image => image.link)}
					starterIndex={images.findIndex(image => image === tempImage)}
					visibility={handleVisibility}
				/>
			)}
		</section>
	);
}

export default PhotoGallery;
