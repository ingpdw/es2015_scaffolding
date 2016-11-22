/**
 * Main
 */

import Util from './Util';
import Template from './Template';

class Main{
	constructor(){
		this.init();
  }

  init(){
    this.get();
  }

  get(){
    let _testData = [
      {title: 1},
      {title: 2},
      {title: 3}
    ];
    let _tmp = '';

    for( let i = 0; _testData[ i ]; i++ ){
      _tmp += Template.list( _testData[ i ] );
    }

    jQuery( 'body' ).append( `<ul>${_tmp}</ul>` );
  }

  getAjaxSample(){
    let list = Util.get( apiUrl, 'GET' , { data: 'testData' });
    list.then( ( _data ) => {
     //resolve
     Template.list( _data );
    }, () => {
      //reject
    })
  }
};

module.exports = Main;
