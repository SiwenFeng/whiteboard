const fs = new Filer.FileSystem();
var str = "";

window.addEventListener('DOMContentLoaded', (event) => {
    fs.readFile('/note', 'utf8', function (err, data) {
        if (err !== null) {
            str = "Welcome to my note-taking app!"
        }
        else if (data !== null) {
            str = data;
        }
        document.querySelector('#note').innerHTML = str;
        showNote();
    })
});

window.setInterval(() => {
    saveNote();
}, 2000);

window.setInterval(() => {
    showNote();
}, 500);

function wipeNote() {
    document.querySelector('#note').innerHTML = "";
    document.getElementById("nwrite").value = "";
    document.querySelector('#wcount').innerHTML = "";
}

function showNote() {
    var count = document.getElementById("nwrite").value.trim();
    count = count.replace(/&nbsp;+/g, " ");
    count = count.replace(/<[^>]*>/g, " ");
    count = count.replace(/\s+/g, " ");
    count = count.split(" ");
    var p = 0;
    for (var i = 0; i < count.length; i++) {
        if (count[i] == "") {
            ++p;
        }
    }
    count = count.length - p;
    document.getElementById("wcount").innerHTML = "Word Count: " + count;
}

function saveNote() {
    fs.writeFile('/note', document.getElementById("nwrite").value, function (err) {
        if (err) { throw err; }
        //if (err) { alert(err); }
    });
}

function printNote() {
    let file = new File(
        [document.getElementById("nwrite").value],
        "notes.txt",
        { type: "text/plain;charset=utf-8" }
    );
    saveAs(file);
}
