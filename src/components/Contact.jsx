import React, { useState, useRef, useContext } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTty } from '@fortawesome/free-solid-svg-icons'
import '../styles/all.scss'
import { validateName, validateNumber, validateEmail, validateMessage } from '../utilis/validateErrors.js'
import { Context } from '../context/context'
import Error from './Error'
import RotateLoader from 'react-spinners/ClipLoader'
import Title from './Title.jsx'

const Contact = () => {
	const form = useRef()
	const defaultFormData = {
		fname: '',
		email: '',
		number: '',
		message: '',
	}

	const [formData, setFormData] = useState(defaultFormData)
	const { formErrors, setFormErrorsWrapper } = useContext(Context)
	const [successForm, setSuccessForm] = useState(false)
	const [loading, setLoading] = useState(false)

	const validateInput = (name, value) => {
		switch (name) {
			case 'fname':
				validateName(value, setFormErrorsWrapper)
				break
			case 'number':
				validateNumber(value, setFormErrorsWrapper)
				break
			case 'email':
				validateEmail(value, setFormErrorsWrapper)
				break
			case 'message':
				validateMessage(value, setFormErrorsWrapper)
				break
			default:
				break
		}
	}

	const handleFormInputChange = (e, name, value) => {
		e.preventDefault()
		validateInput(name, value)
		setFormData(formData => ({ ...formData, [name]: value }))
		isValidForm()
	}

	const isValidForm = () => {
		if (formErrors) {
			return Object.values(formErrors).every(currentValue => currentValue === '')
		}
	}

	const isEmptyForm = () => {
		return Object.entries(formData).every(([k, v]) => v !== '')
	}

	const override = {
		width: '20px',
		height: '20px',
	}

	const sendEmailFun = e => {
		e.preventDefault()
		setLoading(true)
		emailjs
			.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
				publicKey: process.env.REACT_APP_EMAILJS_USER_ID,
			})
			.then(
				() => {
					console.log('SUCCESS!')
					setSuccessForm(true)
					setTimeout(() => {
						setFormData(defaultFormData)
						setSuccessForm(false)
					}, 3000)
				},
				error => {
					console.log('FAILED...', error.text)
					setSuccessForm(false)
				}
			)
			.finally(() => {
				setLoading(false) // This will ensure the spinner stops after success or failure
			})
	}

	return (
		<>
			<Title title='Lets talk'></Title>
			<div className='form__wrapper' id='contact'>
				<form className='form' ref={form}>
					<h1 className='form__title'>&bull; Keep in Touch &bull;</h1>
					<div className='form__icon'>
						<FontAwesomeIcon icon={faTty} />
					</div>
					<div className='form__row'>
						<div className='form__name'>
							<label htmlFor='name'></label>
							<input
								type='text'
								placeholder='My name is'
								name='fname'
								id='name_input'
								value={formData.fname}
								onChange={e => handleFormInputChange(e, e.target.name, e.target.value)}
							></input>
						</div>
						<div className='form__email'>
							<label htmlFor='email'></label>
							<input
								type='email'
								placeholder='My email is'
								name='email'
								id='email_input'
								value={formData.email}
								onChange={e => handleFormInputChange(e, e.target.name, e.target.value)}
							></input>
						</div>
					</div>
					<div className='form__number'>
						<label htmlFor='number'></label>
						<input
							type='text'
							placeholder='My number is'
							name='number'
							id='number_input'
							value={formData.number}
							onChange={e => handleFormInputChange(e, e.target.name, e.target.value)}
						></input>
					</div>
					<div className='form__message'>
						<label htmlFor='message'></label>
						<textarea
							name='message'
							placeholder="I'd like to chat about"
							id='message_input'
							value={formData.message}
							onChange={e => handleFormInputChange(e, e.target.name, e.target.value)}
							cols='50'
							rows='5'
						></textarea>
					</div>
					{formErrors && <Error formErrors={formErrors} />}

					{loading ? (
						<RotateLoader cssOverride={override} loading={loading} color='#6c5e5b' className='spinner' />
					) : (
						<div className='form__submit'>
							<button id='form_button' disabled={!isEmptyForm() || !isValidForm()} onClick={e => sendEmailFun(e)}>
								SEND MESSAGE!
							</button>
						</div>
					)}

					{successForm ? <p className='success-btn'>THANK YOU! 🖤 I'll get back to you soon! </p> : null}
				</form>
			</div>
		</>
	)
}

export default Contact
