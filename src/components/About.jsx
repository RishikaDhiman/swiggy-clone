import React from 'react'
import UserContext from '../context/UserContext';

class About extends React.Component{
  constructor(props){
    super(props)
  }
  render(){

    return (
      <div style={{display:"flex", flexDirection:"column", height:"80vh", alignItems:"center", gap:"15px"}}>
        <h2>Hi, I am Rishika Dhiman.</h2>
        <p>I am a frontend devolper.</p>
        {/* this is how we use context in class component. */}
        <UserContext.Consumer>
          {
            (data)=>(console.log(data))
          }
        </UserContext.Consumer>
      </div>
    )
  }
}

export default About;
