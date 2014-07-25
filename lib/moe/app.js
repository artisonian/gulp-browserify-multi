var add = require('../common');

var titleNode = document.createElement('h1');
titleNode.appendChild(document.createTextNode('Moe says 1 + 2 is ' + add(1, 1)));
document.documentElement.appendChild(titleNode);
