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
    document.querySelector('#wcount').innerHTML = "Word Count: " +
        (document.getElementById("nwrite").value.split(' ').length - 1);
}

function saveNote() {
    fs.writeFile('/note', document.getElementById("nwrite").value, function (err) {
        if (err) { throw err; }
    });
}

function printNote() {

}
