const calculator = function () {
    const list = [[7, 8, 9, '/'], [4, 5, 6, '*'], [1, 2, 3, '-'], ['.', 0, '=', '+', 'C']];
    var input = document.createElement('input');
    input.disabled = "true";
    input.style.width = "115px";
    input.style.height = "30px";
    result.append(input);
    list.forEach(item => {
        var breakLine = document.createElement('br');
        container.append(breakLine);
        item.forEach(number => {
            var button = document.createElement('button');
            button.innerText = number;
            button.style.width = "40px";
            button.style.height = "40px";
            button.style.fontSize = "30px";
            container.append(button);
            button.onclick = function () {
                if (number == '=') {
                    input.value = eval(input.value);
                }
                else if (number == 'C') {
                    input.value = "";
                }
                else {
                    input.value += number;
                }
            }
        })
    })
}
calculator();