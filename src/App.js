
import React from 'react';
import starlinkLogo from './images/starlink_logo.svg';
import footbackground from './images/stars_footer.jpg';
import { Layout } from 'antd';
import Main from './components/Main';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <img src={starlinkLogo} className="App-logo" alt="logo" />
        <p className="title">
          StarLink Tracker
        </p>
      </Header>
      <Content>
        <Main />
      </Content>
      <Footer >
        <span className = "annotation">@2020 StarLink Tracker. All Rights Reserved. Website Made by Shize Li</span>
      </Footer>
    </Layout>
  );
}

export default App;






