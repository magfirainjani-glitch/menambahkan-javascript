let dashboard = {
    totalPasien: 25,
    menungguPoli: 10,
    selesai: 15
}

document.getElementById("totalPasien").innerText =
    "Total Pasien: " + dashboard.totalPasien

document.getElementById("menungguPoli").innerText =
    "Menunggu Poli: " + dashboard.menungguPoli

document.getElementById("selesai").innerText =
    "Selesai: " + dashboard.selesai