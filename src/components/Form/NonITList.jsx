import { Checkbox ,Col,Row} from 'antd';
import React from 'react';



class NonITList extends React.Component {
    render(){
        return(
            <div>
                 <Row>
                        <Col span={3}><Checkbox value="ALL-NON-IT">ALL-NON-IT</Checkbox></Col>
                        <Col span={3}><Checkbox value="AC-Finance">AC-Finance</Checkbox></Col>
                        <Col span={3}><Checkbox value="BD-Connectivity">BD-Connectivity</Checkbox></Col>
                        <Col span={3}><Checkbox value="CEG Managers">CEG Managers</Checkbox></Col>
                        <Col span={3}><Checkbox value="DS,COL,We">DS,COL,We</Checkbox></Col>
                        <br/>
                        <Col span={3}><Checkbox value="Group Manager">Group Manager</Checkbox></Col>
                        <Col span={3}><Checkbox value="MK-Partner">MK-Partner</Checkbox></Col>
                        <Col span={3}><Checkbox value="MK-PBS">MK-PBS</Checkbox></Col>
                        <Col span={3}><Checkbox value="PCLN NOC">PCLN NOC</Checkbox></Col>
                        <Col span={3}><Checkbox value="PD-PO">PD-PO</Checkbox></Col>
                        <br/>
                        <Col span={3}><Checkbox value="PS-Ops">PS-Ops</Checkbox></Col>
                       
                       
                </Row>
                    

                   
            </div>
              
        );
    }

}

export default  NonITList;