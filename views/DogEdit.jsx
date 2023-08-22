import React from 'react'

function DogEdit(props) {
  return (
    <div>
      <div>
            {/* '?_method=PUT' is telling backend that if you put app.put() to match up with our request*/}
      <form action={`/dog/editsubmit/${props.ruff.id}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" value={props.ruff.name} />
        <br />
        Age: <input type="text" name="age" value={props.ruff.age} />
        <br />
        Description: <input type="text" name="description" value={props.ruff.description} />
        <br />
        Breed: <input type="text" name="breed" value={props.ruff.breed} />
        <input type="submit" name="" value="Submit" />
      </form>
    </div>
    </div>
  )
}

export default DogEdit
