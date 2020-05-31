import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker'

const myelement = (
    <table>
      <tr>
        <th>Name</th> 
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );
class Car extends React.Component {
    render() {
      return <h2>I am a {this.props.color} Car!</h2>;
    }
}
  
  ReactDOM.render(<Car color="red"/>, document.getElementById('roo'));
  ReactDOM.render(<App/>, document.getElementById('app'));
  
  ReactDOM.render(myelement, document.getElementById('root'));
  ReactDOM.render(<p>Hallo</p>, document.getElementById('sandy'));