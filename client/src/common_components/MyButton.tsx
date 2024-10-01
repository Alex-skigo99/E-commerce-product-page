import './myButton.css';

interface MyButtonProps {
    image?: string;
    title: string;
    width?: string;
    onClick: () => void;
};
const MyButton = (props: MyButtonProps) => {
    const { image, title, width, onClick } = props;
    const styleButton = {
        width: width || '100%',
    };
    return (
        <button className='myButton' style={styleButton} onClick={onClick}>
            {image && <img src={image} alt='image' style={{marginRight: '20px'}} />}
            {title}
        </button>
    );
};

export default MyButton;