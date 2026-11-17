import { RES_IMG } from '../utils/constant';

let RestaurantList = (props) => {
    let {resList} = props;
    return (
        <div className="flex flex-col items-center justify-center p-4 m-4 border-solid border-8 border-gray-200 rounded-lg w-60 wrap-anywhere">
            <img className="w-full h-48 object-cover rounded-lg p-2"
                src={ RES_IMG +resList.info.cloudinaryImageId}
                alt="Restaurant"
            />
            <h2>{resList.info.name}</h2>
            <p>⭐ {resList.info.avgRating} Stars</p>
            <p>{resList.info.cuisines.join(", ")}</p>
            <p>{resList.info.costForTwo}</p>
        </div>
    );
};

export default  RestaurantList;