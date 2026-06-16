window.onload = function(){
    console.log("Kalkulator Nilai Semester Siap.");
};

function hitungNilaiAkhir(tugas, uts, uas){
    return (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
}

function tentukanGrade(nilai){
    if(nilai >= 80) return "A";
    if(nilai >= 70) return "B";
    if(nilai >= 60) return "C";
    if(nilai >= 50) return "D";
    return "E";
}

function validasiInput(nilai, nama){
    if(nilai.trim() === ""){
        return nama + " tidak boleh kosong";
    }
    
    let num = Number(nilai);
    if(isNaN(num)){
        return nama + " harus berupa angka";
    }

    if(num < 0 || num > 100){
        return nama + " harus antara 0 - 100";
    }

    return null;
}

document.getElementById("btnHitung").addEventListener("click", function(){

    let tugas = document.getElementById("tugas").value;
    let uts = document.getElementById("uts").value;
    let uas = document.getElementById("uas").value;

    let error =
        validasiInput(tugas, "Nilai Tugas") ||
        validasiInput(uts, "Nilai UTS") ||
        validasiInput(uas, "Nilai UAS");

    let errorDiv = document.getElementById("error");
    let hasilDiv = document.getElementById("hasil");

    if(error){
        errorDiv.innerHTML = error;
        hasilDiv.style.display = "none";
        return;
    }

    errorDiv.innerHTML = "";

    let akhir = hitungNilaiAkhir(Number(tugas), Number(uts), Number(uas));
    let grade = tentukanGrade(akhir);

    hasilDiv.className = "hasil";
    hasilDiv.classList.add("grade-" + grade);

    document.getElementById("nilaiAkhir").innerHTML = "Nilai Akhir: " + akhir.toFixed(2);
    document.getElementById("grade").innerHTML = "Grade: " + grade;
    
    hasilDiv.style.display = "block";
});