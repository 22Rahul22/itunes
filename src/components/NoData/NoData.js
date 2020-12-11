import React from 'react';
import notFound from './notFound.png'
import './NoData.css'

const NoData = ({searchText}) => {
    return(
        <div className="noResult">
            <img width="400px" height="400px" src={notFound} alt="Not found" />
            <strong style={{fontSize:"30px", color:"white", padding:"0px 20px 40px 20px"}}>
                {`Oops, no result for '${searchText}'`}
            </strong>
        </div>
    );
}

export default NoData;