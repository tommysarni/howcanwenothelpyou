import React from 'react'
import bridge from '../assets/bridgexl.png'
import InfoBox from './InfoBox'
import "./styles.css"

const infoDict1 = {
  title: "Online Services",
  color: "yellow",
  content: "With DMV offices serving as few people as possible, providing services online has been widely requested. Now you can practice standing in a queue, listening for your number to be called, and filling out extraneous forms online! We’re constantly adding new online features to meet your needs. For additional help we are available via fax.",
  btnTitle: "See all online services"
}

const infoDict2 = {
  title: "Important Information",
  color: "blue",
  content: "The DMV is constantly evolving, and we want to ensure that all of our customers are well informed. We are dedicated to providing easily accessible information to our customers when needed. The potential for unlimited changes and improvements to our system means that we could theoretically have a lot of important updates, and if any of these improvements ever happen we will probably let you know.",
  btnTitle: "Get the latest information"
}

const infoDict3 = {
  title: "Need a REAL ID?",
  color: "green",
  content: "Me too, let me know if you find out where. But actually, I have no idea how to get a REAL ID.",
  btnTitle: "Learn more"
}

const Home = () => {

  return(
    <div>
      <div className="img-container">
        <img className="bridge-img" src={bridge} alt="golden gate bridge" />
      </div>
      <div className="info-box-container">
        <InfoBox dict={infoDict1}/>
        <InfoBox dict={infoDict2}/>
        <InfoBox dict={infoDict3}/>
      </div>
    </div>
    
  )

}

export default Home