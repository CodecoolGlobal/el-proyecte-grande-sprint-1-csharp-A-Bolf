const Update = ({ update }) => {
  let date = Date.parse(update.createdDate);
  date = new Date(date);
  date = date.toDateString();
  return (
    <div className="row">
      <p>{update.title}</p>
      <p>{update.description}</p>
      <p className="p-4">Created: {date}</p>
      <p className="p-4">Status: {update.status}</p>
      <hr
        className="rounded-circle"
        style={{ width: "100%", border: "2px solid #343a40" }}
      ></hr>
    </div>
  );
};

export default Update;
