import React, {Component} from 'react';
import $ from 'jquery';
// import '../styles/dailyForm.css';

class objective extends Component {
  constructor(props) {
    super(props);
    this.state={ data : 'test', difficulty : 1, completed : 'false' };

    setInterval(() => {
     this.setState({difficulty: this.state.difficulty + 2})
   },1000)
this.handleclick = this.handleclick.bind(this);

  }
  handleclick(){
this.setState({data:"gotcha"})}
  render() {
    return (
      <div className="mainView">
<h2 onClick={this.handleclick}>{this.state.data}</h2>
<h2>{this.state.difficulty}</h2>
<h2>{this.state.completed}</h2>
      </div>
    );
  }
}
export default objective;
