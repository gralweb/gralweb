import React from 'react';

// const AreaFocus = () => {
//     let parent = this
//     console.log(parent)
// }

const ContactFormInput = ( type, name ) => {
    return (
        <input 
            type={ type }
            name={ 'app-form-' + name }
            className='app-contac-input'
        />
    );
}

const ContactFormTextArea = name => {
    return (
        <textarea 
            name={ 'app-form-' + name } 
            className='app-contac-input'
        ></textarea>
    );
}

const ContactFormArea = props => {
    const { label, type, required, name } = props

    return (
        <div id={ ( type === 'textArea' ) ? 'app-form-textarea' : null } className='app-form-line'>
            <div className='app-form-camp'>
                <h5>{ required ? `${label} *` : label }</h5>
            </div>
            <div className={ ( type === 'textArea' ) ? 'app-form-input app-form-textarea' : 'app-form-input' }>
                { 
                    ( type === 'textArea' ) ? 
                    ContactFormTextArea( name ) :
                    ContactFormInput( type, name )
                }
            </div>
        </div>
    );
}

export default ContactFormArea;
