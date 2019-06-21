import React, { Children } from 'react';
import { Table, Badge, Menu, Dropdown, Icon, Button } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>Action 1</Menu.Item>
        <Menu.Item>Action 2</Menu.Item>
    </Menu>
);


const data = [
    {
        alert_id: "24674",
        title: "egestas@justonecante.org",      
    },
    {
        alert_id: "24674",
        title: "egestas@justonecante.org",
        oncall_team : "24673",
    },
  
   
];

const subcolumns = [
    { title: 'Oncall Team', dataIndex: 'oncall_team', key: 'oncall_team' },
    { title: 'Oncall Name', dataIndex: 'oncall_name', key: 'oncall_name' },
    { title: 'Escalation Date', dataIndex: 'escalation_date', key: 'escalation_date' },
    { title: 'Escalation Time', dataIndex: 'escalation_time', key: 'escalation_time' },
    { title: 'Oncall Order', dataIndex: 'oncall_order', key: 'oncall_order' },
    { title: 'Oncall Result', dataIndex: 'oncall_result', key: 'oncall_result' },
    { title: 'Noc Name', dataIndex: 'noc_name', key: 'noc_name' },
    { title: 'Informed by', dataIndex: 'informed_by', key: 'informed_by' },
    { title: 'Remark', dataIndex: 'remark', key: 'remark' },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a href="javascript:;"><Button type="danger" icon="delete"></Button></a>,
    },
];

class EscalationsTable extends React.Component {
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
                return data.alert_id.toLowerCase().match(search)  || data.oncall_team.toLowerCase().match(search) 
                ;
            });

        }
       
        const columns = [
            { title: 'Alert ID', dataIndex: 'alert_id', key: 'alert_id' },
            { title: 'Alert Ref.', dataIndex: 'alert_ref', key: 'alert_ref', width: 300 },
            { title: 'Alert Date', dataIndex: 'alert_date', key: 'alert_date' },
            { title: 'Alert Time', dataIndex: 'alert_time', key: 'alert_time' },
            { title: 'Incident Detail', dataIndex: 'incident_detail', key: 'incident_detail' },
           
            

        ];
        return (
            <div>
            <input 
                   style = {{marginLeft : 1700}}
                    type="text"
                    value={this.state.searchString}
                    ref="search"
                    onChange={this.handleChange}
                    placeholder=""
                />
            <Table
                
                className="components-table-demo-nested"
                columns={columns}
                expandedRowRender = {record => <p style={{ margin: 0 }}>{<Table columns={subcolumns} pagination={false} />}</p>}
                dataSource={_data}
            />
            </div>
        );
    }
}


export default EscalationsTable;