import styles from './styles/ContactFormStyled.module.scss';
import Container from '../Container';
import Button from '../Button';

function ContactForm() {
	return (
		<div className={styles.contactFormContainer}>
			<Container>
				<form className={styles.contactForm}>
					<h1>¿QUIERES UNA MARCA CON SELLO COMILLAS?</h1>
					<p>
						DEJA AQUÍ UNA BREVE RESEÑA DE TU IDEA O PROYECTO Y TE CONTACTARÉ.
					</p>
					<div className={styles.formContent}>
						<div className={styles.formLeft}>
							<label htmlFor='name'>Nombre</label>
							<input
								type='text'
								name='name'
								id='name'
								placeholder='Jesús Perez'
							/>
							<label htmlFor='email'>Correo</label>
							<input
								type='email'
								name='email'
								id='email'
								placeholder='correo@miemail.com'
							/>
							<label htmlFor='phone'>Teléfono</label>
							<input
								type='tel'
								name='phone'
								id='phone'
								placeholder='+56 9 1234 5678'
							/>
						</div>
						<div className={styles.formRight}>
							<label htmlFor='message'>Cuéntame tu idea.</label>
							<textarea
								name='message'
								id='message'
								cols='30'
								rows='11'
								placeholder='Cuéntame tu idea o proyecto.'
								maxLength={500}
							></textarea>
						</div>
					</div>
					<Button text='ENVIAR DATOS' color='primary' hover='scale' />
				</form>
			</Container>
		</div>
	);
}
export default ContactForm;
