import { useState } from "react";
import { ItemType } from "../types";
import ItemPhotoGallery from "./ItemPhotoGallery";
import ProductCard from "./ProductCard";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

const ProductPage = () => {
    const item: ItemType = {
        id: 1,
        name: 'Fall Limited Edition Sneakers',
        price: 250,
        manufacturer: 'SNEAKER COMPANY',
        discount: 0.3, // 30%
        description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
        images: [
            '/images/image-product-1.jpg',
            '/images/image-product-2.jpg',
            '/images/image-product-3.jpg',
            '/images/image-product-4.jpg'
        ]
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
    <>
        <div className='product-page' style={{display: 'flex', justifyContent: 'space-around', marginTop: '1rem'}}>
            <div>
                <ItemPhotoGallery modal={false} images={item.images} modalAction={handleOpen} />
            </div>
            <div>
                <ProductCard product={item} />
            </div>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            disableAutoFocus={true}
        >
            <Box sx={{
                width: '80%',
                maxWidth: '600px',
                minWidth: '300px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                }}>
                <ItemPhotoGallery modal={true} images={item.images} modalAction={handleClose} />
            </Box>
        </Modal>
    </>
    );
};

export default ProductPage;