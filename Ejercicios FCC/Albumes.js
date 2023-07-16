// Configuración
function updateRecords(records, id, prop, value) {
    let album = records[id];
    if (value === "") {
        delete album[prop];
    } else if (prop !== "tracks") {
        album[prop] = value;
    } else if (album["tracks"] === undefined) {
        album.tracks = [];
    }
    if (prop === "tracks" && value !== "") {
        album[prop].push(value);
    }
    console.log(records);
    return records;
}

updateRecords(recordCollection, 2548, "artist", "");