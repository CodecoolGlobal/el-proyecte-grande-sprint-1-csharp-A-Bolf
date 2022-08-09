import Update from "./Update";
import TicketStatusChart from "./TicketStatusChart";

const DashBoard = ({ updates }) => {
  return (
    <>
      <div className="text-center updates">
        <div className="col">
          <p>Updates:</p>
          {updates.map((update) => (
            <Update key={update.id} update={update} />
          ))}
        </div>
      </div>
      <TicketStatusChart />
    </>
  );
};
export default DashBoard;
