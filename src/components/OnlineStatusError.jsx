import React from 'react'

const OnlineStatusError = () => {
  return (
    <div style={{backgroundColor:"rgb(255, 93, 34)",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", height:"80vh", color:"white"}}>
      <h1>It's look like you are offline!</h1>
      <h1>Reconnect Again!</h1>
    </div>
  )
}

export default OnlineStatusError