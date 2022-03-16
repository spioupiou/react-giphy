import '../assets/stylesheets/application.scss';

import ReactDOM from "react-dom";
import React from "react"; // importing the JSX

import App from "./components/App";
const root = document.querySelector("#root");

ReactDOM.render(<App />, root);
// Functional component
// Use shortcut rsc to make the functional component

// const Hello = ({ name, flag }) => {
// const Hello = (props) => {
//   const {name, flag} = props; // destructure props
//   return (
//     <div>
//       <h1>Hello {name}!!! {flag}</h1>
//     </div>
//   );
// };

// Class component
// class Hello extends React.Component {
//   render() {
//     const { name, flag } = this.props; // props instance variable of the class Hello, that's why we use this
//     return (
//       <div>
//         <h1>Hello {name}!!! {flag}</h1>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Hello name="Hey Hey" flag="A" />, root);
