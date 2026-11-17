import RestaurantList from './RestaurantList';
// import restaurantList from '../utils/mockData';
import { useState ,useEffect} from 'react';
import Shimmer from './Shimmer';

let Body =  () => {

    let [listOfRestaurants,setListOfRestaurants] = useState([]);
    let [filteredRestaurants,setFilteredRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    let fetchData = async ()=>{

        let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
        // console.log(data);
        let jsonData = await data.json();

        let newRestaurantList = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setListOfRestaurants(newRestaurantList);
        setFilteredRestaurants(newRestaurantList);
    }

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="p-2 flex justify-center gap-4 border-solid border-2 border-gray-200">
                <div className="center">
                    <input type="text" placeholder=" Search for restaurants" onChange={
                        (e)=>{
                            console.log(e.target.value);
                            let searchText = e.target.value;
                            let filteredList = listOfRestaurants.filter((res)=>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurants(filteredList);
                        }
                    } />
                </div>
                <div>
                    <button className="cursor-pointer" onClick={
                        ()=>{
                            let filteredList = filteredRestaurants.filter((res)=> res.info.avgRating > 4);
                            setFilteredRestaurants(filteredList);
                        }
                    }>Top Rated Restarant</button>
                </div>
                <div>
                    <button className="cursor-pointer" onClick={
                        ()=>{
                            setFilteredRestaurants(listOfRestaurants);
                        }
                    }>Reset All</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 p-4 m-4">
                {
                    filteredRestaurants.map((restaurant) => {
                      return <RestaurantList key={restaurant.info.id} resList = {restaurant} />;
                    })
                }                
            </div>
        </div>
    );
};

export default Body;