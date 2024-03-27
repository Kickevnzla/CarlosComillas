import styles from './styles/ButtonStyled.module.scss';

function Button(props) {
	return (
		<a href={props.link} target='_blank'>
			<button
				className={`${styles.button} ${props.color === 'primary' ? styles.buttonPrimary : styles.buttonSecundary} ${props.hover === 'color' ? styles.buttonHoverColor : styles.buttonHoverScale}`}
			>
				{props.text}
			</button>
		</a>
	);
}

export default Button;
