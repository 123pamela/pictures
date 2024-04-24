import ImageShow from './imageShow'
import './ImageList.css'

function ImageList ({images}){
    const renderImage = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    })
    
    return(
    <div className='imagen-list'>
        <h1>{renderImage}</h1>
    </div>
   )
}
export default ImageList