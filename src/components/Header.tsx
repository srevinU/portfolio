import headerMenu from "../utils/struc/headerMenu";
import "../css/components/Header.css"

function Header(): JSX.Element {
  return (
    <div className="Header">
        { headerMenu.map(menuItem => 
            <a className="MenuItem" href={ menuItem.ref } key={ menuItem.key }> 
                { menuItem.label } 
            </a>) 
        }
    </div>
  );
}

export default Header;
