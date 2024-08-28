const heading = React.createElement("div", {id:"perent"}, [
    
    React.createElement("div", {id:"chid"}, [
        React.createElement("h1", {}, "Hello React program "),
        React.createElement("h2", {}, "Hello React program ")
    ]),
    React.createElement("div", {id:"chid2"}, [
        React.createElement("h1", {}, "Hello React program "),
        React.createElement("h2", {}, "Hello React program ")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);