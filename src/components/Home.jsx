import React from 'react';
import millify from 'millify';
import {Typography, Col, Row, Statistic} from 'antd';
import {Link} from 'react-router-dom';
import {useGetCryptosQuery} from '../services/cryptoApi';

import {Cryptocurrencies} from './Cryptocurrencies';
import {News} from './News';

const {Title} = Typography;


const Home = () => {
  const {data, isFetching} = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if (isFetching) return 'Loading...';

  return (
    <>
        <Title level={2} className="heading">Global Crypto Stats</Title>
        <Row>
            <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={globalStats.exchanges} /></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
            <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(globalStats.totalMarkets)} /></Col>
        </Row>
        <div className="home-heading-container">
          <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
          <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
        </div>
        <Cryptocurrencies simplified/>
        <div className="home-heading-container">
          <Title level={2} className="home-title">Latest Crypto News</Title>
          <Title level={3} className="show-more"><Link to="/news">Show more</Link></Title>
        </div>
        <News simplified/>
    </>
  )
}

export default Home