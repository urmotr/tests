import React from "react";
import OnlineCount from "../OnlineCount";

class Test11 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            onlineCount: 20,
        };
    }

    componentDidMount() {
        window.setInterval(() =>{
            fetch(`/api/v1/users/onlineCount`)
                .then(res => {
                    return res.json();
                })
                .then(count => {
                    this.updateStatus(count.random);
                })
                .catch(err => {
                    console.log("item page", err);
                });
        }, 3000);
    }
    updateStatus = (number) => {
        this.setState({
            onlineCount: number
        });
    };
  render() {
    return (
      <div>
        <Task />
        <OnlineCount>{this.state.onlineCount}</OnlineCount>
      </div>
    );
  }
}

export default Test11;

const Task = () => (
  <div>
    <h3>
      Ülesanne 11:
    </h3>
    <ol>
      <li>Loo uus REST teenus. Näiteks. <code>GET /api/v1/users/onlineCount</code></li>
      <li>See otspunkt peab tagastama numbri, kui palju kasutajad on hetkel online</li>
      <li>Kuna meil ei ole "tegelikult" live kasutajad,
        siis peab see otspunkt tagastama <code>random</code> numbri</li>
      <li>Frontend peab pärima serverist iga <code>3 sekundi</code> tagant, kui palju inimesi on hetkel online</li>
      <li>See number tuleb kuvada ekraanil</li>
      <li>Tuleb muuta ainult faile <code>Test11.jsx</code> ja <code>user.router.js</code></li>
      <li>Pane tähele, et kui kasutaja navigeerib end teisele lehele, siis peab tagataustal päringu saatmine lõppema.</li>
    </ol>
  </div>
);
