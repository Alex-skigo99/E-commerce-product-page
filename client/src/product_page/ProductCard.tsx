import { ReactElement, useContext, useState } from "react";
import { ItemType } from "../types";
import { CartContext } from "../App";
import MyButton from "../common_components/MyButton";
import Counter from "../common_components/Counter";

export interface ItemProps {
    product: ItemType; 
};

const ProductCard = (props: ItemProps):ReactElement => {
    const { product } = props;
    const [count, setCount] = useState(1);
    const valueContext = useContext(CartContext);
    if (!valueContext) {
        throw new Error('ChildComponent must be used within a MyProvider');
      }
    const {cart, setCart} = valueContext;
    console.log('cart-', cart); //-------------------------------
    console.log('setCart-', setCart); //-------------------------------
    const actualPrice = product.price * (1 - product.discount);

    const handleAddToCart = () => {
        const itemInCart = cart.find(item => item.item.id === product.id);
        if (itemInCart) {
            setCart(cart.map(item => {
                if (item.item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + count
                    };
                } else {
                    return item;
                }
            }));
        } else {
            setCart([
                ...cart,
                {
                    item: product,
                    price: actualPrice,
                    quantity: 1
                }
            ]);
        }
    };

    return (
        <div style={{width: '40%'}}>
            <h5 className="color-primary">{product.manufacturer}</h5>
            <h1>{product.name}</h1>
            <p className="color-secondary">{product.description}</p>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h2 className="actual_price">${actualPrice.toFixed(2)}</h2>
                <h4 className="discount">{product.discount * 100}%</h4>
            </div>
            <h4 className="full_price">${product.price.toFixed(2)}</h4>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '50px'}}>
                <Counter onChange={(count) => {setCount(count)}}/>
                <MyButton image="/images/icon-cart-w.svg" title="Add to cart" width="200px" onClick={handleAddToCart} />
            </div>
        </div>
    );
};

export default ProductCard;