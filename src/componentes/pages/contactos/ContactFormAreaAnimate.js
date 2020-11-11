// Animación de los inputs en el form de contactos
const contactos_anim_inp = () => {
	let inputs = document.querySelectorAll(gralweb_vars.app_contac_inputs);

	function input_focus() {
		var parent_input = this.parentElement.parentElement;

		parent_input.classList.add("focus-in-te");

		parent_input.classList.remove("error");
		this.parentElement.previousElementSibling.classList.remove("error");
	}

	function input_blur() {
		var parent_input = this.parentElement.parentElement;
		
		parent_input.classList.remove("error");

		this.parentElement.previousElementSibling.classList.remove("error");
		if (this.value == "") {
			parent_input.classList.remove("focus-in-te");
		}
	}

	inputs.forEach(input => {
		
		input.addEventListener("focus", input_focus);
		input.addEventListener("blur", input_blur);

		if (input.value != "") {
			input.parentElement.parentElement.classList.add("focus-in-te");
		}
	});
};
