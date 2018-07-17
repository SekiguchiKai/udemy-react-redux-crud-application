// jsxをトランスパイルするのに使うために
import React, {Component} from 'react';

class App extends Component {
    render() {
     return (
         <React.Fragment>
             <label htmlFor="bar">bar</label>
             <input type="text" onChange={() => alert('入力されたぜ')}/>
         </React.Fragment>
     )
    }
}

export default App;
