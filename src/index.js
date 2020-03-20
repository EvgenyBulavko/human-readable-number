module.exports = function toReadable (number) {
  let toten   = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let toninetee = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let toninety = ['','','twenty','thirty','forty', 'fifty','sixty','seventy','eighty','ninety'];

    let res = [];
    
    
    if (number >= 100) {
        res.push(toten[parseInt(number/100)] + " hundred");
        if (number % 100 > 0) { number = number % 100;}
        else number = number;
        
    }

    if (number >= 20) {
        res.push(toninety[parseInt(number / 10)]);
        res.push(toten[parseInt(number % 10)]);
        number = number % 10;
    } else {
        if (number >= 10) {
            res.push(toninetee[parseInt(number % 10)]);
        } else {
            if (number >= 1) {
                res.push(toten[number]);
            } else res = ['zero'];
        }
    }

    return res.join(" ").trim();
}
