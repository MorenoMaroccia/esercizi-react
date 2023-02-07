// import React from 'react'


// export class Age2 extends React.Component{
// ageProp() { 
//     if (this.props.age > 10){
//         <p>Your age is, {this.props.age}</p>
//     }
//     }

//     render () {
//         return (
//         <div>

//           <p>{this.ageProp()}</p>  
//         </div>)
//     }

// }

// export default Age2

import React from 'react'


export class Age2 extends React.Component{


    render () {
        return (
        <div>

          <p>{this.props.age ? this.props.age : 'No prop'}</p>  

          
        </div>)
    }

}

export default Age2