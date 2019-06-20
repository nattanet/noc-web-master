import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table ,Icon ,Tag } from 'antd';
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

class AiBoardTable extends React.Component {
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
                        <Tag color= "#69C4B2" key={gin_id}>
                        {gin_id.toUpperCase()}
                        </Tag> 
                    </span>
                ),
            },
            {
                title: 'AI Number',
                dataIndex: 'ai_number',
               

            },
            {
                title: 'Fin Title',
                dataIndex: 'fin_title',


            },
            {
                title: 'Description',
                dataIndex: 'description',
                width: 8

            },
            {
                title: 'Action item',
                dataIndex: 'action_item',
                width: 8

            },
            {
                title: 'Owner',
                dataIndex: 'owner',
                width: 8

            },
            {
                title: 'Status',
                dataIndex: 'status',

            },
            {
                title: 'AI Due Date',
                dataIndex: 'ai_due_date',
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
                <Table columns={columns} dataSource={_data} onChange={onChange} scroll={{ x: 200 }}  />
            </div>
        )

    }

}
export default AiBoardTable;


