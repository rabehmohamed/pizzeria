import Button from "../../ui/Button";
import { useDispatch } from 'react-redux';
import { increaseQuantity , decreaseQuantity } from './cartSlice';

function UpdateItemQunatity({pizzaId, currentQuantity}) {
    const dispatch = useDispatch();

    return (
        <div className="flex gap-1 items-center md:gap-3">
            <Button type='round' onClick={()=> dispatch(decreaseQuantity(pizzaId))}>-</Button>
            <span>{currentQuantity}</span>
            <Button type='round' onClick={()=> dispatch(increaseQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQunatity
