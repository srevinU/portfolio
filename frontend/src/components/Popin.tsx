import "../style/components/PopIn.css";
import { PopInT } from "../utils/types/PopIn";

function Popin({
  popInData,
  isMobile,
}: {
  popInData: PopInT;
  isMobile: boolean;
}): JSX.Element {
  const popinMessageStyle: { [key: string]: { backgroundColor: string } } = {
    "200": { backgroundColor: "green" },
    "201": { backgroundColor: "green" },
    ERROR: { backgroundColor: "red" },
  };

  return (
    <div
      className={`popin ${popInData.active ? "active" : ""}`}
      style={{
        ...(popinMessageStyle[popInData.statusCode.toString()] ??
          popinMessageStyle["ERROR"]),
        width: isMobile ? "100%" : "20%",
        left: isMobile ? "0" : "40%",
      }}
    >
      <p>{popInData.message}</p>
    </div>
  );
}

export default Popin;
