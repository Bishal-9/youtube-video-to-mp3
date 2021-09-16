const fs = require('fs')
const ytdl = require('ytdl-core')

const videoUrl = ''

ytdl(videoUrl, {
    filter: format => format.audioQuality === 'AUDIO_QUALITY_MEDIUM'
})
    .pipe(fs.createWriteStream('song.mp3'))