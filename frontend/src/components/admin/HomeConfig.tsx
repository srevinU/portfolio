import "../../style/components/admin/HomeConfig.css";

export default function HomeConfig({
  homeData,
  setHomeData,
}: {
  homeData: { title: string; subTitle: string };
  setHomeData: Function;
}): JSX.Element {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setHomeData({ ...homeData, [e.target.name]: e.target.value });
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
            value={homeData.title}
            onChange={handleOnChange}
          />
          <h3>Subtitle</h3>
          <input
            type="text"
            name="subTitle"
            value={homeData.subTitle}
            onChange={handleOnChange}
          />
        </form>
      </div>
    </div>
  );
}
