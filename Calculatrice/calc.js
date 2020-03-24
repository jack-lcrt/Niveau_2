var champ = document.getElementById("champ");
var plus = document.getElementById("plus"); // 1
var moins = document.getElementById("moins"); // 2
var fois = document.getElementById("fois"); // 3
var divise = document.getElementById("divise"); // 4
var egal = document.getElementById("egal");
var memo = 0;
var operation = 0;
var calcule = function (memory, op, current) {
    if (isNaN(current)) {
        return (memory);
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
plus.onclick = function () {
    memo = calcule(memo, operation, parseFloat(champ.value));
    operation = 1;
    champ.value = " ";
};
moins.onclick = function () {
    memo = calcule(memo, operation, parseFloat(champ.value));
    operation = 2;
    champ.value = " ";
};
fois.onclick = function () {
    memo = calcule(memo, operation, parseFloat(champ.value));
    operation = 3;
    champ.value = " ";
};
divise.onclick = function () {
    memo = calcule(memo, operation, parseFloat(champ.value));
    operation = 4;
    champ.value = " ";
};
egal.onclick = function () {
    memo = calcule(memo, operation, parseFloat(champ.value));
    champ.value = memo.toString();
    operation = 0;
};
