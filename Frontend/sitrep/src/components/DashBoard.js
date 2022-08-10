import Update from "./Update";
import TicketStatusChart from "./TicketStatusChart";
const DashBoard = ({ updates, StatusData }) => {
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
      <TicketStatusChart StatusData={StatusData} />
    </div>
  );
};
export default DashBoard;
