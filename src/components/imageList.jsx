import ImageShow from './imageShow'
import './imagenList.css'

function ImageList ({images}){
    const renderImage = images.map((image) => {
        return <imageShow key={image.id} image={image} />
    })
    
    return(
    <div className='imagen-list'>
        <h1>{renderImage}</h1>
    </div>
   )
}
export default ImageList