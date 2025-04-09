import {useState,useEffect} from 'react'
import './Output.css'
import { Link } from 'react-router-dom'
import logo from '../../../assets/Images/logo.png'
import ser from '../../../assets/Images/search.png'
import shirt from '../../../assets/Images/shirt.png'
import meesho from '../../../assets/Images/meesho-1.png'
import shirt_1 from '../../../assets/Images/shirt-1.png'
import flip from '../../../assets/Images/flipkart.png'
import jeans from '../../../assets/Images/jeans.png'
import ama from '../../../assets/Images/amazon.png'
import shirt_3 from '../../../assets/Images/shirt3.png'
import flip_1 from '../../../assets/Images/flipkart-1.png'
import top from '../../../assets/Images/top.png'
import cancel from '../../../assets/Images/cancel.png'



const suggestions=["Shirt","Phone","Electronics"]
const Output = () => {
    const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSelect = (suggestion) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
  };
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };


  return (
    
    <div className='navbar-card'>
        <div className='nav-card'>
        <img src={ser} alt=''/><input type="text" placeholder='Search or ask a question' value={query}
          onChange={handleChange}/>
        </div>
        {filteredSuggestions.length > 0 && (
        <ul className="suggestions-list">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSelect(suggestion)}>
              {suggestion}
              
            </li>
          ))}
        </ul>
      )}
      <div className='l-card'>
        <img src={logo} alt=''/>
      </div>
      <div className='mega-cart'>
        <h1>Mega offer</h1>
      </div>
      <div className='time-cart'>
        <h1>{formatTime(time)}</h1>
      </div>
      <div className='sh-cart'>
        <img src={shirt} alt=''/>
        <h1>Trendy Popcon Men's Shirt</h1>
        <h2><Link to="https://www.meesho.com/trendy-popcon-mens-shirt/p/6q39x4">shop now</Link></h2>
      </div>
      <div className='meesho'>
        <img src={meesho} alt=''/>
      </div>
      <div className='image'>
        <img src={shirt_1} alt=''/>
        <h1>Men Regular Fit Self Design Button Down Collar Casual Shirt</h1>
        <h2><Link to="https://www.flipkart.com/deelmo-men-self-design-casual-white-shirt/p/itm8c9eefe1c2e73?pid=SHTH725FGRZAQ53M&lid=LSTSHTH725FGRZAQ53M5TWYML&marketplace=FLIPKART&fm=factBasedRecommendation%2FrecentlyViewed&iid=R%3Arv%3Bpt%3App%3Buid%3A0da23876-1023-11f0-9c6b-3d3c82c9d7fc%3B.SHTH725FGRZAQ53M&ppt=pp&ppn=pp&ssid=zeya3jeekw0000001743640275140&otracker=pp_reco_Recently%2BViewed_2_40.productCard.RECENTLY_VIEWED_DEELMO%2BMen%2BSelf%2BDesign%2BCasual%2BWhite%2BShirt_SHTH725FGRZAQ53M_factBasedRecommendation%2FrecentlyViewed_1&otracker1=pp_reco_PINNED_factBasedRecommendation%2FrecentlyViewed_Recently%2BViewed_DESKTOP_HORIZONTAL_productCard_cc_2_NA_view-all&cid=SHTH725FGRZAQ53M">shop now</Link></h2>
      </div>
      <div className='dd'>
        <img src={flip} alt=''/>
      </div>
      <div className='jean-cart'>
        <img src={jeans} alt=''/>
        <h1>KOTTY Men's Straight Jeans</h1>
        <h2><Link to="https://www.amazon.in/KOTTY-Regular-Distressed-Fashionable-Trendy/dp/B0DWJZ9P7M">shop now</Link></h2>
      </div>
      <div className='ama-card'>
        <img src={ama} alt=''/>
      </div>
      <div className='box-cart'>
        <Link to="https://www.flipkart.com/halomens-men-self-design-solid-casual-multicolor-shirt/p/itm8b3a2e74f7bdd?pid=SHTHFYNYMWCXMDH4&lid=LSTSHTHFYNYMWCXMDH4QOKTM0&marketplace=FLIPKART&fm=factBasedRecommendation%2FrecentlyViewed&iid=R%3Arv%3Bpt%3App%3Buid%3A0da23876-1023-11f0-9c6b-3d3c82c9d7fc%3B.SHTHFYNYMWCXMDH4&ppt=pp&ppn=pp&ssid=zeya3jeekw0000001743640275140&otracker=pp_reco_Recently%2BViewed_1_40.productCard.RECENTLY_VIEWED_HaloMens%2BMen%2BSelf%2BDesign%252C%2BSolid%2BCasual%2BMulticolor%2BShirt_SHTHFYNYMWCXMDH4_factBasedRecommendation%2FrecentlyViewed_0&otracker1=pp_reco_PINNED_factBasedRecommendation%2FrecentlyViewed_Recently%2BViewed_DESKTOP_HORIZONTAL_productCard_cc_1_NA_view-all&cid=SHTHFYNYMWCXMDH4"><img src={shirt_3} alt=''/></Link>
        <h1>Men Regular Fit Self Design, Solid Lapel Collar Casual Shirt  (Pack of 2)</h1>
        <h2>₹369</h2>
        <h3>3.9</h3>
       </div>
       <div className='er-cart'>
        <img src={flip_1} alt=''/>
       </div>
       <div className='box1-cart'>
        <img src={top} alt=''/>
        <h1>3pcsSet Casual Minimalist Retro American Style English Text Graphic Cropped Bodysuit, Women Summer</h1>
        <h2>₹293</h2>
        <h3>3.7</h3>

       </div>
       <div className='www-cart'>
        <Link to="https://www.meesho.com/3pcsset-casual-minimalist-retro-american-style-english-text-graphic-cropped-bodysuit-women-summer/p/8e0wpw"><img src={meesho} alt=''/></Link>
       </div>
       <div className='cancel-cart'>
        <Link to="/result"><img src={cancel} alt=''/></Link>
       </div>
     

      
    </div>
  )
}


export default Output
