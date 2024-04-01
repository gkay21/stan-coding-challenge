import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  useNavigation,
  ScrollRestoration,
} from "react-router-dom";
import Home from "@pages/index";
import Series from "@pages/Series/Series";
import Movies from "@pages/Movies/Movies";
import NotFound from "./pages/NotFound/NotFound";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import Nav from "./components/Nav/Nav";
import PageTitle from "./components/PageTitle/PageTitle";
import Footer from "./components/Footer/Footer";
import { styled } from "styled-components";
import { horizontalPadding } from "./theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  padding: 25px ${(props) => props.theme.horizontalPadding.xxl};
  ${horizontalPadding}
`;

const Layout = () => {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <ScrollRestoration />
      <Nav />
      <PageTitle />
      <Content>
        {navigation.state !== "idle" ? <Loading /> : <Outlet />}
      </Content>
      <Footer />
    </Wrapper>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "series",
        element: <Series />,
        errorElement: <Error />,
        //loader: could be used here to only render the page once data is loaded
      },
      {
        path: "movies",
        element: <Movies />,
        errorElement: <Error />,
        //loader: could be used here to only render the page once data is loaded
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<Layout />} />;
}
