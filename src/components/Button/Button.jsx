import styles from './styles/ButtonStyled.module.scss';

function Button(props) {
	return (
		<button
			className={`${styles.button} ${props.color === 'primary' ? styles.buttonPrimary : styles.buttonSecundary}`}
		>
			{props.text}
		</button>
	);
}

export default Button;
