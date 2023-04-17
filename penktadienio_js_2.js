console.clear();

/*
function laikas(h1, min1, h2, min2) {
    t1 = (h1 * 60 + min1);
    t2 = (h2 * 60 + min2);
    if (t2 > t1) {
        t = t2 - t1;
    } else {
        t = 24 * 60 - t1 + t2;
    }
    return "Mokinys mokesi " + Math.floor(t / 60) + "val. " + (t % 60) + "min";
}

console.log(laikas(14, 10, 10, 30));
*/

/*
function armstrong() {
    let numA = "";
    for (let number = 100; number <= 999; number++) {
        let num = number.toString();
        if (number === (num[0] ** 3 + num[1] ** 3 + num[2] ** 3)) {
            numA += `${number} = ${num[0]}^3 + ${num[1]}^3 + ${num[2]}^3\n`;
        }
    }
    return numA;
}

console.log(armstrong());
*/

/*
function vector(x1, y1, x2, y2) {
    let x = x1 - x2;
    let y = y1 - y2;
    let atstumas = Math.sqrt(x**2 + y**2);
    return "Atstumas tarp taskų: " + atstumas;
}

console.log(vector(5, 0, 10, -10));
*/

/*
function numbers(num) {
    const numString = Math.abs(num).toString();
    let lyginiai = 0;
    let nelyginiai = 0;
    for (let i = 0; i < numString.length; i++) {
      const digit = Number(numString[i]);
      if (digit % 2 === 0) {
        lyginiai++;
      } else {
        nelyginiai++;
      }
    }
    return `${lyginiai} lyginiai skaiciai, ${nelyginiai} nelyginiai skaiciai`;
  }
  
  const num = 7982416;
  const rezultatas = numbers(num);
  console.log(rezultatas);
*/

/*
function sumasunuostoliais(ilgis, plotis, kainauzkvadrata) {
    const kambarys = ilgis * plotis;
    const nuostoliai = kambarys * 1.05;
    const plyteles = Math.ceil(nuostoliai / 1.5);
    const plyteliukaina = plyteles * kainauzkvadrata * 1.5;
    return plyteliukaina;
}

const ilgis = 10;
const plotis = 4;
const kainauzkvadrata = 20;
  
const isviso = sumasunuostoliais(ilgis, plotis, kainauzkvadrata);
console.log("Plyteliu kaina: " + isviso + " eurai");
*/

/*
function mokiniai() {
    const vidurkis = [];
    for (let i = 0; i < 30; i++) {
      vidurkis.push(Math.floor(Math.random() * 10) + 1);
    }
      let topstudent = vidurkis[0];
    let belowaverage = vidurkis[0];
    for (let i = 1; i < vidurkis.length; i++) {
      if (vidurkis[i] > topstudent) {
        topstudent = vidurkis[i];
      }
      if (vidurkis[i] < belowaverage) {
        belowaverage = vidurkis[i];
      }
    }
    return {
      topstudent: topstudent,
      belowaverage: belowaverage
    };
}

const result = mokiniai();
console.log("Top mokinys: " + result.topstudent);
console.log("Below average mokinys: " + result.belowaverage);
*/

/*
function cobrach(sumaN) {
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    while (sumaN > 0) {
      if (sumaN >= 5) {
        n1++;
        sumaN -= 5;
      } else if (sumaN >= 2) {
        n2++;
        sumaN -= 2;
      } else {
        n3++;
        sumaN -= 1;
      }
    }
    const atsakymas = `Norint gauti ${n} sumą litais, mums reikės ${n1} monetų po 5 lt, ${n2} monetų po 2 litus ir ${n3} monetų po 1 litą. Viso monetų ${n1 + n2 + n3} skaičius.`;
    return atsakymas;
}
  
const n = 99;
const atsakymas = cobrach(n);
console.log(atsakymas);
*/