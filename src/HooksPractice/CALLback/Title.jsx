import React from 'react'

 function Title() {
  return (
    <div>
      <h2> call back title</h2>
{console.log("title")}
    </div>
  )
}
export default React.memo(Title);