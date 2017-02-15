var audioOption={channels:2,bitDepth:16,sampleRate:44100};
var lame=require("lame");
var speaker=require('speaker')
var fs=require('fs');
var song=process.argv[2];
var inputstream=fs.createReadStream('/home/manish/Desktop'+song);
var decoder=lame.decoder(audioOption);
decoder.on('format',function(){
	console.log("decoded successfully");
});
var speaker=new speaker(audioOption)
inputstream.pipe(decoder).pipe(speaker);
