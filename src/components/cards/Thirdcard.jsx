import './thirdcard.scss'
import ViewStreamTwoToneIcon from '@mui/icons-material/ViewStreamTwoTone';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const Thirdcard = () => {
  return (
    <div className="third_card">
        <h4>Tracking Page Views Vs Orders</h4>
        <span>Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</span>
        <div className="box">
            <div className="left">
                <span>Orders</span>
                <span>80</span>
            </div>
            <div className="right">
                <ViewStreamTwoToneIcon />
            </div>
        </div>
        <div className="box">
        <div className="left">
                <span>Tracking page Views</span>
                <span>55</span>
            </div>
            <div className="right">
                <RemoveRedEyeOutlinedIcon />
            </div>
        </div>
    </div>
  )
}

export default Thirdcard
