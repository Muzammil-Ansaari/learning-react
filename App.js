const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child1" },
        [React.createElement(
            "h1",
            {},
            "I'm H1 Heading."),
        React.createElement(
            "h2",
            {},
            "I'm H2 Heading.")]),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement(
            "h1",
            {},
            "I'm H1 Heading."),
        React.createElement(
            "h2",
            {},
            "I'm H2 Heading.")])]);

console.log(parent)

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(parent);