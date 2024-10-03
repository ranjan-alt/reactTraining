import Navbar from "../components/Navbar/Navbar";
import Routers from "../Routes/Routers";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routers />
      </main>
    </>
  );
};

export default Layout;
