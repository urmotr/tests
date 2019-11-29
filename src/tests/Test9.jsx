import React from "react";

class Test9 extends React.PureComponent {
    constructor(props){
        super(props);
        this.state ={
            isikukood:"",
            nimi:"",
            phone: "",
            elukoht: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        fetch("/api/v1/users/t3", {
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
        <Task />
          <div className="ds">
              <form className="ds-item style-2">
                  <h3 className="style-2">Kasutaja lisamine</h3>
                  <div className={"row"}>
                      <label htmlFor="nimi">Nimi</label>
                      <input value={this.state.nimi} onChange={this.handleChange} name="nimi" type="text" />
                  </div>
                  <div className={"row"}>
                      <label htmlFor="isikukood">Isikukood</label>
                      <input value={this.state.isikukood} onChange={this.handleChange}  name="isikukood" type="text" />
                  </div>
                  <div className={"row"}>
                      <label htmlFor="phone">Telefon</label>
                      <input value={this.state.phone} onChange={this.handleChange}  name="phone" type="text" />
                  </div>
                  <div className={"row"}>
                      <label htmlFor="elukoht">Elukoht</label>
                      <input value={this.state.elukoht} onChange={this.handleChange}  name="elukoht" type="text" />
                  </div>
                  <button onClick={this.handleSubmit} style={{width: "100%", marginBottom: "10px"}} value={"Submit"}>
                      Lisa/Uuenda
                  </button>
              </form>
          </div>
      </div>
    );
  }
}

export default Test9;

const Task = () => (
  <div>
    <h3>
      Ülesanne 9:
    </h3>
    <ol>
      <li>Tuleb luua vorm</li>
      <li>Kasutaja saab sisestada nime, elukoha, telefoni numbri ja isikukoodi</li>
      <li>Kui kasutaja vajutab "esita", siis tehakse päring serveri kasutaja uuendamiseks/loomiseks</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja on olemas, siis peab uuendama kasutajat</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja ei olnud olemas, siis tuleb luua uus kasutaja</li>
      <li>Väga sarnane <code>Task7</code></li>
      <li>Tuleb muuta ainult faile <code>user.router.js</code> ja <code>Test9.jsx</code></li>
      <li>Kasutaja andmebaasi mudeliga saad tutvuda failis <code>user.model.js</code></li>
      <li><a href={LINK}>{LINK}</a></li>
    </ol>
  </div>
);

const LINK = 'https://mongoosejs.com/docs/api.html';
