import { Suspense, lazy } from "react";
import RootLayout from "~/layouts/RootLayout";
import Home from "./pages/Home";

const loader = (Component) => {
  return (
    <>
      <Suspense fallback={<div>Loading....</div>}>
        <Component {...props} />
      </Suspense>
    </>
  );
};

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
];

export default routes;
