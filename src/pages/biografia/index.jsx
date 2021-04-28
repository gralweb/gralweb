import React, { useState, useEffect } from 'react'

// Componentes
import { ASSETS_URL } from './../../components/constans'

const RenderBiografia = ({ headerLocation }) => {
    const [animationLoad, setAnimationLoad] = useState(false)

    useEffect(() => {
        setAnimationLoad(true)

        document.title = `${document.title.slice(0, 9)} Biografía`
        headerLocation.bio()
    }, [headerLocation])

  	return (
        <div className='app-main-cont'>
      		<div className='app-bio'>
                <div 
                    className={`app-bio-cont-foto ${animationLoad ? 'app-bio-cont-foto-anim' : ''}`}
                >
                    <span className='icofont-robot-face app-bio-sep'></span>
                    <img className='app-bio-foto' src={ `${ ASSETS_URL }/logo/face.jpg` } alt='Foto George Alviarez' />
                </div>
                
                <div 
                    className={`app-bio-cont-text ${animationLoad ? 'app-bio-cont-text-anim' : ''}`}
                >
                    <p className='app-bio-text'>
                        Hola, mi nombre es George Alviarez y soy desarrollador web. Soy de Venezuela - Estado Lara y tengo actualmente 19 años de edad. Me gustan los comics, el baloncesto, los video juegos y más que todo la tecnología.
                    </p>
                    <p className='app-bio-text'>
                        Comencé en el mundo del desarrollo web a los 17 años y desde entonces sólo he estado aprendiendo sobre el tema para poder trabajar con esta rama de la tecnología. Hoy en día me siento un 85% capaz de trabajar con ello, el otro 15% meda miedo o nervios porque no tengo experiencia laboral, por esa razón he hecho este portafolio donde muestro algunas de las cosas que he hecho y siento que demuestran el conocimiento que he adquirido en este tiempo.
                    </p>
                    <p className='app-bio-text'>
                       No me considero un experto, pero tengo la capacidad para encontrar soluciones a fallos que se encuentren en el proceso de desarrollo de un sitio web, y siento que siempre hay algo más para aprender en esta rama ya que es muy amplia y se encuentra en constante desarrollo.
                    </p>
                </div>
            </div>
        </div>
  	)
}

export default RenderBiografia
