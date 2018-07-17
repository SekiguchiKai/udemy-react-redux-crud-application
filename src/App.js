// jsxをトランスパイルするのに使うために
import React, {Component} from 'react';

// class Component
// class App extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <label htmlFor="bar">bar</label>
//                 <input type="text" onChange={() => alert('入力されたぜ')}/>
//             </React.Fragment>
//         )
//     }
// }

// 関数をただ定義しただけで関数Componentになる
const App = () => {
    return (
        <div>
            <Dog />
            <Dog />
            <Dog />
            <Dog />
            <Dog />
        </div>
    )
};

const Dog = () => {
    return <div>ワン!</div>
};

export default App;
