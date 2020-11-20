import React, { useState } from 'react'
import kittens from "../assets/kittens.jpeg"


const Appointment = () => {
  
  const [timeLeft, setTimeLeft] = useState("")

    var countDownDate = new Date("Jan 5, 2035 00:0000").getTime();
    var x = setInterval(() => {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft(days + "D " + hours + "H "
        + minutes + "M " + seconds + "S ");

      if (distance < 0) {
        clearInterval(x);
        setTimeLeft("Appointment is now available:");
      }
    }, 1000);

  

  return (
    <div className="appointment-container">
      <h1>Appointment</h1>
      <div className="next-appt" >Next Available Appointment in:<h1>{timeLeft}</h1></div>
      <h1>Heres a cute picture of a cat while you wait!</h1>
      <img src={kittens} alt="cute kitty" />
    </div>
  )
}

export default Appointment
