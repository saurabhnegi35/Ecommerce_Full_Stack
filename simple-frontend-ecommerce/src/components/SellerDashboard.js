import { useParams } from "react-router-dom";

const SellerDashboard = () => {
  const { userId } = useParams();
  console.log(userId);
  return (
    <div className="seller-dashboard">
      <div className="">
        <h1> Hello Seller, Welcome to your Store</h1>
        
      </div>
    </div>
  );
};

export default SellerDashboard;
