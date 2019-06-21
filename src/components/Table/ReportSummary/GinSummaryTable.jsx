import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table ,Icon ,Tag } from 'antd';




export const data = [
    {
        gin_id: "24674",
        title: "egestas@justonecante.org"
    },
    {
        gin_id: "24673",
        title: "erat.eget.tincidunt@idsapienCras.org"
    },
    {
        gin_id: "24672",
        title: "Nam.ligula@quamvel.net"
    },
];

class GinSummaryTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
       
    }
    
    render() {
        const columns = [
            {
                title: 'GIN',
                dataIndex: 'gin',
              
            },
            {
                title: 'Unplanned',
                dataIndex: 'unplanned',
              
            },
            {
                title: 'Planned',
                dataIndex: 'planned',
              
            },
            
        ];

        return (
            <div>
               
                <br />
                <Table  columns={columns} dataSource={data} pagination = {false} style={{ width: 500 ,marginLeft: 300}}  />
            </div>
        )

    }

}
export default GinSummaryTable;


