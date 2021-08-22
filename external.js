function hide() {
    var hider=document.getElementById("hider")
    hider.innerText="   "
    
     }
     function adtext() {
    
        var adder= document.createElement('p')
        var texter= document.createTextNode('why ur hiding me')
        adder.append(texter)
        document.getElementById('hider').appendChild(adder)
     }    