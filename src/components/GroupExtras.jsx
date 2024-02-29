import React from "react";
import EndlessExtras from "./EndlessExtras";
import FunFreebies from "../assets/fun-freebies.jpg";
import OrderPay from "../assets/order-and-pay-ahead.jpg";
import GetFree from "../assets/get-to-free-faster.jpg";
import { Link } from "react-router-dom";

const GroupExtras = () => {
  return (
    <React.Fragment>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 lg:gap-y-0 gap-y-10">
        <EndlessExtras
          img={FunFreebies}
          title={"Fun Freebies"}
          text={
            "Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills."
          }
          link={<Link>Learn more</Link>}
        />
        <EndlessExtras
          img={OrderPay}
          title={"Order & pay ahead"}
          text={
            "Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores."
          }
          link={<Link>Learn more</Link>}
        />
        <EndlessExtras
          img={GetFree}
          title={"Get to free faster"}
          text={
            "Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games."
          }
          link={<Link>Learn more</Link>}
        />
      </div>
    </React.Fragment>
  );
};

export default GroupExtras;
