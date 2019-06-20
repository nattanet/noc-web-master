import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table ,Icon ,Tag } from 'antd';
import '../css/Position.css'


export const data = [
    {
        request_id: "24674",
        title: "egestas@justonecante.org"
    },
    {
        request_id: "24673",
        title: "erat.eget.tincidunt@idsapienCras.org"
    },
    {
        request_id: "24672",
        title: "Nam.ligula@quamvel.net"
    },
];

class PendingRequestTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
            data: [],
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.itemList = data;
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
        let _data = this.state.data;
        let search = this.state.searchString.trim().toLowerCase();
        //search
        if (search.length > 0) {
            _data = _data.filter(function (data) {
                return data.gin_id.toLowerCase().match(search)  || data.title.toLowerCase().match(search)
                ;
            });

        }
        //filter
        const filters_request_id = [];
        for(let i = 0 ; i < data.length;i++){
        filters_request_id.push({
            text: data[i].request_id,
            value : data[i].request_id
            });
        }
       
        const columns = [
            {
                title: 'Request ID',
                dataIndex: 'request_id',
                filters : filters_request_id,
                onFilter: (value, record) => record.gin_id.indexOf(value) === 0,
                sorter: (a, b) => a.gin_id - b.gin_id,
                sortDirections: ['descend','ascend' ],
                width: 8,
                render: request_id => (
                    <span>
                        <Tag color= "#69C4B2" key={request_id}>
                        {request_id.toUpperCase()}
                        </Tag> 
                    </span>
                ),
            },
            {
                title: 'Title',
                dataIndex: 'title',
               

            },
            {
                title: 'Impact Summary',
                dataIndex: 'impact_sum',


            },
            {
                title: 'Service',
                dataIndex: 'service',
                width: 8

            },
            {
                title: 'Outage Start Date',
                dataIndex: 'outage_start_date',
                width: 8

            },
            {
                title: 'Outage Start Time',
                dataIndex: 'outage_start_time',
                width: 8

            },
            {
                title: 'Outage Finish Date',
                dataIndex: 'outage_finish_date',
                width: 8

            },
            {
                title: 'Outage Finish Time',
                dataIndex: 'outage_finish_time',

            },
            {
                title: 'Traffic Move',
                dataIndex: 'traffic move',
            },
            {
                title: 'Impact',
                dataIndex: 'impact',
            },
            {
                title: 'Team',
                dataIndex: 'team',
            },
            {
                title: 'DC',
                dataIndex: 'dc',
            },
            {
                title: 'Requester',
                dataIndex: 'requester',
            },
            {
                title: 'Request Open Date',
                dataIndex: 'request_open_date',
                width : 4
            },
            {
                title: 'Request Open Time',
                dataIndex: 'request_open_time',
                width : 4
            },
        ];

        function onChange(pagination, filters, sorter) {
            console.log('params', pagination, filters, sorter);
        }

        return (
            <div>
                <input 
                    className = "Searchpos"
                    type="text"
                    value={this.state.searchString}
                    ref="search"
                    onChange={this.handleChange}
                    placeholder=""
                />
                <Icon type="search" />
                <br />
                <br />
                <br />
                <Table columns={columns} dataSource={_data} onChange={onChange} scroll={{ x: 800 }}  />
            </div>
        )

    }

}
export default PendingRequestTable;


