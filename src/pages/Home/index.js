import { Layout, Spin } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import ScrollTop from "../../components/modules/ScrollTop/ScrollTop.js";
import EditProduct from "../Edit/index.js";
import ProductDetail from "../ProductDetail/index.js";

const FooterCP = React.lazy(() =>
  import("../../components/layouts/Footer/index.js")
);
const HeaderCP = React.lazy(() =>
  import("../../components/layouts/Header/index.js")
);
const SiteBarCP = React.lazy(() =>
  import("../../components/layouts/SiteBar/index.js")
);
const ProductsList = React.lazy(() => import("../ProductList/index.js"));
const AddProduct = React.lazy(() => import("../AddProduct/index.js"));
const Account = React.lazy(() => import("../Account/index.js"));
const DashBoard = React.lazy(() => import("../Dashboard/index.js"));

function Home() {
  return (
    <Layout className="home">
      <HeaderCP />
      <Layout className="home-main">
        <SiteBarCP />
        <Layout className="home-content">
          <Content className="site-layout-background">
            <ScrollTop />
            <Suspense fallback={<Spin />}>
              <Switch>
                <Route path="/products/add">
                  <AddProduct />
                </Route>
                <Route path="/account">
                  <Account />
                </Route>
                <Route path="/products/edit/:id">
                  <EditProduct />
                </Route>
                <Route path="/products/detail/:id">
                  <ProductDetail />
                </Route>
                <Route path="/products">
                  <ProductsList />
                </Route>
                <Route path="/">
                  <DashBoard />
                </Route>
              </Switch>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
      <FooterCP />
    </Layout>
  );
}

export default Home;
