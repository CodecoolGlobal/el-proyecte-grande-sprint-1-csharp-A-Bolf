import TicketStatusChart from "./TicketStatusChart";
import TicketCard from "./TicketCard";
import AuthContext from "./Context/AuthProvider";
import { useContext } from "react";
const DashBoard = ({ updates, StatusCounts, onTicketDelete }) => {
  const { auth } = useContext(AuthContext);
  return (
    <div className="container justify-content-center">
      <div className="text-center updates ">
        <div className="col">
          <p>Updates:</p>
          {updates.map((update) => (
            <TicketCard
              key={update.id}
              update={update}
              onDelete={onTicketDelete}
            />
          ))}
        </div>
        <p>{auth.user}</p>
      </div>
      <TicketStatusChart StatusCounts={StatusCounts} />
    </div>
  );
};
export default DashBoard;
