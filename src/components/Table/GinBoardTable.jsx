import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table ,Icon ,Tag, Button } from 'antd';
import '../css/Position.css'


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

class GinBoardTable extends React.Component {
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
        const filters_gin_id = [];
        for(let i = 0 ; i < data.length;i++){
        filters_gin_id.push({
            text: data[i].gin_id,
            value : data[i].gin_id
            });
        }
       
        const columns = [
            {
                title: 'GIN ID',
                dataIndex: 'gin_id',
                filters : filters_gin_id,
                onFilter: (value, record) => record.gin_id.indexOf(value) === 0,
                sorter: (a, b) => a.gin_id - b.gin_id,
                sortDirections: ['descend','ascend' ],
                width: 8,
                render: gin_id => (
                    <span>
                      <a href="/ginnumform/">
                       
                       
                        <Tag  color= "#69C4B2" key={gin_id}>
                        
                        {gin_id.toUpperCase()}
                        </Tag> 
                      
                        </a>
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
                title: 'Status',
                dataIndex: 'status',
            },
            {
                title: 'Impact',
                dataIndex: 'impact',
            },
            {
                title: 'Lost Booking',
                dataIndex: 'lost_booking',
            },
            {
                title: 'Team',
                dataIndex: 'team',
            },
            {
                title: 'Manager',
                dataIndex: 'manager',
            },
            {
                title: 'Leadership',
                dataIndex: 'leadership',
            },
            {
                title: 'GIN Open Date',
                dataIndex: 'gin_open_date',
                width : 4
            },
            {
                title: 'GIN Open Time',
                dataIndex: 'gin_open_time',
                width : 4
            },
            {
                title: 'GIN Close Date',
                dataIndex: 'gin_close_date',
                width : 4
            },
            {
                title: 'GIN Close Time',
                dataIndex: 'gin_close_time',
                width : 4
            }, 
            {
                title: 'Incident Log',
                dataIndex: 'incident_log',
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
export default GinBoardTable;


