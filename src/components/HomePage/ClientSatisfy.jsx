import { GiLovers } from "react-icons/gi";
import { FaUsersViewfinder } from "react-icons/fa6";

const ClientSatisfy = () => {
    return (
        <div className="mt-20 text-center">
            <h2 className="text-4xl font-bold text-orange-500">ETSY Activity</h2>
            <div className="stats stats-vertical md:stats-horizontal lg:stats-horizontal shadow mt-5">

                <div className="stat place-items-center">
                    <div className="stat-title">Total Sell</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">From January 1st to April 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <GiLovers className="text-2xl text-red-600" />
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsersViewfinder className="text-2xl" />
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Total Client</div>
                    <div className="stat-value text-secondary">4,200</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">New Client</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default ClientSatisfy;