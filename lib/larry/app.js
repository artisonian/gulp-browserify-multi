var add = require('../common');

var titleNode = document.createElement('h1');
titleNode.appendChild(document.createTextNode('Larry says 1 + 2 is ' + add(1, 13)));
document.documentElement.appendChild(titleNode);
