import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ButtonAdd from "./components/ButtonAdd";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like/Like";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleGameNameChange = () => {
    setGame({ ...game, player: { ...game.player, name: "Michael" } });
  };

  const handleAddToppings = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "GreatRoom"] });
  };

  const handleCartUpdate = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  const handleBugsFixUpdate = () => {
    // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug));
    setBugs(
      produce((draft) => {
        // const bug = draft.find(bug => bug.id === 1);
        // if(bug) bug.fixed = true;
        draft.find((bug) => bug.id === 1)!.fixed = true;
      })
    );
  };

  const handleContentExpansion = () => {
    setContentVisibility((contentVisible: boolean) => !contentVisible);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: "Bug 1",
      fixed: false,
    },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  const [contentVisible, setContentVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello Michael, <span> you are great</span>.
          <br />
          <strong>Holy Michael!</strong> You should check in on some of those
          fields below.
        </Alert>
      )}

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <Like onClick={() => console.log("Clicked!")} />

      <Button type="primary" label="start"></Button>
      <br />
      <br />
      <Button type="danger" label="stop"></Button>

      <ButtonAdd color="secondary" onClick={() => setAlertVisibility(true)}>
        Toggle Alert
      </ButtonAdd>
      <div>
        {bugs.map((bug) => (
          <p key={bug.id}>
            {bug.title} {bug.fixed ? "Fixed" : "New"}{" "}
          </p>
        ))}
        <button onClick={handleBugsFixUpdate}>Change Bug Status</button>
      </div>

      <div>
        <NavBar cartItemsCount={cartItems.length} />
        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      </div>
      <div>
        <ExpandableText maxChars={150}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          soluta doloribus, molestias quibusdam ipsam dolor perspiciatis ipsum
          labore eligendi enim voluptatem, eveniet blanditiis numquam iure minus
          odio saepe vel expedita. Natus fuga magni at officiis iure ullam
          quibusdam deserunt officia! Quos doloremque excepturi at unde nesciunt
          repellendus nihil, nam delectus itaque fuga esse, laudantium ea sequi
          qui! Nostrum quisquam excepturi at vero cumque itaque a delectus
          corrupti fugiat. Qui ipsa exercitationem delectus veniam omnis alias
          iure voluptas? Inventore itaque magni tempore, culpa architecto nisi
          saepe sunt vero cumque fugiat incidunt voluptates perspiciatis eum
          ipsam dolores facilis quidem? Vero, iusto esse.
        </ExpandableText>
      </div>
      <Form></Form>
    </div>
  );
}

export default App;
