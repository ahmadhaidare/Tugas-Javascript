const Rhodey = {
    berat_badan: 55,
    tinggi_badan: 175 / 100,
}

function HitungBMI() {

    let BMI = Rhodey.berat_badan / (Rhodey.tinggi_badan * Rhodey.tinggi_badan)
    console.log("BMI", BMI)

    if (BMI < 18.5) {
        console.log("Kekurangan Berat Badan OKAowkaowkaoow")
    }
    else if (BMI < 24.9) {
        console.log("Anjas Ideal")
    }
    else if (BMI < 29.9) {
        console.log("Kelebihan dikit kasian dekkkdek")
    }
    else if (BMI > 30.0) {
        console.log("Obesitas")
    }
}

HitungBMI()