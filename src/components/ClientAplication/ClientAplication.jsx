import styles from './styles/ClientAplicationStyled.module.scss';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

import {
	aplicacionAfico,
	aplicacionAngelMusicEvents,
	aplicacionBSG,
	aplicacionBucare,
	aplicacionByGaby,
	aplicacionCaminoAlSer,
	aplicacionDTJ,
	aplicacionHey,
	aplicacionHolyDonas,
	aplicacionLucchy,
	aplicacionTasty,
	aplicacionUCPL
} from '../../images';

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
			<img src={aplicacionAfiko} />
			<IoClose className={styles.closeIcon} />
		</motion.div>
	);
}
export default ClientAplication;
