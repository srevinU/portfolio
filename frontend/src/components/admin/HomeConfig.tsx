import { HomeForm } from "../../utils/entities/HomeForm";
import "../../style/components/admin/HomeConfig.css";

export default function HomeConfig({
  homeContent,
  handleHomeDataChange,
}: {
  homeContent: HomeForm;
  handleHomeDataChange: Function;
}): JSX.Element {
  return (
    <div className="home_config">
      <h2 className="section_title">Home</h2>
      <div className="section_home">
        <form className="admin_form">
          <h3 className="home_title">Title (EN)</h3>
          <input
            type="text"
            name="title"
            data-testid="title"
            value={homeContent.EN.title}
            onChange={(event) => handleHomeDataChange(event, "EN")}
          />
          <h3>Subtitle (EN)</h3>
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle"
            value={homeContent.EN.subtitle}
            onChange={(event) => handleHomeDataChange(event, "EN")}
          />
          <h3 className="home_title">Titre (FR)</h3>
          <input
            type="text"
            name="title"
            data-testid="titre"
            value={homeContent.FR.title}
            onChange={(event) => handleHomeDataChange(event, "FR")}
          />
          <h3>Sous-titre (FR)</h3>
          <input
            type="text"
            name="subtitle"
            data-testid="sous_titre"
            value={homeContent.FR.subtitle}
            onChange={(event) => handleHomeDataChange(event, "FR")}
          />
        </form>
      </div>
    </div>
  );
}
