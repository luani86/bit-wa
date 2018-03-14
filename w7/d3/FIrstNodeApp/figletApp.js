const figlet = require("figlet");
const getOutput = function(){
    return figlet.textSync("luka26",{
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })
}
module.exports.getOutput = getOutput;