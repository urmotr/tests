import React from "react";
import "./css/test3.css";
import example1 from "./images/1.png";
import example2 from "./images/2.png";
import example3 from "./images/3.png";

class Test3 extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    fetch("api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
        .then( res=> res.json());

  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render(){
    return (
      <div>
        <div className={"description"}>
          <h3>
            Ülesanne 3:
          </h3>
          <p>
            <code>server.js</code> failis on defineeritud otspunkt
            <code>POST /api/v1/register</code>.
            Kui kasutaja vajutab "Send", siis peab frontend kasutama seda REST teenust
            ning saatma "username" ja "age" väärtused backendi.
            Server annab vastuseks teksti, mis tuleb kuvada ekraanil.
            API kirjeldus on lehel <a href={"http://localhost:3000/api-docs/"}>http://localhost:3000/api-docs/</a>
          </p>
          <h3>
            Näited:
          </h3>
          <div className="images">
            <img src={example1}/>
            <img src={example2}/>
            <img src={example3}/>
          </div>
        </div>
        <h3>
          Lahendus:
        </h3>
        <form onSubmit={this.handleSubmit}>
          <div className={"row"}>
            <label htmlFor="username">Username</label>
            <input onChange={this.handleChange} name="username" type="text"/>
          </div>
          <div className={"row"}>
            <label htmlFor="age">Age</label>
            <input onChange={this.handleChange} name="age" type="number"/>
          </div>
          <div className={"row"} style={{justifyContent: "flex-end"}}>
            <button  value={"Submit"}>Send</button>
          </div>
        </form>

        {
          // this.state.responseText &&
          // <div className={"response"}>
          //   {this.state.responseText}
          // </div>
        }

      </div>
    );
  }
}

export default Test3;

