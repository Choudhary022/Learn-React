
/**
 * <div id="parent">
 *     <div id="child">
 *      <h1></h1>
 *     </div>
 * </div>
 * 
 */


const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am h1 tag ! "),
        React.createElement("h2", {}, "I am h2 tag ! ")
        ]),
        React.createElement("div", { id: "child" },
            [React.createElement("h1", {}, "I am h1 tag ! "),
            React.createElement("h2", {}, "I am h2 tag ! ")
            ]
    
)]);

const root = ReactDOM.createRoot(document.getElementsByClassName("demo")[0])

root.render(parent)