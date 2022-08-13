import Update from "./Update";
import TicketStatusChart from "./TicketStatusChart";
const DashBoard = ({ updates, StatusCounts }) => {
  return (
    <div className="container justify-content-center">
      <div className="text-center updates ">
        <div className="col">
          <p>Updates:</p>
          {updates.map((update) => (
            <Update key={update.id} update={update} />
          ))}
        </div>
      </div>
      <TicketStatusChart StatusCounts={StatusCounts} />
    </div>
  );
};
export default DashBoard;
