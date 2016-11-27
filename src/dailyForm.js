import React, { Component } from 'react';
import logo from './logo.svg';
import './dailyForm.css';

class dailyForm extends Component {
  render() {
    return (
      <div className="dailyForm">
      <form>
      <input type="text" placeholder="Name" />
            <input type="text" placeholder="goal" />

      </form>
      <button> done</button>
      </div>
    );
  }
}

export default dailyForm;
