import { useState, useEffect } from "react";
import routes from "~/router";
import { useRoutes } from "react-router-dom";

function App() {
  const contents = useRoutes(routes);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>{contents}</div>;
}

export default App;
