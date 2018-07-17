// jsxをトランスパイルするのに使うために
import React, {Component} from 'react';

// 関数をただ定義しただけで関数Componentになる
const App = () => {
    const profiles = [
        {
            name: 'Jim',
            age: 25,
        },
        {
            name: 'Jon',
            age: 20,
        },
        {
            name: 'NoName'
        }
    ];

    return (
        <div>
            {
                profiles.map((profile, index) => {
                    return <User name={profile.name} age={profile.age} key={index}/>
                })
            }
        </div>
    )
};

const User = (props) => {
    return <div>Hi! Iam {props.name}, and {props.age} years old!</div>
};

// propsの値が存在しなかった場合のデフォルトの値を設定しておく
User.defaultProps = {
    age: 1
};

export default App;
