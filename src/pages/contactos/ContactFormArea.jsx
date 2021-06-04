import React from 'react';

const inputAnimacion = (area, evento) => {
    const areaParent = area.parentElement.parentElement
    const areaClaseFocus = 'focus-in-te'
    const areaClaseError = 'error'

    switch(evento) {
        case 'focus' :
            areaParent.classList.add(areaClaseFocus)
            break;
        case 'blur' :
            if (!area.value) {
                areaParent.classList.remove(areaClaseFocus)
            }
            break;
        default :
            areaParent.classList.add(areaClaseFocus)
            break;
    }
    
    if (areaParent.classList.contains(areaClaseError)) {
        areaParent.classList.remove(areaClaseError)
    }
}

const ContactFormInput = ( type, name ) => (
    <input 
        className='app-contac-input'
        type={ type }
        name={ `app-form-${ name }` }
        onBlur={ e => inputAnimacion(e.currentTarget, 'blur') }
        onFocus={ e => inputAnimacion(e.currentTarget, 'focus') }
    />
)

const ContactFormTextArea = name => (
    <textarea 
        className='app-contac-input'
        name={ `app-form-${ name }` }
        onBlur={ e => inputAnimacion(e.currentTarget, 'blur') }
        onFocus={ e => inputAnimacion(e.currentTarget, 'focus') } 
    >
    </textarea>
)

const ContactFormArea = ({ label, type, required, name }) => (
    <div id={ ( type === 'textArea' ) ? 'app-form-textarea' : null } className='app-form-line'>
        <div className='app-form-camp'>
            <h5>{ required ? `${ label } *` : label }</h5>
        </div>

        <div className={`app-form-input ${( type === 'textArea' ) ? 'app-form-textarea' : ''}`}>
            { 
                ( type === 'textArea' ) ? 

                ContactFormTextArea( name ) :

                ContactFormInput( type, name )
            }
        </div>
    </div>
)

export default ContactFormArea
