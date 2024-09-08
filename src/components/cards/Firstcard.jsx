import './firstcard.scss'
const Firstcard = ({ type }) => {
    let data;
    switch(type){
        case "order":
            data={
                title: "Order Sync Successful!",
                description: "Your order details from the last 30 days have been successfully synced. Check them out now!",
                buttonText: "Explore Your Orders"
            }
            break;
        case "notification":
            data = {
                title: "Customize Customer Notification!",
                description: "Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers",
                buttonText: "Configure Notifications"
            };
            break; 
        case "tracking":
            data = {
                title: "Your Trackin Link has been",
                description: "Include the Link to Your Store's Navigation Menu.",
                copyButton: "Copy Link",
                buttonText: "Go To Navigation Menu"
            };
            break;
        default:
            break;
    }
  return (
    <div className="card">
        <span>{data.title}</span>
        <p>{data.description}</p>
        <div className="buttons">
            {data.copyButton && <button id='copy'>{data.copyButton}</button>}
            <button>{data.buttonText}</button>
        </div>
    </div>
  )
}

export default Firstcard
