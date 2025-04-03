
function calculatetotal() {
    let mathematics = Number(document.getElementById("mathematics").value);
    let statistics = Number(document.getElementById("statistics").value);
    let dcf = Number(document.getElementById("dcf").value);
    let ppalg = Number(document.getElementById("ppalg").value);
    let clanguage = Number(document.getElementById("clanguage").value);
    let practical = Number(document.getElementById("practical").value);

    let total = mathematics + statistics + dcf + ppalg + clanguage + practical;
    document.getElementById("totalmarks").value = total;

    let percentage = (total / 600) * 100;
    document.getElementById("percentage").value = percentage.toFixed(2) + "%";
}


function clearall(){
    document.getElementById('mathematics').value = '';
    document.getElementById('statistics').value = '';
    document.getElementById('dcf').value = '';
    document.getElementById('ppalg').value = '';
    document.getElementById('clanguage').value = '';
    document.getElementById('practical').value = '';

    document.getElementById('totalmarks').value = '';
    document.getElementById('percentage').value = '';
}