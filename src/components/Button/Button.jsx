import styles from './styles/ButtonStyled.module.scss';

function Button(props) {
	return (
		<a href={props.link} aria-label={props.text} target='_blank'>
			<button
				disabled={props.isDisabled}
				className={`${styles.button} ${props.color === 'primary' ? styles.buttonPrimary : styles.buttonSecundary} ${props.hover === 'color' ? styles.buttonHoverColor : styles.buttonHoverScale} ${props.isDisabled ? styles.buttonDisabled : ''} `}
			>
				{props.text}
			</button>
		</a>
	);
}

export default Button;
