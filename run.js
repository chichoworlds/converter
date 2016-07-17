var film = require('./film');
var fs = require('fs');
var file = JSON.parse(fs.readFileSync('data.json', 'utf8'));

var vid = file.vid;
var out = file.out;
var outMp3 = file.outMp3;
var framesOut = file.framesOut;
var quantity = file.quantity;
var layer = file.layer;
var begin = file.begin;
var end = file.end;
var size = file.renderVideoSize;
var videoCodec = file.renderVideoCodec;
var audioCodec = file.renderAudioCodec;

switch(process.argv[2]) {
  case 'isReady':
    film.isReady(vid);
    break;
  case 'metadata':
    film.metadata(vid);
    break;
  case 'getMp3':
    film.getMp3(vid, outMp3);
    break;
  case 'noAudio':
    film.noAudio(vid, out);
    break;
  case 'getFrames':
    film.getFrames(vid, framesOut);
    break;
  case 'addLayer':
    film.addLayer(vid, out, layer);
    break;
  case 'break':
    film.break(vid, out, begin, end);
    break;
  case 'render':
    film.render(vid, out, size, videoCodec, audioCodec);
    break;
  default:
    console.log("That command does not exist.");
    break;
}
