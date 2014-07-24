/* jshint esnext:true */
import { add } from '../common';

var titleNode = document.createElement('h1');
titleNode.appendChild(document.createTextNode('Curly says 1 + 2 is ' + add(1, 2)));
document.body.appendChild(titleNode);
