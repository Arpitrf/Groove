const YTPlayer = require('yt-player');
var express= require('express');
var app = express();
app.listen(3000);
const player = new YTPlayer('#player');
 
player.load('GKSRyLdjsPA');
player.setVolume(100);
 
player.on('playing', () => {
  console.log(player.getDuration()) // => 351.521 
});