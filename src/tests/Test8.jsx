import React from "react";
import PropTypes from "prop-types";

class Test8 extends React.PureComponent {
    constructor(props){
        super(props);
        this.state ={
            name:"abs",
            address:"",
            phone: 55555555,
            status: 0,
            opacity: "1"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleED = this.handleED.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        fetch("/api/v1/users/t2", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
            .then(() => {
                console.log("Kasutaja lisatud");
            })
            .catch(err =>{
                console.log("Error", err);
            });
    }

    handleChange(event) {
        console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleED(event) {
        event.preventDefault();

        console.log(this.state);
        if(this.state.status){
            this.setState({
                status: 0,
                opacity: "1"
            });
        } else {
            this.setState({
                status: 1,
                opacity: "0.5"
            });
        }

    }
  render() {
    return (
      <div>
        <Task phone={this.state.phone}
              key={this.state.phone}
              address={this.state.address}
              name={this.state.name}
              onChange={this.handleChange}
              onClick={this.handleSubmit}
              onED={this.handleED}
              opa={this.state.opacity}
                status={this.state.status}/>
      </div>
    );
  }
}

export default Test8;

const Task = ({name, address, phone, onChange, onClick, onED, status, opa}) => (
  <div>
    <h3>
      Ülesanne 8:
    </h3>
    <ol>
      <li>Seda ülesannet saab lahendada ainult siis kui ülesanne 7 on tehtud</li>
      <li>Kopeerige ülesandes 7 tehtud vorm <code>test8.jsx</code> faili.</li>
      <li>Lisage nupp "enable/disable"</li>
      <li>Kui kasutaja vajutab "disable" nupu peale, siis peab vorm muutuma readonly.
        Ehk vormi väljadesse ei ole võimalik sisestada uusi väärtuseid ja
        vormi ei ole võimalik esitada.
      </li>
      <li>
        Kui kasutaja vajutab "enable" nupu peale, siis muutub vorm selliseks, et
        väljadesse on võimalik sisestada väärtuseid ning vormi on võimalik esitada.
      </li>
        <div className="ds">
            <form className="ds-item style-2">
                <h3 className="style-2">Kasutaja lisamine</h3>
                <div className={"row"}>
                    <label htmlFor="fullName">Nimi</label>
                    <input style={{opacity: opa}}  value={name} disabled={status} onChange={onChange} name="name" type="text" />
                </div>
                <div className={"row"}>
                    <label htmlFor="burger">Telefon</label>
                    <input style={{opacity: opa}}  value={phone} disabled={status} onChange={onChange} name="phone" type="number" />
                </div>
                <div className={"row"}>
                    <label htmlFor="drink">Elukoht</label>
                    <input style={{opacity: opa}} value={address} disabled={status} onChange={onChange} name="address" type="text" />
                </div>
                <button disabled={status} style={{width: "100%", marginBottom: "10px", opacity: opa}} onClick={onClick} value={"Submit"}>
                    Lisa
                </button>
                <button style={{width: "100%"}} onClick={onED} value={"Submit"}>
                    Enable/Disable
                </button>
            </form>
        </div>
    </ol>
  </div>
);
Task.propTypes = {
    onChange: PropTypes.func,
    onED: PropTypes.func,
    onClick: PropTypes.func,
    name: PropTypes.string,
    phone: PropTypes.number,
    status: PropTypes.number,
    address: PropTypes.string,
    opa: PropTypes.string
};