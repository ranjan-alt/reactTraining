import Navbar from "../components/Navbar/Navbar";
import Routers from "../Routes/Routers";
import { store } from "../redux/store";
import { Provider } from "react-redux";

const Layout = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <main>
          <Routers />
        </main>
      </Provider>
    </>
  );
};

export default Layout;
