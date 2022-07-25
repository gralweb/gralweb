import emailjs from '@emailjs/browser'

const api_key = "T32LeETNhcodcrHcV"
const api_service = "service_354mosf"
const api_template = "template_ip8z07x"

const contactFormSend = api_params => (
	emailjs
	.send(api_service, api_template, api_params, api_key)
	.then(response => (
       		response.status
		)
    )
)

export default contactFormSend
