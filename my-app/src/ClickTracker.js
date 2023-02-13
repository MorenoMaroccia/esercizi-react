
// import React from "react";




// export class ClickTracker extends React.Component{
// //   state = {
// //     count: this.props.initialValue
// //   }

// // handleClick = () => {
// //     if (onsubmit= this.props.name) {
// //         console.log('this is:', this.props.name2);
// //     }else if (onclick = this.props.name1) {
// //         console.log('this is:', this.props.name1);
// //     }else if (onclick = this.props.name2) {
// //         console.log('this is:', this.props.name2);
// //     }
    
// //   };

// handleClick = () => {
//     console.log('this is:', this.props.name);
  
//   };

// // handleClick1 = () => {
// //     console.log('this is:', this.props.name1);
// //     }

// //     handleClick2 = () => {
// //         console.log('this is:', this.props.name2);
// //     };

//   render () {
//       return (
//       <div>
//         {/* <h1>{this.state.count}</h1> */}
//         <button onClick={this.handleClick} name="bottone1">bottone 1</button>
//         <button onClick={this.handleClick} name="bottone2">bottone 2</button>
//         <button onClick={this.handleClick} name="bottone3">bottone 3</button>

//         <h1>{}</h1>
//       </div>
//       )

// }
// }



// export default ClickTracker


import React from "react";




export class ClickTracker extends React.Component{
  state = {
    button:''
  }

// 

handleClick = (event) => {
    this.setState({button:event.target.value})
  
  };



  render () {
      return (
      <div>
        {/* <h1>{this.state.count}</h1> */}
        <button onClick={this.handleClick} name="button" value="bottone1">bottone 1</button>
        <button onClick={this.handleClick} name="button" value="bottone2">bottone 2</button>
        <button onClick={this.handleClick} name="button" value="bottone3">bottone 3</button>

        <h1>{this.state.button}</h1>
      </div>
      )

}
}



export default ClickTracker