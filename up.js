//!Task 1
// let Hefte = prompt( " Heftenin gunlerini sec")
// switch ( Hefte ) {
//  case "1":
//         console.log( "1ci gun");
//         break;
//   case "2":
//         console.log( "2ci gun");
//         break;
//   case "3":
//         console.log( "3ci gun");
//         break;
//   case "4":
//         console.log( "4ci gun");
//         break;
//   case "5":
//         console.log( "5ci gun");
//         break;
//   case "6":
//         console.log( "Senbe");
//         break;
//   case "7":
//         console.log( "Bazar");
//         break;

//   default:
//         console.log("Daxil deyil");
//         break;
// }

//! task2

// let total = 0;
// let isBool = true

// while (isBool) {

//     let musteri = +prompt("qiymeti musteriden al")

//     if (musteri == 999){

//        isBool = false
//        break
//     }  
//      total += musteri

// }
//  console.log(total); 

//! task 3

// let star = +prompt(" daxil et")

// for( let i = 0 ; i<star; i++){
// console.log( " * " );
// }
// }
//! task4 
// for (let i= 0; i<100; i++){
//    if(i%2 ==1){
//  console.log(i);

//    } 

// }
//! Fibboronci task5
// let n = +prompt("reqem daxil et")
// if (n === 1 || n === 2) {
//     console.log(1);
// }else {
//     let evvelki = 1;
//     let indiki = 1;
//     let netice = 0;

//     for (let i = 3; i <= n; i++) {
//         netice = evvelki + indiki;
//         evvelki = indiki;
//         indiki = netice
//     }
//     console.log( indiki);

// }


//!ev taski1
// let pin = 1234;
// let giris = false;

// for (let i = 0; i < 3; i++) {
//     let istifadeci = +prompt(" Pin - i daxil edin");

//     if (istifadeci === pin) {
//         console.log(" daxil oldunuz");
//         giris = true;
//         break;

//     }
//     else if (pin != giris) {
//         console.log(" Yanlis pin");
//     }

// }
//     if(!giris) {
//         console.log(" kart bloklandi");

//     }

//! EV TASKI2
// let Sehife = 300;
// let kitab = 0;
// while (Sehife > 0) {
//     let oxu = +prompt(" bugun oxunan sehife sayi")
//     Sehife -= oxu

//     Sehife++
//     console.log("Hələ"  + Sehife +  "  Səhifə qaldı");

// }
// console.log(`tebrikler  ${kitab} bitti `);

//!task 1 sinif
// let eded = +prompt(" Eded daxil  edin")
// for (let i = 1; i <= eded; i++) {
//     if (eded % i == 0) {
//         console.log(i);

//     }

// }
//!task2
// let total = 0 ;
// let eded = +prompt(" Eded daxil edin")
// for (let i = 1; i <= eded; i++) {
//     if (eded % i === 0) {
//         console.log( `${i} " eded sade"`);
//         total++
//     }

// }
// if (total >2) {
//     console.log(`"murekkeb"`);

// }
//!task3

// let kod = true;


// while (true) {
//     let istifadeci = +prompt("Kodda reqem teyin edin")
//     if (istifadeci == 30) {
//         console.log("Aferin");
//         break;

//     }
//     else if (istifadeci < 30) {
//         console.log("yuxari qalx");

//     }else{
//         console.log("Asagi dus");

//     }

// }
//!task4

// let qiymet = 0
// let isBool = true
// let cheese = ""

// while (isBool) {
//     let sifaris1 = prompt(" Pizza sifaris edin")
//     switch (sifaris1) {
//         case "mozarelle":
//             qiymet += 13
//             let pendir1 = prompt("elave pendir he / yox")
//             if (pendir1 == "he") {
//                 cheese = "pendirli"
//                 qiymet += 3
//             } else {
//                 cheese = "pendirsiz"
//                 qiymet += 0
//             }
//             isBool = false
//             break;
//         case "margerita":
//             qiymet += 15
//             let pendir2 = prompt("elave pendir he / yox")
//             if (pendir2 == "he") {
//                 cheese = "pendirli"
//                 qiymet += 3
//             } else {
//                 cheese = "pendirsiz"
//                 qiymet += 0
//             }
//             isBool = false
//             break;
//         case "pepperoni":
//             qiymet += 18
//             let pendir3 = prompt("elave pendir he / yox")
//             if (pendir3 == "he") {
//                 cheese = "pendirli"
//                 qiymet += 3
//             } else {
//                 cheese = "pendirsiz"
//                 qiymet += 0
//             }
//             isBool = false
//             break;

//         case "bbq":
//             qiymet += 20
//             let pendir4 = prompt("elave pendir he / yox")
//             if (pendir4 == "he") {
//                 cheese = "pendirli"
//                 qiymet += 3
//             } else {
//                 cheese = "pendirsiz"
//                 qiymet += 0
//             }
//             isBool = false
//             break;

//         default:
//             console.log("sehv secim");

//             break;
//     }

// }

// alert(`pizza aldiz ${cheese} yekun qiymet ${qiymet}`)

let surucu = prompt(`Suruculuk imtahanina xos geldiniz, Adinizi daxil edin `)
let test = prompt(" test imtahanina daxil olmaq ucun daxil ol yazin")



let sual1 = prompt(`Dogru cavabi secin.
1. Yaşıl işıq yandıqda sürücü nə etməlidir?
A) Dayanmaq
B) Hərəkəti davam etdirmək (və ya başlamaq)
C) Gözləmək
D) Sürəti artırmaq
    `)
let startBool =true;
let dogrudur = true;
if( startBool === true){
    let duzgun = 0;
switch ( sual1) {
    case "A":
        console.log("sehvdir");
         dogrudur = false;
        break;
    case "B":
        console.log(" dogrudur");
        dogrudur = true;
        duzgun++
        break;
    case "C":
        console.log(" sehvdir");
         dogrudur = false;
        break;
    case "D":
        console.log("sehvdir");
         dogrudur = false;
        break;
    default:
        console.log(" yanlis secim");
         dogrudur = false;
        break;
}

let sual2 = prompt(`Dogru cavabi secin.
2. Yaşayış məntəqələrində minik avtomobillərinin maksimum icazə verilən sürəti adətən neçə km/saatdır?
A) 50 km/saat 
B) 70 km/saat
C) 90 km/saat
D) 110 km/saat
    `)

switch ( sual2) {
    case "A":
        console.log("dogrudur");
          dogrudur = true;
        duzgun++
        break;
    case "B":
        console.log(" sehvdir");
       dogrudur = false;
        break;
    case "C":
        console.log(" sehvdir");
         dogrudur = false;
        break;
    case "D":
        console.log("sehvdir");
         dogrudur = false;
        break;
    default:
        console.log(" yanlis secim");
         dogrudur = false;
        break;
}

let sual3 = prompt(`Dogru cavabi secin.
3. Avtomobili idarə edərkən təhlükəsizlik kəmərindən istifadə etmək kimə şamil olunur?
A) Yalnız sürücüyə
B) Yalnız ön oturacaqda əyləşənlərə
C) Həm sürücüyə, həm də bütün sərnişinlərə 
D) İstəyə bağlıdır
    `)

switch ( sual3) {
    case "A":
        console.log("sehvdir");
          dogrudur = false;
        break;
    case "B":
        console.log(" sehvdir");
       dogrudur = false;
        break;
    case "C":
        console.log("dogrudur");
         dogrudur = true;
        duzgun++
        break;
    case "D":
        console.log("sehvdir");
         dogrudur = false;
        break;
    default:
        console.log(" yanlis secim");
         dogrudur = false;
        break;
}
let sual4 = prompt(`Dogru cavabi secin.
4. Ötmə əməliyyatını hansı tərəfdən yerinə yetirməyə icazə verilir?
A) Yalnız sol tərəfdən 
B) Yalnız sağ tərəfdən
C) Həm sol, həm də sağ tərəfdən
D) Yolun kənarından
    `)

switch ( sual4) {
    case "A":
        console.log("dogrudur");
          dogrudur = true;
        duzgun++
        break;
    case "B":
        console.log(" sehvdir");
       dogrudur = false;
        break;
    case "C":
        console.log("sehvdir");
         dogrudur = false;
        break;
    case "D":
        console.log("sehvdir");
         dogrudur = false;
        break;
    default:
        console.log(" yanlis secim");
         dogrudur = false;
        break;
}


let sual5 = prompt(`Dogru cavabi secin.
5. Svetoforun qırmızı yanıb-sönən işığı və ya qırmızı siqnalı nəyi bildirir?
A) Hərəkətə icazə verilir
B) Diqqətli olmaqla hərəkəti davam etdirmək
C) Hərəkət qəti qadağandır (dayanmaq lazımdır) 
D) Sürəti azaltmaq lazımdır`)

switch ( sual5) {
    case "A":
        console.log("sehvdir");
          dogrudur = false;
        break;
    case "B":
        console.log(" sehvdir");
       dogrudur = false;
        break;
    case "C":
        console.log("dogrudur");
         dogrudur = true;
        duzgun++
        break;
    case "D":
        console.log("sehvdir");
         dogrudur = false;
        break;
    default:
        console.log(" yanlis secim");
         dogrudur = false;
        break;
}


if (duzgun >=4) {
    alert(`Tebrikler Imtahani kecdiniz`);
  
}else{ 
    alert(" Teesufler olsun ki kesildiniz gelen il birde gelersiz. (isdeseniz) ");
    
}

}
