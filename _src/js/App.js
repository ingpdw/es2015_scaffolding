/**
 * App
 */

import Main from './Main';

(function( $, window ){
  'use strict';

  let namespace = 'test';

  if( !window[ namespace ] )
    window[ namespace ] = {};

  if( !window[ namespace ].Main )
    window[ namespace ].Main = Main;

}( window.jQuery, window ));
