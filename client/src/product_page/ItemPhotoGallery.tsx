import { useState } from "react";
interface galleryProps {
    modal: boolean;
    images: string[];
    modalAction: () => void;
};

const ItemPhotoGallery = ({ modal, images, modalAction }: galleryProps) => {
    // max 4 images
    images = images.slice(0, 4);
    const [currentImage, setCurrentImage] = useState(0);

    const handleClick = () => {
        if (!modal) {
            modalAction();
        }
    };
            
    return (
        <div style={{display: 'flex', width: '100%', flexWrap: 'wrap'}}>
            <div 
            className='bigImage'
            style={{ backgroundImage: `url(${images[currentImage]})`, cursor: 'zoom-in'}}
            {...(modal && { style: { backgroundImage: `url(${images[currentImage]})`, cursor: 'zoom-in', height: '70vh'} })}
            onClick={handleClick}
            >
                {modal && 
                <>
                    <div className="arrow-prev"
                    onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
                    >
                        <img src="/images/icon-previous.svg" alt="previous" />
                    </div>
                    <div className="arrow-next"
                    onClick={() => setCurrentImage((currentImage + 1) % images.length)}
                    >
                        <img src="/images/icon-next.svg" alt="next" />
                    </div>
                </>}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '2rem 0' }}>
                {images.map((image, index) => (
                    <div 
                    key={index}
                    className="thumbnail-container"
                    {...(index === currentImage && { style: { border: '2px solid #e86304'} })}
                    >
                        <img
                        src={image}
                        alt={`product-${index}`}
                        className="thumbnail"
                        {...(index === currentImage && { style: { opacity: '0.3' } })}
                        onClick={() => setCurrentImage(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemPhotoGallery;