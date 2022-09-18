const btn = document.querySelector("#submit");

//Funçao para aparecer box em volta do result
function mostrar(){
    document.getElementsByClassName('container')[0].style.display="block";
    document.getElementsByClassName('container2')[0].style.display="block";
}
     //evento para receber dados   
btn.addEventListener("click", function(e){
    e.preventDefault();

    const sexo = document.querySelector("#sexo");
    const sexov = sexo.value;

    if(sexov == "homem"){
    const peso = document.querySelector("#peso");
    const pesov = peso.value;
    const pesoint = parseInt(pesov);
    const pesoc = 13.8 * pesoint;

    const idade = document.querySelector("#idade");
    const idadev = idade.value;
    const idadeint = parseInt(idadev);
    const idadec = 6.8 * idadeint;

    const altura = document.querySelector("#altura");
    const alturav = altura.value;
    const alturaint = parseInt(alturav);
    const alturac = 5 * alturaint;

    const conta = 66 + pesoc + alturac - idadec;
    const emagrecer = conta - 500

    const proteina_kcal = (emagrecer / 100)*40;
    const carbo_kcal  = (emagrecer / 100)*20;
    const gordura_kcal = (emagrecer / 100)*20;

    const proteina = proteina_kcal / 4;
    const carbo = carbo_kcal / 4;
    const gordura = gordura_kcal / 9;
    
        //Calculo dieta

    const proteina_ref =  proteina / 4;
    const carbo_ref =  carbo / 4;
    const gordura_ref =  gordura / 4;
        //proteina
    const ovo = proteina_ref / 6.26; //Un
    const frango = proteina_ref / 0.31; //1g

    //carbo
    const arroz = carbo_ref / 0.28; //1g
    const batata = carbo_ref / 0.24; //1g
    const pao = carbo_ref / 11; //fatia
    const arrozint = carbo_ref / 0.23; //1g

    document.getElementById("basal").innerHTML = 'Sua taxa Metabolica basal é: ' + parseInt(conta) + ' Kcal';
    document.getElementById("saudavel").innerHTML = 'Para emagrecer saudavel deve consumir: '+ emagrecer + ' Kcal';
    
    document.getElementById("proteina").innerHTML = 'Proteina: ' + parseInt(proteina) + 'g'
    document.getElementById("carbo").innerHTML = 'Carboidratos: ' + parseInt(carbo)  + 'g'
    document.getElementById("gordura").innerHTML = 'Gordura: ' + parseInt(gordura) + 'g'


    document.getElementById("pref1").innerHTML = 'Ovo cozido Grande: ' + parseInt(ovo) + 'UN ou ' + parseInt(frango) + 'g de Frango cozido ou assado.';
    document.getElementById("cref1").innerHTML = 'Pão integral' + parseInt(pao) + ' fatia(s) ou ' + parseInt(batata) + 'g de batata doce';

    document.getElementById("pref2").innerHTML ='Ovo cozido Grande: ' + parseInt(ovo) + 'UN ou ' + parseInt(frango) + 'g de Frango cozido ou assado.'; 
    document.getElementById("cref2").innerHTML = 'Arroz Branco cozido: ' + parseInt(arroz) + 'g ou ' + parseInt(arrozint) + 'g de Arroz Integral cozido';
    
    document.getElementById("pref3").innerHTML = 'Ovo cozido Grande: ' + parseInt(ovo) + 'UN ou ' + parseInt(frango) + 'g de Frango cozido ou assado.';
    document.getElementById("cref3").innerHTML = 'Arroz Branco cozido: ' + parseInt(arroz) + 'g ou ' + parseInt(batata) + 'g de batata doce cozida' ;

    document.getElementById("pref4").innerHTML = 'Ovo cozido Grande: ' + parseInt(ovo) + 'UN ou ' + parseInt(frango) + 'g de Frango cozido ou assado.';
    document.getElementById("cref4").innerHTML = 'Pão integral: ' + parseInt(pao) + 'fatias ou ' + parseInt(batata) + 'g de batata doce cozida' ;
    
    
    }
    if(sexov == "mulher"){
        const peso = document.querySelector("#peso");
        const pesov = peso.value;
        const pesoint = parseInt(pesov);
        const pesoc = 9.6 * pesoint;
    
        const idade = document.querySelector("#idade");
        const idadev = idade.value;
        const idadeint = parseInt(idadev);
        const idadec = 4.7 * idadeint;
    
        const altura = document.querySelector("#altura");
        const alturav = altura.value;
        const alturaint = parseInt(alturav);
        const alturac = 1.8 * alturaint;
        //calculo basal
    const conta = 655 + pesoc + alturac - idadec;
        //calculo emagrecer
    const emagrecer = conta - 500;
        //calculo macros
    const proteina_kcal = (emagrecer / 100)*40;
    const carbo_kcal  = (emagrecer / 100)*20;
    const gordura_kcal = (emagrecer / 100)*20;
        
    const proteina = proteina_kcal / 4;
    const carbo = carbo_kcal / 4;
    const gordura = gordura_kcal / 9;
        //Calculo dieta

    const proteina_ref =  proteina / 4;
    const carbo_ref =  carbo / 4;
    const gordura_ref =  gordura / 4;
        //proteina
    const ovo = proteina_ref / 6.26; //Un
    const frango = proteina_ref / 0.31; //1g

    //carbo
    const arroz = carbo_ref / 0.28; //1g
    const batata = carbo_ref / 0.24; //1g
    const pao = carbo_ref / 11; //fatia
    const arrozint = carbo_ref / 0.23; //1g

        //basal e emagrecer
    document.getElementById("basal").innerHTML = 'Sua taxa Metabolica basal é: ' + parseInt(conta) + ' Kcal';
    document.getElementById("saudavel").innerHTML = 'Para emagrecer saudavel deve consumir: '+ parseInt(emagrecer) + ' Kcal';
    
    document.getElementById("proteina").innerHTML = 'Proteina: ' + parseInt(proteina) + 'g';
    document.getElementById("carbo").innerHTML = 'Carboidratos: ' + parseInt(carbo)  + 'g';
    document.getElementById("gordura").innerHTML = 'Gordura: ' + parseInt(gordura) + 'g';
       
    
    document.getElementById("pref1").innerHTML = 'Ovo cozido Grande: ' + parseInt(ovo) + 'UN ou ' + parseInt(frango) + 'g de Frango cozido ou assado.';
    document.getElementById("cref1").innerHTML = 'Pão integral' + parseInt(pao) + ' fatia(s) ou ' + parseInt(batata) + 'g de batata doce';

    document.getElementById("pref2").innerHTML ='Ovo cozido Grande: ' + parseInt(ovo) + 'UN ou ' + parseInt(frango) + 'g de Frango cozido ou assado.'; 
    document.getElementById("cref2").innerHTML = 'Arroz Branco cozido: ' + parseInt(arroz) + 'g ou ' + parseInt(arrozint) + 'g de Arroz Integral cozido';
    
    document.getElementById("pref3").innerHTML = 'Ovo cozido Grande: ' + parseInt(ovo) + 'UN ou ' + parseInt(frango) + 'g de Frango cozido ou assado.';
    document.getElementById("cref3").innerHTML = 'Arroz Branco cozido: ' + parseInt(arroz) + 'g ou ' + parseInt(batata) + 'g de batata doce cozida' ;

    document.getElementById("pref4").innerHTML = 'Ovo cozido Grande: ' + parseInt(ovo) + 'UN ou ' + parseInt(frango) + 'g de Frango cozido ou assado.';
    document.getElementById("cref4").innerHTML = 'Pão integral: ' + parseInt(pao) + 'fatias ou ' + parseInt(batata) + 'g de batata doce cozida' ;
    

}

})
