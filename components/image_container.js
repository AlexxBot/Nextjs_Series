

const ImageContainer = ({serie}) => {
    return <div className="imageContainer">
        
        
        <img src={serie.image == null? '../public/favicon.ico' :serie.image.original} height={300} width={200} ></img>
        
        <h3>{serie.name}</h3>
    </div>
}

export default ImageContainer