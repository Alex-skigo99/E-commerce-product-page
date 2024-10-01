import Paper from "@mui/material/Paper";
import { CartContext } from "../App";
import React, { useContext } from "react";
import MyButton from "../common_components/MyButton";

interface basketCardProps {
    action: () => void;
};

const BasketCard: React.FC<basketCardProps> = ({action}) => {
    const valueContext = useContext(CartContext);
    if (!valueContext) {
        throw new Error('ChildComponent must be used within a MyProvider');
    }
    const {cart} = valueContext;

    const titleStyle = {
        display: 'flex',
        alignItems: 'center',
        // width: '100%',
        height: '50px',
        margin: '0px',
        padding: '0 20px',
        borderBottom: '1px solid #e0e0e0',
    };
    const contentStyle = {
        // width: '100%',
        display: 'flex',
        // padding: '10px',
    };
    const itemStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        margin: '10px 0',
        // padding: '0 20px',
    };
    const paperSx = {
        width: 300,
        position: 'absolute',
        top: 70,
        right: 20,
        zIndex: 100,
    };
    const actionStyle = {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '20px',
    };

    return (
        <Paper elevation={8} sx={paperSx}>
            <div style={titleStyle}>
                <h5>Cart</h5>
            </div>
            {cart.length === 0 ? <p style={{textAlign: 'center'}}>Cart is empty</p>
            :
            <div style={contentStyle}>
                {cart.map((item, index) => (
                    <div key={index} style={itemStyle}>
                        <img src={item.item.images[0]} alt={item.item.name} style={{width: '40px', height: '40px', borderRadius: '5px'}} />
                        <div className="color-secondary" style={{fontSize: '14px'}}>
                            <p style={{margin: '5px 0'}}>{item.item.name}</p>
                            <p style={{margin: '5px 0'}}>
                                ${item.price} x {item.quantity}
                                <span style={{color: 'black', fontWeight: 'bold'}}>
                                    {`   \$${(item.price * item.quantity).toFixed(2)}`}
                                </span>
                            </p>
                        </div>
                        <img src="/images/icon-delete.svg" alt="del" />
                    </div>
                ))}      
            </div>
            }
            <div style={actionStyle}>
                <MyButton title="Checkout" width="280px" onClick={action} />
            </div>
        </Paper>
    );
};

export default BasketCard;