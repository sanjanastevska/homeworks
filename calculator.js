function calc(x, y, type) {
    if (type == "+") {
        return add(x, y);
    }
    else if (type == "-") {
        return sub(x, y);
    }
    else if (type == "*") {
        return mul(x, y);
    }
    else if (type == "/") {
        return div(x, y);
    }
    else if (type == "%") {
        return percent(x, y);
    }
    else if (type == "^") {
        return pow(x, y);
    }
    else {
        console.log("undefined type od operation");
    }
}

function add(x, y) {
    return x + y;
}

function div(x, y) {
    return x / y;
}

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;
}

function percent(x, y){
    return Math.floor((x/y)*100);
}

function pow(x, y){
    return Math.pow(x,y)
}

exports.calc = calc;