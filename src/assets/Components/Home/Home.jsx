import React from 'react';
import './Home.css';
import sathya from '../../../assets/Images/home.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container"> {/* Changed nav to div for general homepage structure */}
      <div className="sathya">
        <img src={sathya} alt="Sathya's Image" /> {/* Added descriptive alt text */}
      </div>
      <div className="ssp">
        <h1>S.SATHYA PRAKASH</h1>
        <h2>B.TECH IT</h2>
        <h3>DR. SIVANTHI ADITANAR COLLEGE OF ENGINEERING</h3>
      </div>
      <nav className="ssp-card">
        <h1>
          <Link to="/Name">Click To View</Link>
        </h1>
      </nav>
    </div>
  );
};

export default Home;
