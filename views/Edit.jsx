import React from 'react'

function Edit(props) {
  return (
    <div>
        <div>
            {/* '?_method=PUT' is telling backend that if you put app.put() to match up with our request*/}
      <form action={`/cat/editsubmit/${props.meow.id}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" value={props.meow.name} />
        <br />
        Age: <input type="text" name="age" value={props.meow.age} />
        <br />
        Description: <input type="text" name="description" value={props.meow.description} />
        <br />
        First Checkup?: {props.meow.hadFirstCheckUp ? (
                    <input type="checkbox" name="hadCheckup" defaultChecked />
                    ) : (
                        <input type="checkbox" name="hadCheckup" />
                    )}
        <input type="submit" name="" value="Submit" />
      </form>
    </div>
    </div>
  )
}

export default Edit
