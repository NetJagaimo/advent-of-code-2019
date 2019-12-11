let count = 0;

for(let i = 172930; i <= 683082; i++){
	let num = i.toString();

	let double = false;
	for(let j = 0; j <= 9; j++){
		let re = new RegExp(j.toString(), 'g');
		if(num.match(re) === null){
			continue;
		} 
		if(num.match(re).length === 2){
			double = true;
			break;
		}
	}

	if(!double){
		continue;
	} 

	let decrease = true;
	for(let j = 0; j < num.length - 1; j++){
		if(parseInt(num[j]) > parseInt(num[j+1])){
			decrease = false;
		}
	}
	if(!decrease){
		continue;
	}

	count++;
}

console.log(count);