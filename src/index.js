import _ from 'lodash';
import './style.css';
import iconUrl from './location.png';
import {cube} from './math';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack', 'he he,test it'], ' ');
  element.classList.add('hello');

  //添加图片
  const icon=new Image();
  icon.src=iconUrl;
  element.appendChild(icon);
  return element;
}

document.body.appendChild(component());
