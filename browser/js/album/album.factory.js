'use strict';

juke.factory('AlbumFactory', function ($http) {
  var AlbumFactory = {};

  AlbumFactory.fetchAll = function(){
  	return $http.get('/api/albums')
  	.then(function(response){
  		// console.log('here is the response.data: ', response.data)
  		return(response.data);
  	})
  	.then(function(albums){ 	
  		// 	
  		return albums.map(AlbumFactory.convert);

  	})
  }

  AlbumFactory.fetchById = function(id){
  	var album;
  	
  	return $http.get('/api/albums/' + id)
  	.then(function(response){return response.data;})
  	.then(AlbumFactory.convert)
  	.then(function(album){
   	return album;
  	})
  }

  AlbumFactory.convert = function(album){
	album.imageUrl  = '/api/albums/' + album.id + '/image';
    album.songs.forEach(function (song, i) {
      song.audioUrl = '/api/songs/' + song.id + '/audio';
      song.albumIndex = i;
    });
	return album;  	
  }

  return AlbumFactory;
});