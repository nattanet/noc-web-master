import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Select, Checkbox, Row, Col,Card ,Radio,DatePicker} from 'antd';
import '../css/Position.css'
import DatePick from '../DatePicker/DatePicker';
import TimePick from '../DatePicker/TimePicker1';
import ITList from './ITList';
import NonITList from './NonITList';
import AiForm from './AiForm';


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
            PlannedStartDate: null,
            GinDetail: '',
            RequesterName : '',
            Team : '',
            Manager : '',
            StakeHolderName : '',
            AllItList : [],
            AllNonItList : [],
            MoveTraffic : '',
        };
        this.handleChangeGinTitle = this.handleChangeGinTitle.bind(this);
        this.handleCheckDataCenter = this.handleCheckDataCenter.bind(this);
        this.handleSelectService = this.handleSelectService.bind(this);
        this.handleSelectImpactLevel = this.handleSelectImpactLevel.bind(this);
        this.handleChangeImpactSummary = this.handleChangeImpactSummary.bind(this);
        this.handleChangePlannedStartDate = this.handleChangePlannedStartDate.bind(this);

        this.handleChangeGinDetail = this.handleChangeGinDetail.bind(this);
        this.handleChangeRequesterName = this.handleChangeRequesterName.bind(this);
        this.handleSelectTeam = this.handleSelectTeam.bind(this);
        this.handleSelectManager = this.handleSelectManager.bind(this);
        this.handleChangeStakeHolderName = this.handleChangeStakeHolderName.bind(this);
        this.handleCheckAllItList = this.handleCheckAllItList.bind(this);
        this.handleCheckAllNonItList = this.handleCheckAllNonItList.bind(this);
        this.handleSelectMoveTraffic = this.handleSelectMoveTraffic.bind(this);
       
    }
    render() {
        return <AiForm GinTitle={this.state.GinTitle} />;
        
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

    handleChangePlannedStartDate(value) {
        this.setState({ PlannedStartDate: value }
        );
    }
    handleChangePlannedStartDate(value) {
       this.setState({PlannedStartDate : value});
      }
    
  

    handleChangeGinDetail(event) {
        this.setState({ GinDetail: event.target.value }
        );
    }

    handleChangeRequesterName(event) {
        this.setState({ RequesterName: event.target.value }
        );
    }
    handleSelectTeam(value) {
        this.setState({ Team: value }
        );
    }
    handleSelectManager(value) {
        this.setState({ Manager: value }
        );
    }
    handleChangeStakeHolderName(event) {
        this.setState({ StakeHolderName: event.target.value }
        );
    }
    handleCheckAllItList(value) {
        this.setState({ AllItList: value }
        );
    };
    handleCheckAllNonItList(value) {
        this.setState({ AllNonItList: value }
        );
    };
    handleSelectMoveTraffic(event) {
        this.setState({ MoveTraffic: event.target.value }
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
            <label style={ {fontSize :30 ,color : 'black' ,marginLeft: 350 }}>Planned GIN Request Form</label>
            <br />
            <br />
            <br />
            <Card style={{ width: 1000 ,marginLeft : 350 ,backgroundColor : '#FADBD8'}}>
                <p style={{ fontSize :20}}>Before creating a Planned GIN, please follow this guideline:</p>
                <p> What is the impact of your plan?</p>
                <p> Who should be involved in this plan?</p>
                <p> Setup meeting with related people to come up with the following:</p>
                <p> Date/Time</p>
                <p> Steps planning</p>
                <p> Mitigation plan</p>
                <p> People who will be involved during the plan</p>
                <p> Submit the Plan GIN before the plan start:</p>
                <p> High impact plan: at least 3 working days – Stakeholder name is required for high impact plan</p>
                <p> Medium impact plan: at least 1 day</p>
                <p> Low impact plan: at least 1 hour</p>
                <p>  Submit Planned GIN request</p>
                <p> NOC creates GIN</p>
                <p> NOC or GIN owner creates Slack Channel with related people</p>
                <p style={{ fontSize :20}}>Important Note</p>
                <p>If there's a stakeholder rejected the plan, NOC will cancel the GIN right away.</p>
            </Card>
            <br/>
            <br />
            
            <Form style={ {marginLeft: 350 }} layout="inline" onSubmit={this.handleSubmit}>
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
                        <Form.Item label="Service : " >
                            <Select className="Formsizelg" defaultValue="Open" style={{ width: 120 }} onChange={this.handleSelectService} >
                                <Option value="open" >
                                    Open
                        </Option>
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
                    <Col span={7}><DatePicker onChange={this.handleChangePlannedStartDate} value = {this.state.PlannedStartDate} /></Col>
                    <Col span={2}> <label className="black-text" >Time :   </label></Col>
                    <Col span={5}><TimePick /></Col>
                </Row>
                <br />
                <Row>
                    <Col span={3}> <label className="black-text" >Planned Finish Date :   </label></Col>
                    <Col span={7}><DatePick /></Col>
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
                <br/>
                <Row>
                    <label className="black-text" >Traffic Move :   </label>
                    <Radio.Group onChange={this.handleSelectMoveTraffic} value={this.state.MoveTraffic}>
                        <Radio value="Yes">Yes</Radio>
                        <Radio value="No">No</Radio>
                    </Radio.Group>

                </Row>
                <br />
                <Row >
                    <Col span={10}>
                        <Form.Item >
                            <label className="black-text" >Requester Name:  </label>
                            <Input style={{ width: 300 }} value={this.state.RequesterName} onChange={this.handleChangeRequesterName} placeholder="Requester Name" />
                        </Form.Item>
                    </Col>

                    <Col span={9}> <Form.Item label="Team : " >
                        <Select className="Formsizelg" defaultValue="Open" style={{ width: 120 }} onChange={this.handleSelectTeam} >
                            <Option value="open" >
                                Open
                        </Option>
                        </Select>
                    </Form.Item> </Col>
                </Row>
                <br />
                <Form.Item label="Manager : " >
                    <Select className="Formsizelg" defaultValue="Open" style={{ width: 1000 }} onChange={this.handleSelectManager} >
                        <Option value="open" >
                            Open
                        </Option>
                    </Select>
                </Form.Item>
                <br />
                <Form.Item >
                    <label className="black-text" >StakeHolder Name:  </label>
                    <Input style={{ width: 700 }} value={this.state.StakeHolderName} onChange={this.handleChangeStakeHolderName} placeholder="StakeHolder Name" />
                </Form.Item>
                <Row>
                <Col span={3}><label className="black-text" >Distribution List:  </label></Col>
                <Col span={2}><label className="black-text" >ALL IT  </label></Col>
                </Row>

                <Checkbox.Group style={{ width: '150%' }} onChange={this.handleCheckAllItList}>
                    <ITList />
                </Checkbox.Group>

                    <label className="black-text" >ALL NON-IT  </label>

                    <Checkbox.Group style={{ width: '150%' }} onChange={this.handleCheckAllNonItList}>
                    <NonITList />
                    </Checkbox.Group>
                <Form.Item >
                    <label className="black-text" >Additional Email List:  </label>
                    <Input style={{ width: 700 }} value={this.state.GinTitle} onChange={this.handleChangeGinTitle} placeholder="Additional Email List (optional)" />
                </Form.Item>
                <br/>
                <button type="submit">submit</button>
            </Form >
            </div>
          

        );


    }

}






export default PlannedGinRequestForm;