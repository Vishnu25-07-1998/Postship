import './secondbox.scss'
import paypal from '../../assets/Paypal.png';
import analytics from '../../assets/Google analytics.png';
import Instagram from '../../assets/Instagram feed.png';
import Ali  from '../../assets/Ali reviews.png';
import tree  from '../../assets/tree.png';

const Secondbox = () => {
  return (
    <div className="secondbox">
        <div className="box_1">
            <h5>Exclusive Onboarding Support for High-Volume Brands</h5>
            <p>Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience and maximize the potential of our services</p>
            <button>Schedule A Call</button>
        </div>
        <div className="box_2">
            <h5>Explore Our Integrated Ecosystem</h5>
            <p>Discover a variety of popular integrations tailored for your convenience. Click to explore and integrate these powerful tools, directing you to our comprehensive Integrations.</p>
            <div className="images">
                <img src={paypal} alt="Paypal" />
                <img src={analytics} alt="Google Analytics" />
                <img src={Instagram} alt="Instagram" />
                <img src={Ali} alt="Ali" />
                <img src={tree} alt="Tree" />
            </div>
            <button>Explore Integrations</button>
        </div>

    </div>
  )
}

export default Secondbox
