let nome = "Super Choque";
let xp = 4000;
let nivel;

if (xp < 1000){
    nivel = "Ferro";
} else if (xp < 1000){
    nivel = "Bronze";
}else if (xp < 2000){
    nivel = "Prata";
}else if (xp < 5000){
    nivel = "Outo";
}else if (xp < 7000){
    nivel = "Platina";
}else if (xp < 9000){
    nivel = "Ascendente";
}else if (xp < 1000){
    nivel = "Imortal";
}else if (xp >= 1000){
    nivel = "Radiante";
}

console.log(`O héroi ${nome} tem ${xp} pontos e está no nível ${nivel}`);