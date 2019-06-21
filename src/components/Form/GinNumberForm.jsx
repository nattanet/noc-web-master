import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Select, Checkbox, Row, Col, InputNumber } from 'antd';
import '../css/Position.css'
import ITList from './ITList';
import NonITList from './NonITList';
import { data } from '../Table/GinBoardTable';

const { Option } = Select;
const { TextArea } = Input;

class GinNumberForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            status: '',
            creatslack: false,
            channel: '',
            type: '',
            warroom: false,
            services: '',
            MoveTraffic: '',
            Severity: '',
            DetectionMethod: '',
            DataCenter: [],
            IncidentOwner: '',
            Team: '',
            Manager: '',
            LostBookings: 0,
            NonITLostBookings: 0,
            CEGDowntime: 0.0,
            ImpactSummary: '',
            Detail: '',
            GinRequester: '',
            LessonsLearned: false,
            EmergencyAccess: false,
            ITMailList: [],
            NonITMailingList: [],
            AdditionalEmail: '',
            Type_2: '',
            Area: '',
            Product: '',
            Application: '',
            indeterminate: true,
            Solution: '',
            formLayout: 'horizontal'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleSelectStatus = this.handleSelectStatus.bind(this);
        this.handleChangeChannel = this.handleChangeChannel.bind(this);
        this.handleSelectType = this.handleSelectType.bind(this);
        this.handleSelectServices = this.handleSelectServices.bind(this);
        this.handleSelectSeverity = this.handleSelectSeverity.bind(this);
        this.handleSelectDetectionMethod = this.handleSelectDetectionMethod.bind(this);
        this.handleCheckDataCenter = this.handleCheckDataCenter.bind(this);
        this.handleChangeIncidentOwner = this.handleChangeIncidentOwner.bind(this);
        this.handleSelectTeam = this.handleSelectTeam.bind(this);
        this.handleSelectManager = this.handleSelectManager.bind(this);
        this.handleChangeLostBookings = this.handleChangeLostBookings.bind(this);
        this.handleChangeNonITLostBookings = this.handleChangeNonITLostBookings.bind(this);
        this.handleChangeNonITLostBookings = this.handleChangeNonITLostBookings.bind(this);
        this.handleChangeCEGDowntime = this.handleChangeCEGDowntime.bind(this);
        this.handleChangeDetail = this.handleChangeDetail.bind(this);
        this.handleChangeGinRequester = this.handleChangeGinRequester.bind(this);
        this.handleCheckLessonsLearned = this.handleCheckLessonsLearned.bind(this);
        this.handleChangeAdditionalEmail = this.handleChangeAdditionalEmail.bind(this);
        this.handleSelectType2 = this.handleSelectType2.bind(this);
        this.handleSelectArea = this.handleSelectArea.bind(this);
        this.handleSelectProduct = this.handleSelectProduct.bind(this);
        this.handleCheckITMailingList = this.handleCheckITMailingList.bind(this);
        this.handleCheckNonITMailingList = this.handleCheckNonITMailingList.bind(this);
        this.handleSelectApplication = this.handleSelectApplication.bind(this);
        this.handleChangeRootCauseDetail = this.handleChangeRootCauseDetail.bind(this);
        this.handleChangeSolution = this.handleChangeSolution.bind(this);
        this.handleChangeImpactSummary = this.handleChangeImpactSummary.bind(this);
    }
    handleChange(event) {
        this.setState({ title: event.target.value }
        );
    }
    handleChangeTitle(event) {
        this.setState({ title: event.target.value }
        );
    }
    handleSelectStatus(value) {
        this.setState({ status: value }
        );
    }
    handleCheckCreatSlack = event => {
        this.setState({ creatslack: event.target.checked });
    };
    handleChangeChannel(event) {
        this.setState({ channel: event.target.value }
        );
    }
    handleSelectType(value) {
        this.setState({ type: value }
        );
    }
    handleCheckWarRoom = event => {
        this.setState({ warroom: event.target.checked });
    };
    handleSelectServices(value) {
        this.setState({ services: value }
        );
    }
    handleCheckMoveTraffic = event => {
        this.setState({ MoveTraffic: event.target.checked });
    };
    handleSelectSeverity(value) {
        this.setState({ Severity: value }
        );
    }
    handleSelectDetectionMethod(value) {
        this.setState({ DetectionMethod: value }
        );
    }
    handleCheckDataCenter(value) {
        this.setState({ DataCenter: value }
        );
    };
    handleChangeIncidentOwner(event) {
        this.setState({ IncidentOwner: event.target.value }
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
    handleChangeLostBookings = (value) => {
        this.setState({ LostBookings: value }
        );
    }
    handleChangeNonITLostBookings = (value) => {
        this.setState({ NonITLostBookings: value }
        );
    }
    handleChangeCEGDowntime = (value) => {
        this.setState({ CEGDowntime: value }
        );
    }
    handleChangeImpactSummary(event) {
        this.setState({ ImpactSummary: event.target.value }
        );
    }
    handleChangeDetail(event) {
        this.setState({ Detail: event.target.value }
        );
    }
    handleChangeGinRequester(event) {
        this.setState({ GinRequester: event.target.value }
        );
    }
    handleCheckLessonsLearned = event => {
        this.setState({ LessonsLearned: event.target.checked });
    };
    handleCheckEmergencyAccess = event => {
        this.setState({ EmergencyAccess: event.target.checked });
    };
    handleCheckITMailingList(value) {
        this.setState({ ITMailList: value }
        );
    };
    handleCheckNonITMailingList(value) {
        this.setState({ NonITMailingList: value }
        );
    };
    handleChangeAdditionalEmail(event) {
        this.setState({ AdditionalEmail: event.target.value }
        );
    }
    handleSelectType2(value) {
        this.setState({ Type_2: value }
        );
    }
    handleSelectArea(value) {
        this.setState({ Area: value }
        );
    }
    handleSelectProduct(value) {
        this.setState({ Product: value }
        );
    }
    handleSelectApplication(value) {
        this.setState({ Application: value }
        );
    }
    handleChangeRootCauseDetail(event) {
        this.setState({ RootCauseDetail: event.target.value }
        );
    }
    handleChangeSolution(event) {
        this.setState({ Solution: event.target.value }
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
            <label style={ {fontSize :30 ,color : 'black' ,marginLeft: 80 }}>Gin Number :  {data[1].gin_id} </label>
            <Form layout="inline" style={{ marginLeft: 350 }} onSubmit={this.handleSubmit}>
                <Row >
                    <Col span={100}>
                        <Form.Item >
                            <label className="black-text" >Title:  </label>
                            <Input style={{ width: 1000 }} value={this.state.title} onChange={this.handleChangeTitle} placeholder="Add supplier mapping for GetARoom" />
                        </Form.Item>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Form.Item label="Status: " >
                        <Select className="Formsizelg" defaultValue="Open" style={{ width: 120 }} onChange={this.handleSelectStatus} >
                            <Option value="open" >
                                Open
                        </Option>
                        </Select>
                    </Form.Item>

                    <Form.Item><label className="black-text" >Create slack :   </label>
                        <Checkbox value="createslack" onChange={this.handleCheckCreatSlack} ></Checkbox></Form.Item>
                    <Form.Item label="Channel Name: " >
                        <Input style={{ width: 620 }} value={this.state.channel} onChange={this.handleChangeChannel} />
                    </Form.Item>
                </Row>
                <br />
                <Row>
                    <Form.Item label="Type: " layout={formLayout}>
                        <Select className="Formsizelg" defaultValue="Plened" style={{ width: 120 }} onChange={this.handleSelectType}>
                            <Option value="planed" >Planed</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item ><label className="black-text" >*War Room :   </label>
                        <Checkbox value="warroom" onChange={this.handleCheckWarRoom}  ></Checkbox></Form.Item>
                </Row>
                <br />

                <Row>
                    <Form.Item label="Services: " >
                        <Select className="Formsizelg" defaultValue="Connectivity" style={{ width: 120 }} onChange={this.handleSelectServices}>
                            <Option value="connectivity">Connectivity</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item><label className="black-text" >Move Traffic :   </label>
                        <Checkbox value="move_traffic" onChange={this.handleCheckMoveTraffic}></Checkbox></Form.Item>
                </Row>

                <br />
                <Row>
                    <Form.Item label="Severity: " >
                        <Select className="Formsizelg" defaultValue="High" style={{ width: 120 }} onChange={this.handleSelectSeverity}>
                            <Option value="High" >High</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Detection method: " >
                        <Select className="Formsizelg" defaultValue="High" style={{ width: 120 }} onChange={this.handleSelectDetectionMethod}>
                            <Option value="disabled" disabled></Option>
                        </Select>
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
                    <Form.Item label="Incident Owner: "   >
                        <Input style={{ width: 200 }} value={this.state.IncidentOwner} onChange={this.handleChangeIncidentOwner} placeholder="Remove Bcom hotels" />
                    </Form.Item>

                    <Form.Item label="Team : " >
                        <Select className="Formsizelg" defaultValue="Connectivity" style={{ width: 120 }} onChange={this.handleSelectTeam}>
                            <Option value="connectivity">Connectivity</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Manager : " >
                        <Select className="Formsizelg" defaultValue="Prashant S" style={{ width: 120 }} onChange={this.handleSelectManager}>
                            <Option value="Prashant S.">Prashant S.</Option>
                        </Select>
                    </Form.Item>
                </Row>

                <br />
                <Row>
                    <Col span={3}><label className="black-text" >IT- Leadership  </label></Col>
                    <Col span={3}><label className="black-text" > Michael F.</label></Col>
                </Row>

                <br />
                <Row>

                    <Form.Item label="Lost Bookings: " >
                        <InputNumber style={{ width: 100 }} placeholder="0" value={this.state.LostBookings} onChange={this.handleChangeLostBookings} />
                    </Form.Item>

                    <Form.Item label="Lost Bookings (Non IT): " >
                        <InputNumber style={{ width: 100 }} placeholder="0" value={this.state.NonITLostBookings} onChange={this.handleChangeNonITLostBookings} />
                    </Form.Item>

                    <Form.Item label="CEG Downtime (min): " >
                        <InputNumber style={{ width: 100 }} placeholder="0.0" value={this.state.CEGDowntime} onChange={this.handleChangeCEGDowntime} />
                    </Form.Item>
                </Row>
                <Row>
                    <Form.Item >
                        <label className="black-text" >Impact Summary :   </label>
                        <br />
                        <TextArea style={{ width: 1000, height: 100 }} placeholder="" value={this.state.ImpactSummary} onChange={this.handleChangeImpactSummary} />
                    </Form.Item>
                </Row>
                <Row>
                    <Form.Item >
                        <label className="black-text" >Detail :   </label>
                        <br />
                        <TextArea style={{ width: 1000, height: 100 }} placeholder="" value={this.state.Detail} onChange={this.handleChangeDetail} />
                    </Form.Item>
                </Row>

                <Row>
                    <Col span={8}><Form.Item label="GIN Requester: " >
                        <Input style={{ width: 100 }} placeholder="Saowaluck" value={this.state.GinRequester} onChange={this.handleChangeGinRequester} />
                    </Form.Item></Col>

                    <Col span={3}><label className="black-text" >GIN Stake holder:  </label></Col>
                    <Col span={5}><label className="black-text" > No stakeholder is provided</label></Col>
                </Row>
                <br />

                <Row>
                    <Col span={8}><Form.Item>
                        <Checkbox onChange={this.handleCheckLessonsLearned}></Checkbox>
                        <label className="black-text" >Lessons Learned </label>
                    </Form.Item></Col>
                    <Col span={8}><Form.Item>
                        <Checkbox onChange={this.handleCheckEmergencyAccess} ></Checkbox>
                        <label className="black-text" >Emergency Access</label>
                    </Form.Item></Col>
                </Row>
                <br />
                <label className="black-text" > IT Maiing List:</label>
                <Checkbox.Group style={{ width: '150%' }} onChange={this.handleCheckITMailingList}>
                    <ITList />
                </Checkbox.Group>
                <br />
                <br />
                <label className="black-text" > NON-IT Maiing List:</label>
                <Checkbox.Group style={{ width: '150%' }} onChange={this.handleCheckNonITMailingList}>
                    <NonITList />
                </Checkbox.Group>
                <br />
                <Row>
                    <br />
                    <label className="black-text" > Additional Email Address:</label>
                    <br />
                    <Form.Item  >
                        <Input style={{ width: 650 }} value={this.state.AdditionalEmail} onChange={this.handleChangeAdditionalEmail} />
                    </Form.Item>
                </Row>
                <br />
                <label className="green-text" > Root Cause</label>
                <br />
                <br />
                <Row>
                    <Col span={8}><label className="red-text" > Type:</label></Col>
                    <Col span={8}><label className="red-text" > Area:</label></Col>
                    <Col span={8}><label className="red-text" > Product:</label></Col>
                </Row>

                <Row>

                    <Col span={8}><Form.Item >
                        <Select defaultValue="Investigating" style={{ width: 300 }} value={this.state.Type_2} onChange={this.handleSelectType2}>
                            <Option value="Investigating">Invest</Option>
                        </Select>
                    </Form.Item></Col>

                    <Col span={8}><Form.Item >
                        <Select defaultValue="Investigating" style={{ width: 300 }} value={this.state.Area} onChange={this.handleSelectArea}>
                            <Option value="Investigating">Investigating</Option>
                        </Select>
                    </Form.Item></Col>

                    <Col span={8}><Form.Item >
                        <Select defaultValue="Investigating" style={{ width: 300 }} value={this.state.Product} onChange={this.handleSelectProduct}>
                            <Option value="Investigating">Investigating</Option>
                        </Select>
                    </Form.Item></Col>
                </Row>
                <label className="red-text" > Application:</label>
                <br />
                <Row>
                    <Col span={8}><Form.Item >
                        <Select defaultValue="" style={{ width: 700 }} onChange={this.handleSelectApplication}>
                            <Option value="Investigating">Investigating</Option>
                        </Select>
                    </Form.Item></Col>
                </Row>
                <br />

                <label className="red-text" > Root Cause Detail:</label>
                <br />
                <Form.Item >
                    <TextArea style={{ width: 1000, height: 70 }} placeholder="" value={this.state.RootCauseDetail} onChange={this.handleChangeRootCauseDetail} />
                </Form.Item>
                <br />

                <label className="red-text" > Solution:</label>
                <br />
                <Form.Item >
                    <TextArea style={{ width: 1000, height: 70 }} placeholder="" value={this.state.Solution} onChange={this.handleChangeSolution} />
                </Form.Item>
                <br />
                <button type="submit">submit</button>
            </Form >
            </div>


        );

    }

}






export default GinNumberForm;