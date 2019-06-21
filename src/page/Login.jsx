import React from "react";
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import '../index'
import '../components/css/Position.css'

 
export class Login extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    render() {
     
      return (
          <div>
    <label style={ {fontSize :30 ,color : 'black' ,marginLeft: 780 }}>Welcome   </label>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
              <Input style={{ width : 300,marginLeft : 700 }} 
                prefix={<Icon type="user" />}
                placeholder="Username"
              />
          </Form.Item>
          <Form.Item>
              <Input style={{ width : 300 ,marginLeft : 700}} 
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Password"
              />
          
          </Form.Item>
         
            <Button  style={{ width : 200 ,marginLeft : 750}} 
                     type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
           
        </Form>
        </div>
      );
    }
  }
  
  

  export default Login ;