const Player = ({ name, sport }) => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, name),
    React.createElement("p", {}, sport)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Sports Personalities"),
    React.createElement(Player, {
      name: "Sachin Tendulkar",
      sport: "Cricket"
    }),
    React.createElement(Player, {
      name: "Roger Federer",
      sport: "Tennis"
    }),
    React.createElement(Player, { name: "Ronaldo", sport: "Football" })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
