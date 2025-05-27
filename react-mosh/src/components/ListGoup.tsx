import { Fragment } from "react/jsx-runtime";

function ListGroup() {

  const items = ['Bengaluru','Wash-DC','Berlin','Mumbai','Pune']

  return (
    <>
    <h1>asdf</h1>
    {items.length === 0 ? <p>No Items</p> : null}
    <ul className="list-group">
      {items.map((item) => (
        <li key={item}>{item}</li>
        ))}
    </ul>
    </>
  );
}

export default ListGroup;
