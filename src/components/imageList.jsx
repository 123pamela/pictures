import imageShow from './imageShow'
import './imageList.css'

function ImageList ({images}){
    const renderImage = images.map((image) => {
        return <imageShow key={image.id} image={image} />
    })
    
    return(
    <div className='imagen-list'>
        {renderImage}
    </div>
   )
}
export default ImageList