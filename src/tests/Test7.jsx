import React from "react";
import PropTypes from "prop-types";
class Test7 extends React.PureComponent {
    constructor(props){
        super(props);
        this.state ={
            name:"abs",
            address:"",
            phone: 55555555,
        };
        this.handleChange = this.handleChange.bind(this);
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
  render() {
    return (
      <div>
        <Task phone={this.state.phone}
              key={this.state.phone}
              address={this.state.address}
              name={this.state.name}
        onChange={this.handleChange}
        onClick={this.handleSubmit}/>
        implement

      </div>
    );
  }
}

export default Test7;

const Task = ({name, address, phone, onChange, onClick}) => (
  <div>
    <h3>
      Ülesanne 7:
    </h3>
    <ol>
      <li>Eelmistes ülesannetes on teile antud juba valmis ehitatud vorm</li>
      <li>Selles ülesandes on teil vaja luua vormi element iseseisvalt</li>
      <li>Kasutaja peab saama sisestada oma nime, elukoha ja kontaktnumbri.</li>
      <li>Kui kasutaja vajutab "esitan" nuppu, siis saadetakse andmed serveri ning salvestatakse andmebaasi.</li>
      <li>Te peate muutma ainult 2 faili <code>server/user.router.js</code> ja <code>src/Test7.jsx</code></li>
      <li>Testimaks, kas andmed salvestusid andmebaasi, kasutage Postmani. <code>GET localhost:3000/api/v1/users </code> </li>
      <li>User Schema'ga saate tutvuda failis <code>server/user.model.js</code></li>
      <li>Pange tähele, et server tuleb uuesti käivitada, kui te teete <code>/server</code> kaustas muudatusi
        (npm run start:backend)
      </li>
      <li>Oleme praktiliselt sama asja teinud eelmistes ülesannetes. Ehk vajadusel saate sealt võtta ideid.</li>
      <li>ReactJS ametlik dokumentatsioon peaks olema juba ammu läbiloetud, tuletage meelde.
        <a href={'https://reactjs.org/docs/forms.html'}>https://reactjs.org/docs/forms.html</a></li>

    </ol>
      <div className="ds">
          <form className="ds-item style-2">
              <h3 className="style-2">Kasutaja lisamine</h3>
              <div className={"row"}>
                  <label htmlFor="fullName">Nimi</label>
                  <input value={name} onChange={onChange} name="name" type="text" />
              </div>
              <div className={"row"}>
                  <label htmlFor="burger">Telefon</label>
                  <input value={phone} onChange={onChange} name="phone" type="number" />
              </div>
              <div className={"row"}>
                  <label htmlFor="drink">Elukoht</label>
                  <input value={address} onChange={onChange} name="address" type="text" />
              </div>
              <button style={{width: "100%"}} onClick={onClick} value={"Submit"}>
                  Lisa
              </button>
          </form>
  </div>
  </div>
);

Task.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    name: PropTypes.string,
    phone: PropTypes.number,
    address: PropTypes.string
};