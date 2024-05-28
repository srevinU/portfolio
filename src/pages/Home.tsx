import "../css/pages/Home.css";
import ToolInfo from "../components/ToolInfo";
import toolInfo from "../utils/struc/toolInfo";

function Home(): JSX.Element {
  return (
    <div className="Home">
      <ToolInfo title="Technos" tools={toolInfo} />
    </div>
  );
}

export default Home;
