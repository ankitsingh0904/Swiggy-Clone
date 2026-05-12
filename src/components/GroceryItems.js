import { CDN_URL } from "../utils/constants.js";
export const GroceryItems = (props) => {
  const { groceryData } = props;
  const { description, imageId } = groceryData;
  return (
    <div>
      <div className="mx-3.5 w-35 h-45">
        <img className="w-4/5 mx-4 p-2 mb-1" src={CDN_URL + imageId}></img>
        <p className="text-sm font-bold text-center">{description}</p>
      </div>
    </div>
  );
};
export const GroceryItems1 = (props) => {
  const { groceryData } = props;
  const { description, imageId } = groceryData;
  return (
    <div>
      <div className="mx-3.5 w-35 h-45">
        <img className="w-4/5 mx-4 p-2 mb-1" src={CDN_URL + imageId}></img>
        <p className="text-sm font-bold text-center">{description}</p>
      </div>
    </div>
  );
};
export const GroceryItems2 = (props) => {
  const { groceryData } = props;
  const { description, imageId } = groceryData;
  return (
    <div>
      <div className="mx-3.5 w-35 h-45">
        <img className="w-4/5 mx-4 p-2 mb-1" src={CDN_URL + imageId}></img>
        <p className="text-sm font-bold text-center">{description}</p>
      </div>
    </div>
  );
};
export const GroceryItems3 = (props) => {
  const { groceryData } = props;
  const { description, imageId } = groceryData;
  return (
    <div>
      <div className="mx-3.5 w-35 h-45">
        <img className="w-4/5 mx-4 p-2 mb-1" src={CDN_URL + imageId}></img>
        <p className="text-sm font-bold text-center">{description}</p>
      </div>
    </div>
  );
};
