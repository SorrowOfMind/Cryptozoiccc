import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Card, Input} from 'antd';
import millify from 'millify';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  
  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);
    
    const filteredData = cryptosList?.data?.coins.filter(coin => coin.name.toLowerCase().includes(searchItem.toLowerCase()));
    
    setCryptos(filteredData);
  }, [searchItem, cryptosList]);
  
  if (isFetching) return "Loading...";

  return (
    <>
    {!simplified && (
      <div className="search-crypto">
        <Input placeholder="Search cryptocurrency" onChange={e => setSearchItem(e.target.value)}/>
      </div>
    )}
      <Row gutter={[30,30]} className="crypto-card-container">
        {cryptos?.map((curr) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={curr.id}>
              <Link to={`/crypto/${curr.id}`}>
                <Card 
                  title={`${curr.rank}. ${curr.name}`}
                  extra={<img className="crypto-image" src={curr.iconUrl}/>}
                  hoverable
                >
                  <p>Price: {millify(curr.price)}</p>
                  <p>Market Cap: {millify(curr.marketCap)}</p>
                  <p>Daily change: {millify(curr.change)}</p>
                </Card>
              </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies