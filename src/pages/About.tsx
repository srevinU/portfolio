import "../css/pages/About.css";

function About({ reference }: { reference: any }): JSX.Element {
  return (
    <div className="about_page" ref={reference}>
      <section className="about_content"></section>;
    </div>
  );
}

export default About;
