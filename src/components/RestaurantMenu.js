
import { useEffect, useState } from "react";
import menuData from "../utils/menuData.json";

const RestaurantMenu = () => {
const [restaurantInfo, setRestaurantInfo] = useState(null);
const [menuCategories, setMenuCategories] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
fetchMenu();
}, []);

const fetchMenu = () => {
try {
    // Step 1: Read the imported JSON data
    const jsonData = menuData;

    // Step 2: Find restaurant information
    const restaurantCard = jsonData.data.cards.find(
    (card) => card?.card?.card?.info?.id === "58049"
    );

    const restaurant = restaurantCard?.card?.card?.info;

    if (!restaurant) {
    throw new Error("Restaurant information not found");
    }

    // Step 3: Find the grouped menu card
    const groupedCard = jsonData.data.cards.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
    );

    const regularCards =
    groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    // Step 4: Extract menu categories
    const categories = regularCards
    .map((card) => card?.card?.card)
    .filter((category) => category?.itemCards);

    // Step 5: Update React state
    setRestaurantInfo(restaurant);
    setMenuCategories(categories);

    console.log("Restaurant Information:", restaurant);
    console.log("Menu Categories:", categories);
} catch (error) {
    console.error("Menu fetching failed:", error);
    setError(error.message);
} finally {
    setLoading(false);
}
};

if (loading) {
return <h2>Loading menu...</h2>;
}

if (error) {
return <h2>Error: {error}</h2>;
}

if (!restaurantInfo) {
return <h2>Restaurant not found</h2>;
}

return (
<div className="restaurant-menu">

    {/* Restaurant Information */}
    <div className="restaurant-details">
    <h1>{restaurantInfo.name}</h1>

    <h3>
        ⭐ {restaurantInfo.avgRating} Rating
    </h3>

    <p>
        {restaurantInfo.cuisines?.join(", ")}
    </p>

    <p>
        {restaurantInfo.costForTwoMessage}
    </p>
    </div>

    <hr />

    {/* Menu Categories */}
    <div className="menu-container">
    <h2>Menu</h2>

    {menuCategories.map((category) => (
        <div
        className="menu-category"
        key={category.categoryId || category.title}
        >
        <h3>
            {category.title} (
            {category.itemCards.length})
        </h3>

        {/* Individual Dishes */}
        {category.itemCards.map((item) => {
            const dish = item.card.info;

            return (
            <div
                className="menu-item"
                key={dish.id}
            >
                <div className="menu-item-details">
                <h4>{dish.name}</h4>

                <p>
                    ₹
                    {(
                    (dish.price ?? dish.defaultPrice ?? 0) / 100
                    ).toFixed(2)}
                </p>

                {dish.description && (
                    <p>{dish.description}</p>
                )}
                </div>

                <div className="menu-item-image">
                {dish.imageId && (
                    <img
                    src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/" +
                        dish.imageId
                    }
                    alt={dish.name}
                    width="100"
                    />
                )}
                </div>
            </div>
            );
        })}

        <hr />
        </div>
    ))}
    </div>
</div>
);
};

export default RestaurantMenu;
