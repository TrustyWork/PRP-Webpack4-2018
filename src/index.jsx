import React from 'react';
import ReactDOM from 'react-dom';

import CompClassExample from 'CompClassExample';
import style from './style.scss';

import imgSrc from './img-base64-example.png';
import imgBigSrc from './img-big-example.png';
import svgSrc from './svg-example.svg';

console.log('Test:', style.test);

const App = () => (
  <div>
    <div className={style.test}>
      Is`t work!!
      <hr />
    </div>
    <div>
      <CompClassExample />
      <hr />
    </div>
    <div>
      Пример кодирования картинки в base64 вебпаком
      <br />
      <img src={imgSrc} alt="пример кодирования картинки в base64 вебпаком" />
      <hr />
    </div>
    <div>
      Эта картинка слишком большая чтобы переводить ее в base64, вебпак оставит ее как есть
      <br />
      <img src={imgBigSrc} alt="пример кодирования картинки в base64 вебпаком" />
      <hr />
    </div>
    <div>
      эта картинка в формате SVG, она копируеться в сборку так как обычный файл
      <br />
      <img src={svgSrc} alt="пример копирования вебпаком файла без обработки" />
      <hr />
    </div>
    <div>
      у css свойств этих flex колонок должны появиться префиксы
      <div className={style.flex}>
        <div className="item">
          1
        </div>
        <div className="item">
          2
        </div>
        <div className="item">
          3
        </div>
      </div>
      <hr />
    </div>
  </div>
);

export default App;
ReactDOM.render(<App />, document.getElementById('rm-root'));
