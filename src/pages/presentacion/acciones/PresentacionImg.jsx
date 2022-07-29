import { ASSETS_URL } from './../../../components/constans'
import presentacionImgZoom from './presentacionImgZoom.js'

const PresentacionImg = ({ scaleAnim, img, titulo, handleZoom }) => (
	<div
		className={`app-cont-item app-vista ${ scaleAnim }`}
		onClick={ e => presentacionImgZoom(e.currentTarget, handleZoom) }
	>

		<figure className='app-item-img app-vista-foto'>
			<img src={ `${ ASSETS_URL }/assets/${ img }` } alt={ titulo } title={ titulo } />
		</figure>
		<figcaption className='app-vista-zoom'>
			<div className='app-zoom'>
				<i className='icofont-optic'></i>
			</div>
		</figcaption>
	</div>
)

export default PresentacionImg