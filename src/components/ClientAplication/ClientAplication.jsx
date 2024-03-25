import styles from './styles/ClientAplicationStyled.module.scss';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

import aplicationAfiko from '../../images/Aplicaciones-Clientes/AplicacionAfiko.jpg';
import aplicationAngelMusicEvents from '../../images/Aplicaciones-Clientes/AplicacionAngelMusicEvents.jpg';
import aplicationBSG from '../../images/Aplicaciones-Clientes/AplicacionBSG.jpg';
import aplicationBucare from '../../images/Aplicaciones-Clientes/AplicacionBucare.jpg';
import aplicationByGaby from '../../images/Aplicaciones-Clientes/AplicacionByGaby.jpg';
import aplicationCaminoAlSer from '../../images/Aplicaciones-Clientes/AplicacionCaminoAlSer.jpg';
import aplicationDTJ from '../../images/Aplicaciones-Clientes/AplicacionDTJ.jpg';
import aplicationHey from '../../images/Aplicaciones-Clientes/AplicacionHey.jpg';
import aplicationHolyDonas from '../../images/Aplicaciones-Clientes/AplicacionHolyDonas.jpg';
import aplicationLucchy from '../../images/Aplicaciones-Clientes/AplicacionLucchy.jpg';
import aplicationTasty from '../../images/Aplicaciones-Clientes/AplicacionTasty.jpg';
import aplicationUCPL from '../../images/Aplicaciones-Clientes/AplicacionUCPL.jpg';

const variants = {
	visible: { opacity: 1, transition: { duration: 1 } },
	hidden: { opacity: 0 }
};

function ClientAplication(props) {
	return (
		<motion.div
			variants={variants}
			initial='hidden'
			animate='visible'
			className={styles.clientAplicationContainer}
		>
			<img src={aplicationAfiko} />
			<IoClose className={styles.closeIcon} />
		</motion.div>
	);
}
export default ClientAplication;
