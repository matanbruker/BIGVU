const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath(ffmpegPath);

const create = (name) => {
    let command = ffmpeg("./screenshot.png") // get the screenshot
    command
      .inputFPS(1)
      .outputFPS(30)
      .videoCodec('libx264')
      .videoBitrate(1024)
      .size('640x?')
      .loop(10) // 10 sec
      .noAudio()
      .save("./".concat(name).concat(".mp4")); // create and save the video in the working directory
}

exports.create = create;