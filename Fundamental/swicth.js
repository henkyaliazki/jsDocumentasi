/*
 *Sama dengan if statement yaitu untuk percabangan atau pengambilan keputusan 
 ! syntax
    swicth(statement){
        case 1:
        lakukan logika disini
        break;
        case 2:
        lakukan logika
        break;
        default => sama dengan else
    }
 */

const language = "jawa";
switch (language) {
    case "indonesia":
        console.log("Terimakasih");
        break;
    case "sunda":
        console.log("Matur Nuhun")
        break;
    case "jawa":
        console.log("Matur Suwun")
        break;
    default:
        console.log("Onde-Mande")
        break;
}