function toggleIndice() {
    const indiceLista = document.getElementById('indice-lista');
    if (indiceLista.style.display === 'none') {
        indiceLista.style.display = 'block';
    } else {
        indiceLista.style.display = 'none';
    }
}
function toggleTable(tableId) {
    const tableContent = document.getElementById(tableId);
    if (tableContent.style.display === "none" || tableContent.style.display === "") {
        tableContent.style.display = "block";
    } else {
        tableContent.style.display = "none";
    }
}


