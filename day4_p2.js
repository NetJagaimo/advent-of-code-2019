let count = 0;

for(let i = 172930; i <= 683082; i++){
	let num = i.toString();

	// 這邊不考慮兩個數字分開，只要有剛剛好出現兩個數字就算。因為反正如果兩數是分開的，後面的條件也不會通過。
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
			break;
		}
	}
	if(!decrease){
		continue;
	}
	console.log(num);
	count++;
}

console.log(count);