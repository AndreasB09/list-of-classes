import "./App.css";
import ClassList from "./ClassList.jsx";
import Card from "./Card.jsx";

import cardObjects from "./ClassList.jsx";

function App() {
  return (
    <div className="app">
      <ClassList>
        {cardObjects.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            desc={card.desc}
            image={card.image}
          />
        ))}
      </ClassList>
    </div>
  );
}

export default App;
