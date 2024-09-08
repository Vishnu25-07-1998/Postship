import './home.scss'
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar'
import Firstcard from '../../components/cards/Firstcard'
import Secondcard from '../../components/cards/Secondcard'
import Thirdcard from '../../components/cards/Thirdcard'
import ViewTimelineOutlinedIcon from '@mui/icons-material/ViewTimelineOutlined';
import Firstbox from '../../components/boxes/Firstbox'
import Secondbox from '../../components/boxes/Secondbox'
import Thirdbox from '../../components/boxes/Thirdbox'
import Graphs from '../../components/graphs/Graphs';
const Home = () => {
  const [activeButton, setActiveButton] = useState('Lifetime');
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }
  return (
    <div className="home">
      <Navbar/>
      <div className="first_section">
        <h2> Welcome, John Wick!!</h2>
        <div className="cards">
          <Firstcard type="order"/>
          <Firstcard type="notification"/>
          <Firstcard type="tracking"/>
        </div>
      </div>
      <div className="second-section">
        <h3>Instant Dive into Your Performance Metrics</h3>
        <div className="options">
          <button className={`option-button ${activeButton === 'Lifetime' ? 'active' : ''}`} onClick={() => handleButtonClick("Lifetime")}>Lifetime</button>
          <button className="option-button">Last Week</button>
          <button className="option-button">Last Month</button>
          <button className="option-button">Last Year</button>
          <button className="option-button">
            Customize Time Line
            <ViewTimelineOutlinedIcon />
          </button>
        </div>
        <div className="sub_contents">
          <Graphs/>
          <Secondcard/>
          <Thirdcard/>
        </div>
      </div>
      <div className="third-section">
        <h3>Discover the Heart of Our Functionality</h3>
        <div className="boxes">
          <Firstbox />
          <Secondbox />
          <Thirdbox />
        </div>
      </div>
    </div>
  )
}

export default Home
