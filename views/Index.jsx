import React from 'react'

function Index(props) {

  return (
    <div>
    <h1>Welcome to Adopt-a-Pet</h1>
    <a href='/new'>
        Click here to add a pet
    </a>

      {props.pet.map((pet, i) =>{
        return (
            <div className="bigcontainer">
                <div key={i}>
                    <a href={`/editcat/${pet.id}`}>
                        {pet.name}
                    </a>
                </div>
                <br />
                <form action={`/delete/${pet.id}?_method=DELETE`} method="POST">
                    <input className='dogDeleteBtn' type="submit" value="Delete"/>
                </form>   
                <br></br>
            </div>
        )
      })}
      
    </div>
  )
}

export default Index

//this will show the individual pet and will give us the option to edit the info
            //using "id" to find the specific records we want to edit
            
                {/* //this will show the individual pet and will give us the option to edit the info
                //using "id" to find the specific records we want to edit */}
                