import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import Countries from "../components/Countries/Countries";
import Main from "../layout/Main";
import CountryDetails from "../components/CountryDetails/CountryDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/countries",
        loader: () => fetch("https://restcountries.com/v3.1/all"),
        element: <Countries />,
      },
      {
        path: "/countryDetails/:countryId",
        loader: ({ params }) => {
          return fetch(
            `https://restcountries.com/v3.1/alpha/${params.countryId}`
          );
        },
        element: <CountryDetails></CountryDetails>,
      },
    ],
  },
]);
