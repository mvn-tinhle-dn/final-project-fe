import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Route, Switch } from 'react-router-dom';
import FooterCP from '../../components/layouts/Footer';
import HeaderCP from '../../components/layouts/Header';
import SiteBarCP from '../../components/layouts/SiteBar';
import ProductsList from '../ProductList';
import AddProduct from '../AddProduct';
import Account from '../Account';

function Home() {
  return (
    <Layout className='home'>
      <HeaderCP />
      <Layout className='home-main'>
        <SiteBarCP />
        <Layout className='home-content'>
          <Content className="site-layout-background">
            <Switch>
              <Route path='/home/add'><AddProduct /></Route>
              <Route path='/home/account'><Account /></Route>
              <Route path='/home'><ProductsList /></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
      <FooterCP />
    </Layout>
  );
}

export default Home;
