import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity, getTotalCartPrice } from "./cartSlice";
import {formatCurrency} from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrrice= useSelector(getTotalCartPrice);

  if(!totalCartQuantity) return null;
  
  return (
    <div className="bg-stone-800 uppercase text-stone-200 
    px-4 py-4 sm:px-8 text-sm md:text-base flex items-center justify-between">
      <p className="font-semibold space-x-4 sm:space-x-8 text-stone">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrrice)}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;