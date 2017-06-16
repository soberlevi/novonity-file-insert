/**
 * Created by Levi on 2017/3/9.
 */
let fs = require('fs');

function fileInsert(file, line, content, callback) {
    let data = fs.readFileSync(file).toString().split('\n');
    data.splice(line, 0, content);
    let text = data.join('\n');

    fs.writeFile(file, text, (err) => {
        if (err) {
            callback(err)
        } else {
            callback(null);
        }
    });
}

module.exports = fileInsert;

