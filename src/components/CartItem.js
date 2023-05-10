import PropTypes from 'prop-types';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { increase, removeItem, decrease } from '../features/cart/cartSlice';

const CartItem = ({
  id, title, price, img, amount,
}) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">
          $
          {price}
        </h4>
        <button
          type="button"
          className="remove-btn"
          onClick={() => { dispatch(removeItem(id)); }}
        >
          remove
        </button>
      </div>
      <div>
        <button type="button" className="amount-btn" onClick={() => dispatch(increase({ id }))}>
          <BsChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          type="button"
          className="amount-btn"
          onClick={() => {
            if (amount === 1) return dispatch(removeItem(id));
            return dispatch(decrease({ id }));
          }}
        >
          <BsChevronDown />
        </button>
      </div>
    </article>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default CartItem;
