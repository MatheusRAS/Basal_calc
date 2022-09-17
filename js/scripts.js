const btn = document.querySelector("#submit");

//Funçao para aparecer box em volta do result
function mostrar(){
    document.getElementsByClassName('container')[0].style.display="block";
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

    document.getElementById("basal").innerHTML = 'Sua taxa Metabolica basal é: ' + parseInt(conta) + ' Kcal';
    document.getElementById("saudavel").innerHTML = 'Para emagrecer saudavel deve consumir: '+ emagrecer + ' Kcal';
    
    document.getElementById("proteina").innerHTML = 'Proteina: ' + parseInt(proteina) + 'g'
    document.getElementById("carbo").innerHTML = 'Carboidratos: ' + parseInt(carbo)  + 'g'
    document.getElementById("gordura").innerHTML = 'Gordura: ' + parseInt(gordura) + 'g'

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
    
    const conta = 655 + pesoc + alturac - idadec;
    const emagrecer = conta - 500;

    const proteina_kcal = (emagrecer / 100)*40;
    const carbo_kcal  = (emagrecer / 100)*20;
    const gordura_kcal = (emagrecer / 100)*20;

    const proteina = proteina_kcal / 4;
    const carbo = carbo_kcal / 4;
    const gordura = gordura_kcal / 9;

   
    document.getElementById("basal").innerHTML = 'Sua taxa Metabolica basal é: ' + parseInt(conta) + ' Kcal';
    document.getElementById("saudavel").innerHTML = 'Para emagrecer saudavel deve consumir: '+ parseInt(emagrecer) + ' Kcal';
    
    document.getElementById("proteina").innerHTML = 'Proteina: ' + parseInt(proteina) + 'g';
    document.getElementById("carbo").innerHTML = 'Carboidratos: ' + parseInt(carbo)  + 'g';
    document.getElementById("gordura").innerHTML = 'Gordura: ' + parseInt(gordura) + 'g';
        
        }

})
