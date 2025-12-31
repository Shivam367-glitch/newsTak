import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoordinate } from "../../features/loc/locThunks";
import { fetchWeather } from "../../features/weather/weatherThunks";
import { loc } from "../../features/loc/locSelectors";
function Hero() {
  const dispatch = useDispatch();
  const location = useSelector(loc);

  useEffect(() => {
    dispatch(fetchCoordinate());
  }, [dispatch]);


  useEffect(() => {
    if (location) {
      dispatch(fetchWeather());
    }
  }, [location, dispatch]);

  return (
   <div className='container-fluid  d-flex flex-column justify-content-center align-items-center hero_container ' >
      <h1>News Tak</h1>
      <h5><strong>Stay Informed:</strong> Explore Our News Website with a Wide Range of Categories</h5>
    </div>
  );
}

export default Hero;
