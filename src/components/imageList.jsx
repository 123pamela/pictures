import imageShow from './imageShow'

function ImageList ({images}){
    const renderImage = images.map((image) => {
        return <imageShow key={image.id} image={image} />
    })
    
    return(
    <div>
        {renderImage}
    </div>
   )
}
export default ImageList