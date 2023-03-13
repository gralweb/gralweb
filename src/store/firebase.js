// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDiAD2lzHZEzBNlvNe2TymuyyRjtLzjZgE",
	authDomain: "host-test-2001.firebaseapp.com",
	projectId: "host-test-2001",
	storageBucket: "host-test-2001.appspot.com",
	messagingSenderId: "743134257412",
	appId: "1:743134257412:web:5aa625778547e8bfb4b051",
	measurementId: "G-G52WG8FQEQ"
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)

export { firebaseApp }