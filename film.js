var ffmpeg = require('ffmpeg');
var fffmpeg = require('fluent-ffmpeg');

var film = {
	isReady:function (input) {
		try {
			new ffmpeg(input, function (err, video) {
				if (!err) {
					console.log('The video is ready to be processed');
					return true;
				} else {
					console.log('Error: ' + err);
					return false;
				}
			});
		} catch (e) {
			console.log(e.code);
			console.log(e.msg);
		}
	},
	metadata:function (input) {
		fffmpeg.ffprobe(input, function(err, metadata) {
		    console.dir(metadata);
		});
	},
	getMp3:function (input, output) {
		fffmpeg(input)
		.on('error', function(err) {
			console.log('An error occurred: ' + err.message);
		})
		.on('progress', function(progress) {
				console.log('Processing: ' + progress.percent + '% done');
			})
		.on('end', function() {
			console.log('Processing finished !');
		})
		.save(output);
	},
	noAudio:function (input, output) {
		fffmpeg(input)
			.noAudio()
			.on('error', function(err) {
				console.log('An error occurred: ' + err.message);
			})
			.on('progress', function(progress) {
					console.log('Processing: ' + progress.percent + '% done');
				})
			.on('end', function() {
				console.log('Processing finished !');
			})
			.save(output);
	},
	getFrames:function (input, output) {
		fffmpeg(input)
		.on('error', function(err) {
			console.log('An error occurred: ' + err.message);
		})
		.on('progress', function(progress) {
				console.log('Processing: ' + progress.percent + '% done');
			})
		.on('end', function() {
			console.log('Processing finished !');
		})
		.save(output);
	},
	addLayer:function (input, output, layer, posLayer) {
		try {
			var process = new ffmpeg(input);
			process.then(function (video) {
				var loading = "";
				var sec = 0;
				console.log(" ▼ Starting ▼ ");
				var bar = setInterval(function(){
					console.log(" ... "+loading);
					loading = loading + " . ";
				},100);
				var seconds = setInterval(function(){
					sec++;
				},1000);
				// Callback mode
				video.fnAddWatermark(layer, output, {
					position : 'SE'//posLayer
				}, function (error, file) {
					if (!error)
						console.log('New video file: ' + file);
						clearInterval(bar);
						clearInterval(seconds);
						console.log("It took "+sec+" seconds.");
				});
			}, function (err) {
				console.log('Error: ' + err);
			});
		} catch (e) {
			console.log(e.code);
			console.log(e.msg);
		}
	},
	break:function (input, output, start, end) {
		fffmpeg(input)
			.on('error', function(err) {
				console.log('An error occurred: ' + err.message);
			})
			.on('progress', function(progress) {
					console.log('Processing: ' + progress.percent + '% done');
				})
			.on('end', function() {
				console.log('Processing finished !');
			})
			.seek(start)
			.duration(end)
			.output(output)
			.run();
	},
	render:function (input, output, videoSize, vidCodec, audCodec) {
		fffmpeg(input)
		  .videoCodec(vidCodec)
		  .audioCodec(audCodec)
		  .size(videoSize)
		  .on('error', function(err) {
		    console.log('An error occurred: ' + err.message);
		  })
		  .on('progress', function(progress) {
		      console.log('Processing: ' + progress.percent + '% done');
		    })
		  .on('end', function() {
		    console.log('Processing finished !');
		  })
		  .save(output);
	}
};
module.exports = film;
