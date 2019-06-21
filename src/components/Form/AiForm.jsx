import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Select, Checkbox, Row, Col, InputNumber } from 'antd';
import '../css/Position.css'
import ITList from './ITList';
import NonITList from './NonITList';
import DatePick from '../DatePicker/DatePicker';
import PlannedGinRequestForm from './PlannedGinRequestForm';





const { Option } = Select;
const { TextArea } = Input;

function onChange(date, dateString) {
    console.log(date, dateString);
  }


class AiForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            GIN_Number: '24818',
            Action_Item : '3',
            Status : '',
            Due_Date : '',
            Gin_Title : '',
            Description : '',
            ActionItem : '',
            Owner : '',
            ActionTaken : '',


            formLayout: 'horizontal'
        }; this.handleChangeGIN_Number = this.handleChangeGIN_Number.bind(this);
        this.handleChangeAction_Item = this.handleChangeAction_Item.bind(this);
        this.handleSelectStatus = this.handleSelectStatus.bind(this);
        this.handleSelectDueDate = this.handleSelectDueDate.bind(this);
        this.handleChangeGinTitle =  this.handleChangeGinTitle.bind(this)
        this.handleChangeDescription =  this.handleChangeDescription.bind(this)
        this.handleChangeActionItem =  this.handleChangeActionItem.bind(this)
        this.handleChangeOwner =  this.handleChangeOwner.bind(this)
        this.handleChangeActionTaken =  this.handleChangeActionTaken.bind(this)
    }

    handleChangeGIN_Number = (value) => {
        this.setState({GIN_Number: value}
        );
    }
    handleChangeAction_Item = (value) => {
        this.setState({Action_Item: value}
        );
    }
    handleSelectStatus(value) {
        this.setState({ Status: value }
        );
    }
    handleSelectDueDate = (value) => {
        this.setState({Due_Date: value }
        );
    }
    handleChangeGinTitle(event) {
        this.setState({ Gin_Title : event.target.value }
        );
    }
    handleChangeDescription(event) {
        this.setState({ Description : event.target.value }
        );
    }
    handleChangeActionItem(event) {
        this.setState({ ActionItem : event.target.value }
        );
    }
    handleChangeOwner(event) {
        this.setState({ Owner: event.target.value }
        );
    }
    handleChangeActionTaken(event) {
        this.setState({ ActionTaken : event.target.value }
        );
    }
   

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    };



    render() {
        const { formLayout } = this.state;
        const formItemLayout =
            formLayout === 'inline'
        return (
            <div>
            <br />
            <br />
            <br />
            <label style={ {fontSize :30 ,color : 'black' ,marginLeft: 80 }}>Action Item Form   </label>
            <br />
            <label style={{fontSize : 20 ,color : 'black' ,marginLeft: 80}}>Click<a href="/aiboard/"> Here</a> for AI board</label>
         
            <Form layout="inline" style={{marginTop : 30,marginLeft : 80}} onSubmit={this.handleSubmit}>
                <Row>
                    <Col span={5}><label className="black-text" >GIN Number  </label></Col>
                    <Col span={5}><label className="black-text" > Action Item</label></Col>
                    <Col span={5}><label className="black-text" > Status</label></Col>
                    <Col span={5}><label className="black-text" > Due Date</label></Col>
                </Row>
                <Row>
                    <Col span={5}><Form.Item >
                        <InputNumber style={{ width: 200 }} placeholder="24818" value={this.state.GIN_Number} onChange={this.handleChangeGIN_Number} />
                    </Form.Item></Col>
                    <Col span={5}><Form.Item >
                        <InputNumber style={{ width: 200 }} placeholder="3" value={this.state.Action_Item} onChange={this.handleChangeAction_Item} />
                    </Form.Item></Col>
                    <Col span={5}><Select defaultValue="Investigating" style={{ width: 200 }} onChange={this.handleSelectStatus}>
                        <Option value="Open">Open</Option>
                    </Select></Col>
                    <Col span={5}>
                        <DatePick value={this.state.Due_Date} onChange={this.handleSelectDueDate}/>
                    </Col>
                </Row>
                <Row >
                    <Col span={100}>
                        <Form.Item >
                            <label className="black-text" >GIN Title:  </label><br />
                            <Input style={{ width: 1000 }} value={this.state.Gin_Title} onChange={this.handleChangeGinTitle} 
                            placeholder="Some customer might get double charge" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Form.Item >
                        <label className="black-text" >Description :   </label>
                        <br />
                        <TextArea style={{ width: 1000, height: 100 }} placeholder="" value={this.state.Description} onChange={this.handleChangeDescription}/>
                    </Form.Item>
                </Row>
                <Row>
                    <Form.Item >
                        <label className="black-text" >Action Item :   </label>
                        <br />
                        <TextArea style={{ width: 1000, height: 100 }} placeholder="" value={this.state.ActionItem} onChange={this.handleChangeActionItem}/>
                    </Form.Item>
                </Row>
                <Row >
                    <Col span={100}>
                        <Form.Item >
                            <label className="black-text" >Owner:  </label><br />
                            <Input style={{ width: 1000 }} value={this.state.Owner} onChange={this.handleChangeOwner} 
                            placeholder="Ra@agoda.com" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Form.Item >
                        <label className="black-text" >Action Taken :   </label>
                        <br />
                        <TextArea style={{ width: 1000, height: 100 }} placeholder="" value={this.state.ActionTaken} onChange={this.handleChangeActionTaken}/>
                    </Form.Item>
                </Row>




                <button type="submit">submit</button>
            </Form >
            </div>


        );

    }

}






export default AiForm;