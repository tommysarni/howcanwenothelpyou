import React from 'react'

const Registration = () => {

  return (
    <div className="registration-container">
      <h1>Register Your Vehicle</h1>
      <form onSubmit={() => alert("Sorry but this page no longer works, therefore we cannot register your vehicle")}>
        <div className="questions">
          <label for="fname">First name:</label><br />
          <input type="text" id="fname" name="fname" /><br />
          <label for="lname">Last name:</label><br />
          <input type="text" id="lname" name="lname" /><br />

          <label for="haveLicense">Do you have a license?</label><br />
          <div className="radio">
            <label for="haveLicense">Yes</label><br />
            <input type="radio" id="haveLicense" name="haveLicense" value="Yes" /><br />
            <label for="no">No</label><br />
            <input type="radio" id="no" name="haveLicense" value="No" /><br />
          </div><br />

          <label for="date">When is your birthday?</label><br />
          <input type="date" id="date" name="date" /><br />
          <label for="color">What color is your vehicle?</label><br />
          <input type="text" id="color" name="color" /><br />
          <label for="fave">Is that your favorite color?</label><br />
          <input type="text" id="fave" name="color" /><br />
          <label for="wheels">Does your vehicle have four wheels(y/n)?</label><br />
          <input type="text" id="wheels" name="color" /><br />
          <label for="recline">Does your passenger seat recline (y/n)?</label><br />
          <input type="text" id="recline" name="color" /><br />
          <label for="cups">How many cup holders does your vehicle have?</label><br />
          <input type="text" id="cups" name="color" /><br />
          <input type="submit" /><br />
        </div>
        
      </form>
    </div>
  )


}

export default Registration