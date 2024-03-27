import styles from './styles/ContactFormStyled.module.scss';
import Container from '../Container';
import Button from '../Button';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion, AnimatePresence } from 'framer-motion';

function ContactForm() {
	const form = useRef();
	const [captcha, setCaptcha] = useState(false);
	const [missingCaptcha, setMissingCaptcha] = useState(false);

	const sendEmail = e => {
		e.preventDefault();

		if (!captcha) {
			setMissingCaptcha(true);
			return;
		}
		setMissingCaptcha(false);
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

	const handleCaptcha = value => {
		setMissingCaptcha(false);
		value ? setCaptcha(true) : setCaptcha(false);
	};

	return (
		<div id='contact' className={styles.contactFormContainer}>
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
					<div className={styles.underForm}>
						<div>
							<AnimatePresence>
								{missingCaptcha && (
									<motion.h4 animate={{ y: ['30px', 0] }} exit={{ y: '30px' }}>
										¿Eres un robot?
									</motion.h4>
								)}
							</AnimatePresence>
							<ReCAPTCHA
								sitekey={import.meta.env.VITE_SITE_KEY}
								onChange={handleCaptcha}
							/>
						</div>
						<Button
							text='ENVIAR DATOS'
							color='primary'
							hover='scale'
							isDisabled={captcha ? false : true}
						/>
					</div>
				</form>
			</Container>
		</div>
	);
}
export default ContactForm;
