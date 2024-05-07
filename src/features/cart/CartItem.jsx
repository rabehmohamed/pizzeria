import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers"
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
import UpdateItemQunatity from "./UpdateItemQunatity";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { pizzeId ,name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQunatity pizzaId={pizzeId} currentQuantity={quantity}/>
        <Button type='small' onClick={()=>dispatch(deleteItem(pizzeId))}>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
