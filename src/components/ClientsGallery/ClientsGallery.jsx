import styles from './styles/ClientsGalleryStyled.module.scss';
import Container from '../Container';
import { useState } from 'react';
import ImageViewer from '../ImageViewer';
import { AnimatePresence } from 'framer-motion';
import clients from '../../assets/clients.json';
import Button from '../Button';
import Carousell from '../Carousell';

const perChunk = 3; // items per chunk

const slides = clients.clients.reduce((resultArray, item, index) => {
	const chunkIndex = Math.floor(index / perChunk);

	if (!resultArray[chunkIndex]) {
		resultArray[chunkIndex] = []; // start a new chunk
	}

	resultArray[chunkIndex].push(item);

	return resultArray;
}, []);

function ClientsGallery() {
	const [isVisible, setIsVisible] = useState(false);
	const [tempClient, setTempClient] = useState('');

	return (
		<section id='portfolio' className={styles.clientsGalleryContainer}>
			<Container>
				<div className={styles.clientsGallery}>
					<div className={styles.galleryTitle}>
						<h1>PORTAFOLIO</h1>
						<h3>MARCAS Y LOGOS CON SELLO COMILLAS</h3>
					</div>
					<Carousell slides={slides} />
					<Button
						text='VER MÁS'
						color='primary'
						hover='color'
						link='https://www.instagram.com/comillasestudio/'
					/>
				</div>
			</Container>
			<AnimatePresence initial={false}>
				{isVisible && <ImageViewer image={tempClient.image} />}
			</AnimatePresence>
		</section>
	);
}

export default ClientsGallery;
