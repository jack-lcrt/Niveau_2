let champ: HTMLInputElement = document.getElementById("champ");

let plus: HTMLElement = document.getElementById("plus"); // 1
let moins: HTMLElement = document.getElementById("moins"); // 2
let fois: HTMLElement = document.getElementById("fois"); // 3
let divise: HTMLElement = document.getElementById("divise"); // 4
let egal: HTMLElement = document.getElementById("egal");

let memo: number = 0;
let operation: number = 0;

const calcule = (memory: number, op: number, current: number): number => {
	if (isNaN(current)) {
		return(memory);
	}
	switch (op) {
		case 1:
			return (current + memory);
		case 2:
			return (current - memory);
		case 3:
			return (current * memory);
		case 4:
			return (current / memory);
		break;
	
	}
	return (current);
};

plus.onclick = () => {
memo = calcule(memo, operation, parseFloat(champ.value));
operation = 1;
champ.value = " ";
};
moins.onclick = () => {
memo = calcule(memo, operation, parseFloat(champ.value));
operation = 2;
champ.value = " ";
};
fois.onclick = () => {
memo = calcule(memo, operation, parseFloat(champ.value));
operation = 3;
champ.value = " ";
};
divise.onclick = () => {
memo = calcule(memo, operation, parseFloat(champ.value));
operation = 4;
champ.value = " ";
};
egal.onclick = () => {
memo = calcule(memo, operation, parseFloat(champ.value));
champ.value = memo.toString();
operation = 0;
};
