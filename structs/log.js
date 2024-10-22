const fs = require("fs");
const config = JSON.parse(fs.readFileSync("./Config/config.json").toString());

// Load the project name from config
const projectName = config.project;

function getTimestamp() {
    const now = new Date();
    const date = now.toLocaleDateString('en-US');
    const time = now.toLocaleTimeString();
    
    return `${date} ${time}`; 
}

function formatLog(prefixColor, prefix, ...args) {
    let msg = args.join(" ");
    let formattedMessage = `${prefixColor}[${getTimestamp()}] ${prefix}\x1b[0m: ${msg}`;
    console.log(formattedMessage);
}

function backend(...args) {
    let msg = args.join(" ");
    if (config.bEnableFormattedLogs) {
        formatLog("\x1b[32m", `${projectName} Backend Log`, ...args);
    } else {
        console.log(`\x1b[32m${projectName} Backend Log\x1b[0m: ${msg}`);
    }
}

function bot(...args) {
    let msg = args.join(" ");
    if (config.bEnableFormattedLogs) {
        formatLog("\x1b[33m", `${projectName} Bot Log`, ...args);
    } else {
        console.log(`\x1b[33m${projectName} Bot Log\x1b[0m: ${msg}`);
    }
}

function xmpp(...args) {
    let msg = args.join(" ");
    if (config.bEnableFormattedLogs) {
        formatLog("\x1b[34m", `${projectName} Xmpp Log`, ...args);
    } else {
        console.log(`\x1b[34m${projectName} Xmpp Log\x1b[0m: ${msg}`);
    }
}

function error(...args) {
    let msg = args.join(" ");
    if (config.bEnableFormattedLogs) {
        formatLog("\x1b[31m", `${projectName} Error Log`, ...args);
    } else {
        console.log(`\x1b[31m${projectName} Error Log\x1b[0m: ${msg}`);
    }
}

function debug(...args) {
    if (config.bEnableDebugLogs) {
        let msg = args.join(" ");
        if (config.bEnableFormattedLogs) {
            formatLog("\x1b[35m", `${projectName} Debug Log`, ...args);
        } else {
            console.log(`\x1b[35m${projectName} Debug Log\x1b[0m: ${msg}`);
        }
    }
}

function website(...args) {
    let msg = args.join(" ");
    if (config.bEnableFormattedLogs) {
        formatLog("\x1b[36m", `${projectName} Website Log`, ...args);
    } else {
        console.log(`\x1b[36m${projectName} Website Log\x1b[0m: ${msg}`);
    }
}

function AutoRotation(...args) {
    if (config.bEnableAutoRotateDebugLogs) {
        let msg = args.join(" ");
        if (config.bEnableFormattedLogs) {
            formatLog("\x1b[36m", `${projectName} AutoRotation Debug Log`, ...args);
        } else {
            console.log(`\x1b[36m${projectName} AutoRotation Debug Log\x1b[0m: ${msg}`);
        }
    }
}

function checkforupdate(...args) {
    let msg = args.join(" ");
    if (config.bEnableFormattedLogs) {
        formatLog("\x1b[33m", `${projectName} Update Log`, ...args);
    } else {
        console.log(`\x1b[33m${projectName} Update Log\x1b[0m: ${msg}`);
    }
}

function autobackendrestart(...args) {
    let msg = args.join(" ");
    if (config.bEnableFormattedLogs) {
        formatLog("\x1b[92m", `${projectName} Auto Backend Restart Log`, ...args);
    } else {
        console.log(`\x1b[92m${projectName} Auto Backend Restart\x1b[0m: ${msg}`);
    }
}

module.exports = {
    backend,
    bot,
    xmpp,
    error,
    debug,
    website,
    AutoRotation,
    checkforupdate,
    autobackendrestart
};
