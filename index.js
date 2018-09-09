const {spawn} = require('child_process');
const conif = require('node-console-input');
const chalk = require('chalk');

var name = conif.getConsoleInput("Name of your react project: ", false);
if (name === "") {
    return name;
}

name=name.toLowerCase();

const createReactApp = spawn('create-react-app', [name]);

createReactApp.on('close', () => {
    let materialUi = conif.getConsoleInput("do you want to install material-ui component for ui ?[no/yes] ", false);
    if (materialUi === "") {
        return materialUi;
    }

    let momentJs = conif.getConsoleInput("do you want to install moment-js date component ?[no/yes] ", false);
    if (momentJs === "") {
        return momentJs;
    }

    let rtlLanguage = conif.getConsoleInput("do you need rtl direction ?[no/yes] ", false);
    if (rtlLanguage === "") {
        return rtlLanguage;
    }

    let jwPlayer = conif.getConsoleInput("do you need Video/Audio player ?[no/yes] ", false);
    if (jwPlayer === "") {
        return jwPlayer;
    }

    let inFiniteScroller = conif.getConsoleInput("do you need infinite scroll for load more ?[no/yes] ", false);
    if (inFiniteScroller === "") {
        return inFiniteScroller;
    }

    let axios = conif.getConsoleInput("do you need axios for ajax calls ?[no/yes] ", false);
    if (axios === "") {
        return axios;
    }

    //now Install components

    //lets go to directory createds

    if(materialUi==="yes"){
        const materialInstalling = spawn('npm', ['install' ,'@material-ui/core','--save','--prefix',`${name}/`]);
        materialInstalling.on('close', (data) => {
            console.log(chalk.green.bgWhite("material-ui installation finished"));
            const materialIcons = spawn('npm', ['install' ,'@material-ui/icons','--save','--prefix',`${name}/`]);
            materialIcons.on('close', (data) => {
                console.log(chalk.green.bgWhite('material icons installation finished'));
            })
        })
    }

    if(momentJs==="yes"){
        const momentJsInstalling = spawn('npm',['install' ,'moment','--save','--prefix',`${name}/`]);
        momentJsInstalling.on('close', (data) => {
            console.log(chalk.green.bgWhite('moment js installation finished'));
            const momentJsFormatInstalling = spawn('npm', ['install' ,'moment-duration-format','--save','--prefix',`${name}/`]);
            momentJsFormatInstalling.on('close', (data) => {
                console.log(chalk.green.bgWhite('moment duration format installation finished'));
            })
        })
    }

    if(rtlLanguage==="yes"){
        const rtlLanguageInstalling = spawn('npm', ['install' ,'bootstrap-v4-rtl','--save','--prefix',`${name}/`]);
        rtlLanguageInstalling.on('close', (data) => {
            console.log(chalk.green.bgWhite('bootstrap-v4-rtl installation finished'));
        })
    }

    if(jwPlayer==="yes"){
        const jwPlayerInstalling = spawn('npm', ['install' ,'react-jw-player','--save','--prefix',`${name}/`]);
        jwPlayerInstalling.on('close', (data) => {
            console.log(chalk.green.bgWhite('jw-player installation finished'));
        })
    }

    if(inFiniteScroller==="yes"){
        const inFiniteScrollerInstalling = spawn('npm', ['install' ,'react-infinite-scroller','--save','--prefix',`${name}/`]);
        inFiniteScrollerInstalling.on('close', (data) => {
            console.log(chalk.green.bgWhite('react-infinite-scroller installation finished'));
        })
    }

    if(axios==="yes"){
        const axiosInstalling = spawn('npm', ['install' ,'axios','--save','--prefix',`${name}/`]);
        axiosInstalling.on('close', (data) => {
            console.log(chalk.green.bgWhite('axios installation finished'));
        })
    }

});

createReactApp.stderr.on('data', (data) => {
    console.log(chalk.yellow.bgWhite(data));

});



