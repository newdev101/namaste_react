import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>{"status "+error.status}</h1>
      <h3>{error.data}</h3>
    </div>
  );
};

export default Error;
