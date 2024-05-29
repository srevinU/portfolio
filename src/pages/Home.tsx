import "../css/pages/Home.css";

function Home({ reference }: { reference: any }): JSX.Element {
  return (
    <div className="home_page" ref={reference}>
      <section className="home_content">
        <h1 className="home_title">Cedric Segura</h1>
        <h5 className="home_subtitle">Software Engineer, NodeJs Developer.</h5>
      </section>
    </div>
  );
}

export default Home;
