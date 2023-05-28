let data = [
    {
        name: "Item 1",
        description: "item 1 description"
    },
    {
        name: "Item 2",
        description: "item 2 description"
    },
    {
        name: "Item 3",
        description: "item 3 description"
    },
    {
        name: "Item 4",
        description: "item 4 description"
    }
];

const info = document.querySelector("#info");

let details = data.map(function(item){
    return "<div>" + item.name + ": " + item.description + "</div>";
});

info.innerHTML = details.join("\n");
