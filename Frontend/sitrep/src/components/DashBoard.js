import { useState } from "react";
import Update from "./Update";

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
    </>
  );
};
export default DashBoard;
