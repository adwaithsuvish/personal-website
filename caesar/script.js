let alpha = 'abcdefghijklmnopqrstuvwxyz';


function encrypt(){
    let shift = 3;
    let caesar = alpha.slice(3,27) + alpha.slice(0,4)
    let text = document.getElementById('text').value;
    let final = ""
    
    for (i=0;i<text.length;i++){
        for (j=0;j<alpha.length;j++){
            if (text[i] == alpha[j]){
                final = final + caesar[alpha.indexOf(text[i])];
                break
            }
            
        
        }
        

    }
    document.getElementById("test").innerHTML =final;
}