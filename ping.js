const ping = require ("net-ping");
const session = ping.createSession();
const fs = require('fs');

function pingHost(host) {
  session.pingHost(host, (error, target) => {
    if (error) {
      console.log(`${target} failed:${error.toString()}`);
    } else {
      console.log(`${target} ok`);
    }
  })
}

const guiconfig = 'C:/Users/tujiawei/Downloads/pgfastss/gui-config.json';
const content = fs.readFileSync(guiconfig, 'utf8');
const contentObj = JSON.parse(content);
contentObj.configs.forEach((item) => {
  pingHost(item.server);  
})
