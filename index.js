const fs = new Filer.FileSystem();
var str = "";

window.addEventListener('DOMContentLoaded', (event) => {
    fs.readFile('/note', 'utf8', function (err, data) {
        if (err) if (data) document.querySelector("#note").innerHTML = data;
    })
});
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
        if (err) { alert(err)}
    });
}
function downloadNote() {
    let file = new File(
        [document.getElementById("nwrite").value],
        "notes.txt",
        { type: "text/plain;charset=utf-8" }
      );
      saveAs(file);
}
