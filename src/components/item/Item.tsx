import Button from '@mui/material/Button';
import { CartItemType } from '../../App';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <div className='wrapper'>
        <img src={item.image} alt={item.title} />
        <div className='info'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button className='btn' onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </div>
);

export default Item;