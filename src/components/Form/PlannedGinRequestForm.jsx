import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Select, Checkbox, Row, Col } from 'antd';
import '../css/Position.css'
import DatePick from '../DatePicker/DatePicker';
import TimePick from '../DatePicker/TimePicker1';



const { Option } = Select;
const { TextArea } = Input;

class PlannedGinRequestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            GinTitle: '',
            Service: '',
            ImpactLevel: '',
            ImpactSummary: '',
            formLayout: 'horizontal',
            DataCenter: [],
            PlannedStartDate: '',
            GinDetail: '',
        };
        this.handleChangeGinTitle = this.handleChangeGinTitle.bind(this);
        this.handleCheckDataCenter = this.handleCheckDataCenter.bind(this);
        this.handleSelectService = this.handleSelectService.bind(this);
        this.handleSelectImpactLevel = this.handleSelectImpactLevel.bind(this);
        this.handleChangeImpactSummary = this.handleChangeImpactSummary.bind(this);
        this.handleChangePlannedStartDate = this.handleChangePlannedStartDate.bind(this);

        this.handleChangeGinDetail = this.handleChangeGinDetail.bind(this);


    }

    handleChangeGinTitle(event) {
        this.setState({ GinTitle: event.target.value }
        );
    }
    handleSelectService(value) {
        this.setState({ Service: value }
        );
    }
    handleSelectImpactLevel(value) {
        this.setState({ ImpactLevel: value }
        );
    }
    handleChangeImpactSummary(event) {
        this.setState({ ImpactSummary: event.target.value }
        );
    }

    handleCheckDataCenter(value) {
        this.setState({ DataCenter: value }
        );
    };
    handleChangePlannedStartDate(date) {
        this.setState({ PlannedStartDate: date }
        );
    }
    handleChangePlannedStartDate = value => {
        this.setState({ PlannedStartDate: value })
    };
    handleChangeGinDetail(event) {
        this.setState({ GinDetail: event.target.value }
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
            <Form layout="inline" className="GinFormpos" onSubmit={this.handleSubmit}>
                <Row >
                    <Col span={100}>
                        <Form.Item >
                            <label className="black-text" >GIN Title:  </label>
                            <Input style={{ width: 1000 }} value={this.state.GinTitle} onChange={this.handleChangeGinTitle} placeholder="GIN Title" />
                        </Form.Item>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span={10}>
                        <Form.Item label="Service: " >
                            <Select className="Formsizelg" defaultValue="Unclassified" style={{ width: 400 }} onChange={this.handleSelectService} >
                                <Option value="Unclassified" >Unclassified</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={13}>
                        <Form.Item label="ImpactLevel : " >
                            <Select className="Formsizelg" defaultValue="Open" style={{ width: 120 }} onChange={this.handleSelectImpactLevel} >
                                <Option value="open" >
                                    Open
                        </Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Form.Item >
                        <label className="black-text" >Impact Summary :   </label>
                        <br />
                        <TextArea style={{ width: 800, height: 100 }} placeholder="" onChange={this.handleChangeImpactSummary} />
                    </Form.Item>
                </Row>
                <br />
                <Row>
                    <label className="black-text" >Data Center :   </label>
                    <Checkbox.Group style={{ width: 800 }} onChange={this.handleCheckDataCenter}>
                        <Col span={4}><Checkbox value="ALL">ALL</Checkbox> </Col>
                        <Col span={4}><Checkbox value="HKG">HKG</Checkbox></Col>
                        <Col span={4}><Checkbox value="SGP">SGP</Checkbox></Col>
                        <Col span={4}><Checkbox value="SHA">SHA</Checkbox></Col>
                        <Col span={4}> <Checkbox value="ASH">ASH</Checkbox></Col>
                        <Col span={3}><Checkbox value="AMS">AMS</Checkbox></Col>
                    </Checkbox.Group>
                </Row>
                <br />
                <Row>
                    <Col span={3}> <label className="black-text" >Planned Start Date :   </label></Col>
                    <Col span={7}><DatePick value={this.state.PlannedStartDate} onChange={this.handleChangePlannedStartDate} /></Col>
                    <Col span={2}> <label className="black-text" >Time :   </label></Col>
                    <Col span={5}><TimePick /></Col>
                </Row>
                <br />
                <Row>
                    <Col span={3}> <label className="black-text" >Planned Finish Date :   </label></Col>
                    <Col span={7}><DatePick value={this.state.PlannedStartDate} onChange={this.handleChangePlannedStartDate} /></Col>
                    <Col span={2}> <label className="black-text" >Time :   </label></Col>
                    <Col span={5}><TimePick /></Col>
                </Row>
                <Row>
                    <Form.Item >
                        <label className="black-text" >Gin Detail :   </label>
                        <br />
                        <TextArea style={{ width: 800, height: 100 }} placeholder="" onChange={this.handleChangeGinDetail} />
                    </Form.Item>
                </Row>
                <Row>
                    <label className="black-text" >Traffic Movie :   </label>
                    <Checkbox.Group style={{ width: 800 }} onChange={this.handleCheckDataCenter}>
                        <Col span={4}><Checkbox value="Yes">Yes</Checkbox> </Col>
                        <Col span={4}><Checkbox value="No">No</Checkbox></Col>
                    </Checkbox.Group>
                </Row>
                <br />
                <Row >
                    <Col span={10}>
                        <Form.Item >
                            <label className="black-text" >Requester Name:  </label>
                            <Input style={{ width: 300 }} value={this.state.GinTitle} onChange={this.handleChangeGinTitle} placeholder="Requester Name" />
                        </Form.Item>
                    </Col>

                    <Col span={9}> <Form.Item label="Team : " >
                        <Select className="Formsizelg" defaultValue="Open" style={{ width: 120 }} onChange={this.handleSelectImpactLevel} >
                            <Option value="open" >
                                Open
                        </Option>
                        </Select>
                    </Form.Item> </Col>
                </Row>
                <br />
                <Form.Item label="Manager : " >
                    <Select className="Formsizelg" defaultValue="Open" style={{ width: 1000 }} onChange={this.handleSelectImpactLevel} >
                        <Option value="open" >
                            Open
                        </Option>
                    </Select>
                </Form.Item>
                <br />
                <Form.Item >
                    <label className="black-text" >StakeHolder Name:  </label>
                    <Input style={{ width: 700 }} value={this.state.GinTitle} onChange={this.handleChangeGinTitle} placeholder="StakeHolder Name" />
                </Form.Item>









                <button type="submit">submit</button>
            </Form >


        );

    }

}






export default PlannedGinRequestForm;