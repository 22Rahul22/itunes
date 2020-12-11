import { Input } from 'antd';
import React from 'react';
import './Header.css';

const { Search } = Input;

const Header = ({loadStatus, handleSearch }) => {
    return (
        <div className={`${loadStatus==='beforeLoad' ? 'navbar-middle' : 'navbar-fixed'}`}>
            <nav className={`${loadStatus==='beforeLoad' ? '' : 'nav-bg'}`}>
                <div className="nav-wrapper">
                    <div className="header-search-wrapper">
                        <Search placeholder="Search Itunes" onSearch={e => handleSearch(e)} enterButton />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;