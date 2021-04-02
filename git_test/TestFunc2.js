function calcul() {
	var c = 0;


    return {
        plus : function(a,b)
        {c++
            return a+b;
        }

    
    }
   };


var z = new calcul;

debugger;
console.log(z.plus(10,3));
calcul.prototype.getc = function(){
        return c;
        };
        
var y = new calcul;
   
console.log(y.getc());