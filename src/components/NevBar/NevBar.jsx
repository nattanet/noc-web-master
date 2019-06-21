
import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';


const { SubMenu }  = Menu;

export default class NevBar extends React.Component {
  state = {
    current: '',
    name : 'aa'
    
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
      name : e.name,
    });
  };

  render() {
    const bg = {backgroundColor: '#69C4B2' , fontSize: 15 , color : '#FFFFFF' ,innerWidth : 30 }
    return (
      <Menu style={bg}  onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" >
       
        <Menu.Item key ="Home"><Icon type="home" />Home</Menu.Item>
        <Menu.Item key ="Request Planned GIN" ><a href="/GinRequestForm"/><Icon type="plus" />Request Planned GIN</Menu.Item>
        <Menu.Item key="GIN Board" name = "GIN Board" >< a href="/ginboard"/><Icon type="desktop"/>GIN Board</Menu.Item>
        <Menu.Item key="AI Board" ><a href="/aiboard"/><Icon type="desktop"/>AI Board</Menu.Item>
        <Menu.Item key="Escalations"><a href="/escalations"/><Icon type="desktop" />Escalations</Menu.Item>
        <Menu.Item key="Pending Request" ><a href="/pendingrequest"/>Pending Request</Menu.Item>
        <Menu.Item key="Report Summary"><a href="/reportsummary"/><Icon type="bars" />Report Summary</Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title">
              <Icon type="setting" />
              Manage war room
            </span>
          }
        >
          <Menu.ItemGroup >
            <Menu.Item key="setting:1">View live document</Menu.Item>
            <Menu.Item key="setting:2">View incident driver</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="Signin"><a href="/Login"/><Icon type="bars" />Sign in</Menu.Item>
      </Menu>
    );
  }
}


          