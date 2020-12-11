import React from 'react';
import {Row,Col} from 'antd';
import Items from '../items/items';

const ItemList = ({data}) => {
    console.log("Data itmes: ",data)
    return(
        <Row>

            {
                data.map(
                    (item, i) => (
                        <Col key={i} xl={4} lg={6} md={8} sm={10}>
                            <Items key={i} item={item}/>
                        </Col>
                    )
                )
            }

        </Row>
    );
}

export default ItemList;