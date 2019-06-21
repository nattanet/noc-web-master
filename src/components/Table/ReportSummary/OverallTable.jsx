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

class OverallTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchString: "",
        };
       
    }
    componentDidMount() {
        this.setState({
            data: data
        });
        this.refs.search.focus();
    }

    handleChange() {
        this.setState({
            searchString: this.refs.search.value
        });
    }
   
    

    render() {
        const columns = [
            {
                title: 'Manager',
                dataIndex: 'Manager',
              
            },
            {
                title: 'This quarter',
                children: [
                    {
                      title: '%Uptime',
                      dataIndex: 'uptime',
                      
                    },
                    {
                        title: 'No.Booking Lost',
                        dataIndex: 'no.bookinglost',
                        
                    },
                    {
                        title: 'Total Book',
                        dataIndex: 'totalbook',
                        
                    },
                ]
            },
            {
                title: 'Last quarter',
                children: [
                    {
                      title: '%Uptime',
                      dataIndex: 'uptime',
                      
                    },
                    {
                        title: 'No.Booking Lost',
                        dataIndex: 'no.bookinglost',
                        
                    },
                    {
                        title: 'Total Book',
                        dataIndex: 'totalbook',
                        
                    },
                ]
            }
        ];

        return (
            <div>
               
                <br />
                <Table  columns={columns} dataSource={data}  bordered width = {30} pagination = {false} style={{ width: 1200 ,marginLeft: 300}}  />
            </div>
        )

    }

}
export default OverallTable;


