import React from 'react';
import { Card } from 'antd';
import './items.css'
const { Meta } = Card;

const Items = ({item}) => {
    const thumbnail = item.artworkUrl60.slice(0, -11).concat("400x400bb.jpg")
    return(
        <Card hoverable style={{width: "auto",marginBottom:"50px", marginRight:"20px", textAlign:"left"}} cover={<img src={thumbnail} alt="AlbumArt" />}>
            <Meta title={item.trackName} description={item.artistName}/>
            <a className="view-button" href={item.trackViewUrl}>view</a>
        </Card>
    );
}

export default Items;