import { useState } from "react";

const ItemPhotoGallery = ({ images }: { images: string[] }) => {
    // max 4 images
    const [currentImage, setCurrentImage] = useState(0);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleModalOpen = (index: number) => {
        setCurrentImage(index);
        // setIsModalOpen(true);
    };
        
    return (
        <div style={{display: 'flex', width: '40%', flexWrap: 'wrap'}}>
            <img
                src={images[currentImage]}
                alt={`product-${currentImage}`}
                style={{ width: '100%', borderRadius: '20px', cursor: 'zoom-in' }}
                />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '2rem 0' }}>
                {images.map((image, index) => (
                    <div key={index} style={{ width: '20%', margin: '5px 0' }}>
                        <img
                        src={image}
                        alt={`product-${index}`}
                        className="thumbnail"
                        onClick={() => handleModalOpen(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
    {/* <Modal open={isModalOpen} onClose={handleModalClose}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
            src={images[currentImage]}
            alt={`product-${currentImage}`}
            style={{ width: '50%', height: '50%' }}
        />
        </div>
    </Modal> */}
};

export default ItemPhotoGallery;