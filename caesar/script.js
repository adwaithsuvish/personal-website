let alpha = 'abcdefghijklmnopqrstuvwxyz';


function encrypt(){
    let shift = document.getElementById('shift').value;
    shift = Number(shift);
    let caesar = alpha.slice(shift) + alpha.slice(0,(shift))
    let text = document.getElementById('text').value;
    let final = ""
    
    for (i=0;i<text.length;i++){
        for (j=0;j<alpha.length;j++){
            if (text[i] == alpha[j]){
                final = final + caesar[j];
                break;
            }else if (caesar.includes(text[i].toLowerCase())){
                if (text[i] == alpha[j].toUpperCase()){
                    final = final + caesar[j].toUpperCase();
                    break;
                }
            }else if (!alpha.includes(text[i].toLowerCase())){
                final = final + text[i]; 
                break;

            }
            
        
        }
        

    }
    document.getElementById("test").innerHTML =final;
}
function decrypt(){
    let shift = document.getElementById('shift').value;
    shift =Number(shift);
    let caesar = alpha.slice(shift,27) + alpha.slice(0,shift)
    let text = document.getElementById('text').value;
    let final = ""

    for (i=0;i<text.length;i++){
        for (j=0;j<alpha.length;j++){
            if (text[i] == caesar[j]){
                final = final + alpha[j];
                break;
            }else if (caesar.includes(text[i].toLowerCase())){
                if (text[i] == caesar[j].toUpperCase()){
                    final = final + alpha[j].toUpperCase();
                    break;
                }
            }else if (!caesar.includes(text[i])){
                final = final + text[i]; 
                break;

            }
            
        
        }
        

    }
    document.getElementById("test").innerHTML =final;
}