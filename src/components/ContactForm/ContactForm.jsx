import styles from './styles/ContactFormStyled.module.scss';
import Container from '../Container';
import Button from '../Button';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
	const form = useRef();
	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm('service_yo40oxh', 'template_izy3g03', form.current, {
				publicKey: 'paUBaz1ksk95jwvwl'
			})
			.then(
				() => {
					console.log('SUCCESS!');
					form.current.reset();
				},
				error => {
					console.log('FAILED...', error.text);
				}
			);
	};

	return (
		<div className={styles.contactFormContainer}>
			<Container>
				<form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
					<h1>TU FORMULARIO</h1>
					<p>
						DEJA AQUÍ UNA BREVE RESEÑA DE TU IDEA O PROYECTO Y TE CONTACTARÉ.
					</p>
					<div className={styles.formContent}>
						<div className={styles.formLeft}>
							<label htmlFor='name'>Nombre</label>
							<input
								type='text'
								name='user_name'
								id='name'
								placeholder='Jesús Perez'
								required
							/>
							<label htmlFor='email'>Correo</label>
							<input
								type='email'
								name='user_email'
								id='email'
								placeholder='correo@miemail.com'
								required
							/>
							<label htmlFor='phone'>Teléfono</label>
							<input
								type='tel'
								name='user_phone'
								id='phone'
								placeholder='+56 9 1234 5678'
								maxLength={20}
								required
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
								maxLength={1000}
								required
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
