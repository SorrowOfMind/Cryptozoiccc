import React from 'react';
import {Typography, Menu, Button, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons/lib/icons';

import icon  from '../images/crypto.png';

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo" >
                <Link to="/" >Cryptozoiccc</Link>
            </Typography.Title>
            {/* <Button className="menu-control-container">

            </Button> */}
        </div>
    </div>
  )
}

export default Navbar