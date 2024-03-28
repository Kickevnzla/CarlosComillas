import Container from '../Container';
import styles from './styles/PhotoGalleryStyled.module.scss';
import clients from '../../assets/clients.json';

const images = clients.photos.map(photo => photo);

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

function PhotoGallery() {
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
								<div key={index} className={styles.masonryItem}>
									<img src={image} alt='' />
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default PhotoGallery;
