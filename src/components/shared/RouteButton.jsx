import { useNavigate } from "react-router-dom";

export function RouteButton(props) {
  const navigate = useNavigate();
  const route = props.route;

  function handleClick() {
    navigate(`/${route}`);
  }

  return (
    <button type="button" onClick={handleClick}>
      {titleCase(route)}
    </button>
  );
}

function titleCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
