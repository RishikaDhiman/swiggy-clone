import React from 'react'

class HelpComp extends React.Component{
  // render method will return peice of jsx which will be displayed on website.
  render(){
    return <>
      <div style={{backgroundColor:"#37718e", padding:"35px"}}>
        <div className="helpContainer" style={{backgroundColor:"white"}}>
          <div>
            <h2>Partner Overboarding</h2>
            <ul>
              <li>I want to partner with swiggy.</li>
              <li>What are the mandatory documents needed to list my restaurant on Swiggy?</li>
              <li>I want to opt-out from Google reserve</li>
              <li>After I submit all documents, how long will it take for my restaurant to go live on Swiggy?</li>
            </ul>
          </div>
          
          <div>
            <h2>Legal</h2>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cancellations and Refunds</li>
              <li>Terms of Use for Swiggy ON-TIME / Assured?</li>
            </ul>
          </div>

          <div>
            <h2>Fav Questions</h2>
            <ul>
              <li>What is Swiggy Customer Care Number?</li>
              <li>I want to explore career opportunities with Swiggy.</li>
              <li>I want to provide feedback.</li>
              <li>Can I edit my order?</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  }
}

export default HelpComp;

