'use strict';

juke.factory('SongFactory', function($http){
	console.log('you are in the songfactory')
  return {
  	convert: function(song){
  		song.audioUrl = '/api/songs/' + song.id + '/audio';
  		return song; 	
  	}
  }
});