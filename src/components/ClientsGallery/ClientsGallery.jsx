import styles from './styles/ClientsGalleryStyled.module.scss';
import Container from '../Container';
import clients from '../../assets/clients.json';
import Button from '../Button';
import Carousell from '../Carousell';
import { useState } from 'react';

function ClientsGallery() {
	const [perChunk, setPerChunk] = useState(3); // items per chunk

	const slides = clients.clients.reduce((resultArray, item, index) => {
		const chunkIndex = Math.floor(index / perChunk);

		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = []; // start a new chunk
		}

		resultArray[chunkIndex].push(item);

		return resultArray;
	}, []);

	return (
		<section id='portfolio' className={styles.clientsGalleryContainer}>
			<Container>
				<div className={styles.clientsGallery}>
					<div className={styles.galleryTitle}>
						<h1>PORTAFOLIO</h1>
						<h2>MARCAS Y LOGOS CON SELLO COMILLAS</h2>
					</div>
					<Carousell slides={slides} images={clients.clients} />
					<Button
						text='VER MÁS'
						color='primary'
						hover='color'
						link='https://www.instagram.com/comillasestudio/'
					/>
				</div>
			</Container>
		</section>
	);
}

export default ClientsGallery;
