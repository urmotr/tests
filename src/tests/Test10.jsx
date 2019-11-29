import React from "react";

class Test10 extends React.PureComponent {
    constructor(props){
        super(props);
        this.state ={
            isikukood:React.createRef(),
            nimi:React.createRef(),
            phone: React.createRef(),
            elukoht: React.createRef()
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log(this.state.isikukood.current.value);
        const test = {
            isikukood:this.state.isikukood.current.value,
            nimi:this.state.nimi.current.value,
            phone: this.state.phone.current.value,
            elukoht: this.state.elukoht.current.value
        };
        console.log(test);
        event.preventDefault();
        console.log(this.state);
        fetch("/api/v1/users/t3", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(test)
        })
            .then(() => {
                console.log("Kasutaja lisatud");
            })
            .catch(err =>{
                console.log("Error", err);
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
                      <input ref={this.state.nimi} name="nimi" type="text" />
                  </div>
                  <div className={"row"}>
                      <label htmlFor="isikukood">Isikukood</label>
                      <input ref={this.state.isikukood} name="isikukood" type="text" />
                  </div>
                  <div className={"row"}>
                      <label htmlFor="phone">Telefon</label>
                      <input ref={this.state.phone} name="phone" type="text" />
                  </div>
                  <div className={"row"}>
                      <label htmlFor="elukoht">Elukoht</label>
                      <input ref={this.state.elukoht}  name="elukoht" type="text" />
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

export default Test10;

const Task = () => (
  <div>
    <h3>
      Ülesanne 10:
    </h3>
    <ol>
      <li>Tuleb teha sama vorm nagu <code>Ülesanne 9</code>, aga siin tuleb kasutada "uncontrolled" form </li>
      <li>Meeldetuletuse link <a href={LINK}>{LINK}</a> (sest te olete Reacti ametliku lehe juba ammu läbi lugenud)</li>
      <li>Tuleb muuta ainult faili <code>Test10.jsx</code></li>
    </ol>
  </div>
);

const LINK = 'https://reactjs.org/docs/uncontrolled-components.html';
