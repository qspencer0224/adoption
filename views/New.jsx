import React from 'react'

function New() {
  return (
    <div>
      <h1>For All New Cats</h1>
      <form action="/new" method="POST">
        Name: <input type="text" name="name" />
        <br />
        Age: <input type="text" name="age" />
        <br />
        Description: <input type="text" name="description" />
        <br />
        First Checkup?: <input type="checkbox" name="hadCheckup" />
        <input type="submit" name="" value="Submit" />
      </form>
      <h1>For All New Dogs</h1>
      <form action="/new" method="POST">
        Name: <input type="text" name="name" />
        <br />
        Age: <input type="text" name="age" />
        <br />
        Description: <input type="text" name="description" />
        <br />
        Breed: <input type="text" name="breed" />
        <input type="submit" name="" value="Submit" />
      </form>
    </div>
  )
}

export default New
