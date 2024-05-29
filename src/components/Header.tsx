import "../css/components/Header.css";

function Header({
  references,
}: {
  references: { home: any; projects: any; about: any; contact: any };
}): JSX.Element {
  const scrollTo = (ref: any) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="Header">
      <ul>
        <li className="MenuItem" onClick={() => scrollTo(references.home.ref)}>
          {references.home.name}
        </li>
        <li
          className="MenuItem"
          onClick={() => scrollTo(references.projects.ref)}
        >
          {references.projects.name}
        </li>
        <li className="MenuItem" onClick={() => scrollTo(references.about.ref)}>
          {references.about.name}
        </li>
        <li
          className="MenuItem"
          onClick={() => scrollTo(references.contact.ref)}
        >
          {references.contact.name}
        </li>
      </ul>
    </div>
  );
}

export default Header;
