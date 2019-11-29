import React from "react";
import PropTypes from "prop-types";
import test1Example from "../images/test1_example.png";

// eslint-disable-next-line
const ITEMS = [
  {
    name: "Galaxy S10+",
    price: 1000,
  },
  {
    name: "iPhone 11 Pro",
    price: 1200,
  },
  {
    name: "huawei p20 pro",
    price: 900,
  }
];

const Items = () => {
  return (
      <div className={"items"}>
        {
          ITEMS.map( item => {
            return <Item name={item.name} price={item.price} key={item.name}/>;
          })
        }
      </div>
  );
};

const Item = (props) => {
  return(
      <div>
        Name: {props.name} Price: {props.price}
      </div>
  );
};

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number
};

const ItemSum = () => {
  var sum = 0;
  ITEMS.forEach(item => {
    sum = sum + item.price;
  });
  return sum;
};

const Test1 = () => {
  return (
    <div>
      <div className={"description"}>
        Ülesanne 1:
        <p>
          Lehel tuleb kuvada kõik tooted muutujas <code>ITEMS</code>.
          Iga toote kohta peab olema nimi ja hind.
          Iga toode peab olema uuel real.
        </p>
        <div>Näiteks:</div>
        <img style={{width: 200}} src={test1Example}/>
      </div>
      <div>
        <Items/>
      </div>
      <div><span className={"bold"}>Summa kokku:</span> <ItemSum/></div>
    </div>
  );
};

export default Test1;
