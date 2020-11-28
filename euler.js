/*
 * @author  Khelifa Yassine
 */

var  nbs_gr = []
var  limit  = 10**6; // one million
var  result = 4; // 2,3,5,7


const euler = {
    __init: () => { 
			for(let nb = 0; nb < limit; nb++) 
				nbs_gr.push( euler.isPrime(nb) );  
    },
	start: () => { 
		    for(let nb =10; nb < nbs_gr.length; nb++ )  
				if( !  nbs_gr[ nb ] )    
			   		continue;// nb isn't a prime number
				else 
				   result += euler.isCircular( nb );// nb is a circular prime
    },
    isPrime: nb => { 
			if(nb < 2) return false;
				else if(nb==2   || nb== 3)  
					return true;
				else if(nb%2==0 || nb%3==0) 
					return false;// ignore multiples of 2 and 3
			const limit = Math.sqrt( nb ) + 1;
			for (var i = 6; i <= limit; i+=6)
				if(nb%(i-1)==0 || nb%(i+1)==0) // ignore multiples of single numbers
				   	return false;
			return true;
   },
   isCircular: prime => { 
	   		let roll = prime.toString().length;
			if( roll < 2 ) 
			   return false;
		   	for (let i = 1; i < roll; i++) {
		   		let nb_test = euler.offset( prime );
				if ( ! nbs_gr[ nb_test ] ) 
					return false// nb_test isn't circular prime
				else   
					prime = nb_test;// nb_test > circular prime
		   	}
		   	return true;
   },
   offset: nb => { 
	   		const last_digit = nb % 10; // take the last digit 		  
			nb =  parseInt(nb / 10); // delete the last digit 
			return  last_digit * (10 ** nb.toString().length) + nb ;
   }
}
euler.__init()
euler.start()
document.querySelector("#result").innerText = result;
