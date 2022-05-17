import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const FooterCP = React.lazy(() => import('../../components/layouts/Footer/index.js'));
const HeaderCP = React.lazy(() => import('../../components/layouts/Header/index.js'));
const SiteBarCP = React.lazy(() => import('../../components/layouts/SiteBar/index.js'));
const ProductsList = React.lazy(() => import('../ProductList/index.js'));
const AddProduct = React.lazy(() => import('../AddProduct/index.js'));
const Account = React.lazy(() => import('../Account/index.js'));
const DashBoard = React.lazy(() => import('../Dashboard/index.js'));

function Home() {
  return (
    <Layout className='home'>
      <HeaderCP />
      <Layout className='home-main'>
        <SiteBarCP />
        <Layout className='home-content'>
          <Content className="site-layout-background">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path='/home/add'><AddProduct /></Route>
                <Route path='/home/account'><Account /></Route>
                <Route path='/home/products'><ProductsList /></Route>
                <Route path='/home'><DashBoard /></Route>
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
