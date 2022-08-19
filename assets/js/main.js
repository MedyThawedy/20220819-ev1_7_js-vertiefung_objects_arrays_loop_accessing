let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

/*
In dieser Übung lernen wir, wie man auf die Objekte mit Hilfe von forEach() zugreift.
Verwende den Code aus dem Kommentarbereich.
Greife auf die Eigenschaften des Objekts zu und gib folgende Werte mit forEach() 
im HTML aus:
Alle “artist” 
Alle “title”
Alle “medium”

Bonus Aufgabe:
Gib alle “release_year” älter als 1975 aus

*/
function fnShowObj() {
    document.write('<h1>Please open the console!</h1>');
    myMusic.forEach(
        ({ artist, title, release_year, medium, gold }) => {
            document.write('<br>');
            document.write('<hr>');
            document.write('<br>');
            console.log(artist);
            document.write('<p>' + artist + '</p>');
            console.log(title);
            document.write('<p>' + title + '</p>');
            console.log(medium);
            document.write('<p>' + medium + '</p>');
            document.write('<br>');
            document.write('<br>');
        }
    );
}

fnShowObj();