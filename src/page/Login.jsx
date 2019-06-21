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
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
              <Input style={{ width : 200,marginLeft : 500 }} 
                prefix={<Icon type="user" />}
                placeholder="Username"
              />
          </Form.Item>
          <Form.Item>
              <Input style={{ width : 200 ,marginLeft : 500}} 
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Password"
              />
          
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      );
    }
  }
  
  

  export default Login ;