const header =[
    React.createElement(
        'h1',
        {id : 'heading',
            xyz : "123s"
        },
        ["React First Elememnt create successfully",
        " React Second Elememnt create successfully"]
    ),
    React.createElement(
        'div',
        {id : 'heading',
            xyz : "123s"
        },
        ["React First Elememnt create successfully",
        " React Second Elememnt create successfully"]
    )
] 
console.log(header);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header); 
