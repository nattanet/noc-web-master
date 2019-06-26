import React, { Component } from 'react';

class Ap extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : []
    }
  }


  componentDidMount() {
    fetch('http://localhost:3001/ai')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items : json
        })
      })
  }
  
  render() {
    var {items} = this.state;
    return(
      <div>
         <ul>
           {items.map(item => (
             <li>
               {item.recordsets.gin_id}
             </li>
           ))}
         </ul>
      </div>
    )
  }
}

export default Ap;