import PulseLoader from "react-spinners/PulseLoader";

function LoadScreen() {
  return (
    <div className="sweet-loading">
      <PulseLoader color={"#343A40"} loading={true} size={50} margin={40} />
    </div>
  );
}
export default LoadScreen;
