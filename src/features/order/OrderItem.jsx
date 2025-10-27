// import PropTypes from "prop-types";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utilities/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  console.log(isLoadingIngredients);
  console.log(ingredients);

  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;

OrderItem.propTypes = {
  item: PropTypes.object,
  isLoadingIngredients: PropTypes.string,
  ingredients: PropTypes.string,
};
