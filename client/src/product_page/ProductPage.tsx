import { ItemType } from "../types";
import ItemPhotoGallery from "./ItemPhotoGallery";
import ProductCard from "./ProductCard";

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

    return (
        <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '1rem'}}>
            <ItemPhotoGallery images={item.images} />
            <ProductCard product={item} />
        </div>
    );
};

export default ProductPage;