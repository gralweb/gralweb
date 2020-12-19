const sW = () => {
    const swUrl = `${process.env.PUBLIC_URL}/serviceWorker.js`

    window.addEventListener('load', () => {
    	if ('serviceWorker' in navigator && !navigator.serviceWorker.controller) {
	        navigator.serviceWorker.register(swUrl).then(resp => {
	        	alert('register')
	        })
    	}
    })
}

export default sW
