let barangList = [];

function tambahBarang() {
    let nama = document.getElementById("namaBarang").value;
    let stok = document.getElementById("stokBarang").value;

    if (nama && stok) {
        barangList.push({ nama, stok });
        tampilkanBarang();
        document.getElementById("namaBarang").value = "";
        document.getElementById("stokBarang").value = "";
    } else {
        alert("Isi semua kolom!");
    }
}

function hapusBarang(index) {
    barangList.splice(index, 1);
    tampilkanBarang();
}

function tampilkanBarang() {
    let daftarBarang = document.getElementById("daftarBarang");
    daftarBarang.innerHTML = "";

    barangList.forEach((barang, index) => {
        let row = `<tr>
            <td>${barang.nama}</td>
            <td>${barang.stok}</td>
            <td><button onclick="hapusBarang(${index})">Hapus</button></td>
        </tr>`;
        daftarBarang.innerHTML += row;
    });
}

tampilkanBarang();
