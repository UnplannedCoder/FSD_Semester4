const appconfig = {
    name:"MyNodeApp",
    version:"2.1.0",
    settings:{
        theme:"dark",
        port:2000
    }
};

const displayMessage = (user) => {
    return `Welcome, ${user}! your are running version ${appconfig.version}`
};

module.exports = {
    config: appconfig,
    greet: displayMessage
}