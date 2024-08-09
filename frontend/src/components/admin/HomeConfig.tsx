import { HomeForm } from "../../entities/HomeForm";
import "../../style/components/admin/HomeConfig.css";

export default function HomeConfig({
  homeContent,
  setHomeContent,
}: {
  homeContent: HomeForm;
  setHomeContent: Function;
}): JSX.Element {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setHomeContent({ ...homeContent, [e.target.name]: e.target.value });
  };
  return (
    <div className="home_config">
      <h2 className="section_title">Home</h2>
      <div className="section_home">
        <form className="admin_form">
          <h3 className="home_title">Title</h3>
          <input
            type="text"
            name="title"
            data-testid="title"
            value={homeContent.EN.title}
            onChange={handleOnChange}
          />
          <h3>Subtitle</h3>
          <input
            type="text"
            name="subTitle"
            data-testid="subTitle"
            value={homeContent.EN.subtitle}
            onChange={handleOnChange}
          />
        </form>
      </div>
    </div>
  );
}
