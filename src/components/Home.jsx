import React from 'react';
import millify from 'millify';
import { Typography, Col, Row, Statistic } from 'antd';
import {Link} from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';

const {Title} = Typography;


const Home = () => {
  // const {data, isFetching} = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if (isFetching) return 'Loading...';

  return (
    <>
        <Title level={2} className="heading">Global Crypto Stats</Title>
        <Row>
            <Col span={12}>
                <Statistic title="Total Cryptocurrencies" value={globalStats.total}/>
                <Statistic title="Total Exchanges" value={globalStats.exchanges} />
                <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/>
                <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
                <Statistic title="Total Cryptocurrencies" value={millify(globalStats.totalMarkets)} />
            </Col>
        </Row>
    </>
  )
}

export default Home