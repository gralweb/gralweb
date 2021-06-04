import newLetterSend from './newLetterSend'

const newLetterValidate = (e, campError) => {
	e.preventDefault()
	const formulario = e.currentTarget

	const elementos = {
		correo: formulario[0].value,
		loaderCont: document.querySelector('.app-new-letter-loader-cont'),
		loader: document.querySelector('.app-new-letter-loader'),
		contIcons: document.querySelector('.app-new-letter-check'),
		msjCont: document.querySelector('.app-new-letter-err-email'),
	}

	if (elementos.correo) {
		if (!elementos.correo.includes('@') || !(elementos.correo.includes('.com') || elementos.correo.includes('.es'))) {
			elementos.msjCont.classList.add('process')

			setTimeout(() => {
				elementos.msjCont.classList.remove('process')
			}, 3500)
		} else {
			newLetterSend(elementos).then(resp => {
				elementos.loaderCont.classList.add('process')
				elementos.contIcons.classList.add('process')
				if (resp.estado === 'mail_save') {
					formulario[0].value = ''
					elementos.contIcons.children[0].classList.add('process')

					setTimeout(() => {
						elementos.contIcons.children[0].classList.remove('process')
					}, 2000)
				} else {
					campError()
					elementos.contIcons.children[1].classList.add('process')

					setTimeout(() => {
						elementos.contIcons.children[1].classList.remove('process')
					}, 2000)
				}

				setTimeout(() => {
					elementos.loaderCont.classList.remove('process')
					elementos.contIcons.classList.remove('process')
				}, 2000)	
			})
			.catch(err => {
				campError()
			})
		}
	} else {
		elementos.loaderCont.classList.add('process')
		elementos.contIcons.classList.add('process')
		elementos.contIcons.children[1].classList.add('process')

		setTimeout(() => {
			elementos.loaderCont.classList.remove('process')
			elementos.contIcons.classList.remove('process')
			elementos.contIcons.children[1].classList.remove('process')
		}, 2000)
	}
}

export default newLetterValidate
