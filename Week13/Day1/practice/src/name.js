import React from 'react';

const MyComponent  =(props) => {
    return (
        <>
        <h1>My name is {props.name}</h1>
        <h1>My surname is {props.surname}</h1>
        <h1>My favourite movie is {props.movie}</h1>
        </>
    )
}

const Styling = (props) => {
    return (
        <>

        <div>
            <p style={{backgroundColor: 'red', 
                fontSize: '40px', color: 'green'}}>This is a red paragraph</p>


        </div>
        
        
        </>
    )
}
Styling();

class App extends React.Component {
    render() {
        return (
            <>
              <MyComponent name="Yash" surname="Bachoo" movie="Pacific Rim"/>;
              <Styling/>
            </>
        
        )
    }
}
export default App;