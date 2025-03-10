import React from 'react'

function Teamember({data}){
    return(
      <div className='container'>
        {
          data.map((item,i) => (
            <div className='card'>
              <p>Name : {item.name}</p>
              <p>Job Tiltle : {item.jobTiltle}</p>
            </div>
          ))
        }

      </div>
    )
}
export default Teamember;