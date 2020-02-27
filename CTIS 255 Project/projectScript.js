 

var selection = 4;
var slotPos = [];
var slotVal = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
                       "eleven", "twelve", "thirteen", "fourteen", "fiftteen", "sixteen", "seventeen", 
                       "eightteen", "nineteen", "twenty", "twentyone", "twentytwo", "twentythree", "twentyfour", "twentyfive"];
var cond = true;

var tr0 = document.createElement("img");
tr0.setAttribute("src", "img/true.png");
$(tr0).css("margin-top", "5px");
var tr1 = document.createElement("img");
tr1.setAttribute("src", "img/true.png");
$(tr1).css("margin-top", "5px");
var tr2 = document.createElement("img");
tr2.setAttribute("src", "img/true.png");
$(tr2).css("margin-top", "5px");
var tr3 = document.createElement("img");
tr3.setAttribute("src", "img/true.png");
$(tr3).css("margin-top", "5px");
var tr4 = document.createElement("img");
tr4.setAttribute("src", "img/true.png");
$(tr4).css("margin-top", "5px");
var tr5 = document.createElement("img");
tr5.setAttribute("src", "img/true.png");
$(tr5).css("margin-top", "5px");
var tr6 = document.createElement("img");
tr6.setAttribute("src", "img/true.png");
$(tr6).css("margin-top", "5px");
var tr7 = document.createElement("img");
tr7.setAttribute("src", "img/true.png");
$(tr7).css("margin-top", "5px");
var tr8 = document.createElement("img");
tr8.setAttribute("src", "img/true.png");
$(tr8).css("margin-top", "5px");
var tr9 = document.createElement("img");
tr9.setAttribute("src", "img/true.png");
$(tr9).css("margin-top", "5px");


var fl0 = document.createElement("img");
fl0.setAttribute("src", "img/false.png");
$(fl0).css("margin-top", "5px");
        

function generateRan(){
    var random = [];
    for(var i = 0; i < selection; i++){
        var temp = Math.floor(Math.random() * 25) + 1;
        if(random.indexOf(temp) == -1){
            random.push(temp);
        }
        else
            i--;
    }

    console.log(random);
    return random;
}

var randPos = generateRan();

for(var i = 0; i < selection ; i++){
    slotPos.push(slotVal[randPos[i] - 1]);       
} 

        
$(function(){

    $("#game").hide();
    $("#section2").hide();
    $("#label").hide();

    if ($("#menu").css('top') == "-300px") {
        $("#menu").fadeOut(0);
        $("#menu").fadeIn({queue: false, duration: 1500}).animate( {top: 300}, 1500);
    }

    $("#diff").change(function(e){
        for(var i = 0; i < selection ; i++){
            slotPos.pop(); 
        }  

        selection = $("#diff").val();
        randPos = generateRan();

        for(var i = 0; i < selection ; i++){
             slotPos.push(slotVal[randPos[i] - 1]);       
        }  
    });

    $("#start").click(function(e){

        $("#menu").fadeOut(2000);
        $("#menu").remove(1000);
        $("#section2").delay(2000).fadeIn(1500); 
        $("#game").delay(1000).fadeIn(1000);
                
        for(var i = 0; i < selection ; i++){
            $(`#${slotPos[i]}`).css( 'visibility',  'visible');
            $(`#${slotPos[i]}`).find('div').hide();
        } 
                

        var c = 0;
        if (c < selection){
            window.setInterval(function(){
            $(`#${slotPos[c]}`).find('div').text(`${c+1}`).delay(1000).fadeIn(150).delay(1000).fadeOut(850);
                c++;
            }, 3000);
        }
                
        var order = 0;
        if(selection == 4 || selection == 6 || selection == 8 || selection == 10){

            //1
            $(`#${slotPos[0]}`).click(function(){ 
                if(order != selection && cond && c >= selection){
                    $(`#${slotPos[0]}`).css("border", "4px dashed white");
                    if(order == 0 && cond){
                        order++;
                        document.getElementById(`${slotPos[0]}`).appendChild(tr0);
                    }else{
                        cond = false;
                        document.getElementById(`${slotPos[0]}`).appendChild(fl0);
                        document.getElementById("stat").innerHTML = "Failed, Try Again";
                        $("#stat").css("color", "#F00");
                        document.getElementById("level").innerHTML = "YOU FAILED IN LEVEL " + selection;
                        $("#label").fadeIn(400);
                    }
                }       
            });

            //2
            $(`#${slotPos[1]}`).click(function(){
                if(order != selection && cond && c >= selection){
                    $(`#${slotPos[1]}`).css("border", "4px dashed white");
                    if(order == 1 && cond){
                        order++;
                        document.getElementById(`${slotPos[1]}`).appendChild(tr1);
                    }else{
                        cond = false;
                        document.getElementById(`${slotPos[1]}`).appendChild(fl0);
                        document.getElementById("stat").innerHTML = "Failed, Try Again";
                        $("#stat").css("color", "#F00");
                        document.getElementById("level").innerHTML = "YOU FAILED IN LEVEL "  + selection;
                        $("#label").fadeIn(400);
                    }
                }
            });

            //3
            $(`#${slotPos[2]}`).click(function(){
                if(order != selection && cond && c >= selection){
                    $(`#${slotPos[2]}`).css("border", "4px dashed white");
                    if(order == 2 && cond){
                        order++;
                        document.getElementById(`${slotPos[2]}`).appendChild(tr2);
                    }else{
                        cond = false;
                        document.getElementById(`${slotPos[2]}`).appendChild(fl0);
                        document.getElementById("stat").innerHTML = "Failed, Try Again";
                        $("#stat").css("color", "#F00");
                        document.getElementById("level").innerHTML = "YOU FAILED IN LEVEL " + selection;
                        $("#label").fadeIn(400);
                    }
                }
            });

            //4
            $(`#${slotPos[3]}`).click(function(){
                if(order != selection && cond && c >= selection){
                    $(`#${slotPos[3]}`).css("border", "4px dashed white");
                    if(order == 3 && cond) {
                        order++;
                        document.getElementById(`${slotPos[3]}`).appendChild(tr3);
                    }else{
                        cond = false;
                        document.getElementById(`${slotPos[3]}`).appendChild(fl0);
                        document.getElementById("stat").innerHTML = "Failed, Try Again";
                        $("#stat").css("color", "#F00");
                        document.getElementById("level").innerHTML = "YOU FAILED IN LEVEL " + selection;
                        $("#label").fadeIn(400);
                    }
                }

                if(order == selection){
                    document.getElementById("stat").innerHTML = "Congratulations";
                    $("#stat").css("color", "#006600");
                    document.getElementById("level").innerHTML = "YOU COMPLETED LEVEL " + selection;
                    $("#label").fadeIn(400);
                }
            });
        }
        
        if(selection == 6 || selection == 8 || selection == 10){

            //5
            $(`#${slotPos[4]}`).click(function(){
                if(order != selection && cond && c >= selection){
                    $(`#${slotPos[4]}`).css("border", "4px dashed white");
                    if(order == 4 && cond){
                        order++;
                        document.getElementById(`${slotPos[4]}`).appendChild(tr4);
                    }else{
                        cond = false;
                        document.getElementById(`${slotPos[4]}`).appendChild(fl0);
                        document.getElementById("stat").innerHTML = "Failed, Try Again";
                        $("#stat").css("color", "#F00");
                        document.getElementById("level").innerHTML = "YOU FAILED IN LEVEL " + selection;
                        $("#label").fadeIn(400);
                    }
                }
            });

            //6
            $(`#${slotPos[5]}`).click(function(){
                if(order != selection && cond && c >= selection){
                    $(`#${slotPos[5]}`).css("border", "4px dashed white");
                    if(order == 5 && cond) {
                        order++;
                        document.getElementById(`${slotPos[5]}`).appendChild(tr5);
                    }else{
                        cond = false;
                        document.getElementById(`${slotPos[5]}`).appendChild(fl0);
                        document.getElementById("stat").innerHTML = "Failed, Try Again";
                        $("#stat").css("color", "#F00");
                        document.getElementById("level").innerHTML = "YOU FAILED IN LEVEL " + selection;
                        $("#label").fadeIn(400);
                    }
                }

                if(order == selection){
                    document.getElementById("stat").innerHTML = "Congratulations";
                    $("#stat").css("color", "#006600");
                    document.getElementById("level").innerHTML = "YOU COMPLETED LEVEL " + selection;
                    $("#label").fadeIn(400);
                }
            });

        }
        
        if(selection == 8 || selection == 10){

            //7
            $(`#${slotPos[6]}`).click(function(){
                if(order != selection && cond && c >= selection){
                    $(`#${slotPos[6]}`).css("border", "4px dashed white");
                    if(order == 6 && cond){
                        order++;
                        document.getElementById(`${slotPos[6]}`).appendChild(tr6);
                    }else{
                        cond = false;
                        document.getElementById(`${slotPos[6]}`).appendChild(fl0);
                        document.getElementById("stat").innerHTML = "Failed, Try Again";
                        $("#stat").css("color", "#F00");
                        document.getElementById("level").innerHTML = "YOU FAILED IN LEVEL " + selection;
                        $("#label").fadeIn(400);
                    }
                }
            });

            //8
            $(`#${slotPos[7]}`).click(function(){
                if(order != selection && cond && c >= selection){
                    $(`#${slotPos[7]}`).css("border", "4px dashed white");
                    if(order == 7 && cond) {
                        order++;
                        document.getElementById(`${slotPos[7]}`).appendChild(tr7);
                    }else{
                        cond = false;
                        document.getElementById(`${slotPos[7]}`).appendChild(fl0);
                        document.getElementById("stat").innerHTML = "Failed, Try Again";
                        $("#stat").css("color", "#F00");
                        document.getElementById("level").innerHTML = "YOU FAILED IN LEVEL " + selection;
                        $("#label").fadeIn(400);
                    }
                }

                if(order == selection){
                    document.getElementById("stat").innerHTML = "Congratulations";
                    $("#stat").css("color", "#006600");
                    document.getElementById("level").innerHTML = "YOU COMPLETED LEVEL " + selection;
                    $("#label").fadeIn(400);
                }
            });

        }
        
        if(selection == 10){

            //9
            $(`#${slotPos[8]}`).click(function(){
                if(order != selection && cond && c >= selection){
                    $(`#${slotPos[8]}`).css("border", "4px dashed white");
                    if(order == 8 && cond){
                        order++;
                        document.getElementById(`${slotPos[8]}`).appendChild(tr8);
                    }else{
                        cond = false;
                        document.getElementById(`${slotPos[8]}`).appendChild(fl0);
                        document.getElementById("stat").innerHTML = "Failed, Try Again";
                        $("#stat").css("color", "#F00");
                        document.getElementById("level").innerHTML = "YOU FAILED IN LEVEL " + selection;
                        $("#label").fadeIn(400);
                    }
                }
            });

            //10
            $(`#${slotPos[9]}`).click(function(){
                if(order != selection && cond && c >= selection){
                    $(`#${slotPos[9]}`).css("border", "4px dashed white");
                    if(order == 9 && cond) {
                        order++;
                        document.getElementById(`${slotPos[9]}`).appendChild(tr9);
                    }else{
                        cond = false;
                        document.getElementById(`${slotPos[9]}`).appendChild(fl0);
                        document.getElementById("stat").innerHTML = "Failed, Try Again";
                        $("#stat").css("color", "#F00");
                        document.getElementById("level").innerHTML = "YOU FAILED IN LEVEL " + selection;
                        $("#label").fadeIn(400);
                    }
                }

                if(order == selection){
                    document.getElementById("stat").innerHTML = "Congratulations";
                    $("#stat").css("color", "#006600");
                    document.getElementById("level").innerHTML = "YOU COMPLETED LEVEL " + selection;
                    $("#label").fadeIn(400);
                }
            });
        }

        
    });
});