import { Navigate } from "react-router-dom";
function Menu({ active, setActive }) {

  const navigate = Navigate();

  const links = [{ id: 1, name: "Health", value: "health" }];

  // function onClick(props) {
    
  //   setActive(props.links.id);
  //   navigate(props.links.value)
  //   // setCategory("health")
  // }

  return (
    <nav className="menu">
      <ul>
        {links.map((links) => (
          <li
            key={links.id}
            className={active === links.id ? "active" : "inactive"}
            onClick={() => {
              navigate(links.value)
            }}
          >
            <h3>Start Your Day with Healthy News</h3>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Menu;
