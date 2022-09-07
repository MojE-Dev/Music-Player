const dataMusic = [
    {
        id: 1,
        musicName: "every thing i wanted",
        artistName: "Billie Eilish",
        cover: "./Images/26aa6088cc51c5774f57fc6cda3a9834--cd-design-music-album-covers.jpg",
        file: "./Music/1646994710877-782366755-02 everything i wanted (Billie Eilish).mp3"
    }
    ,
    {
        id: 2,
        musicName: "Lams",
        artistName: "Bahram",
        cover: "./Images/df714da062ae341737f0b27439107874.jpg",
        file: "./Music/1646995806711-381015832-03. Lams [320].mp3"
    }
    ,
    {
        id: 3,
        musicName: "good girls go to hell",
        artistName: "Billie Eilish",
        cover: "./Images/george-hoza-gX-3XXBSIvo-unsplash.jpg",
        file: "./Music/1646996635054-823165626-05 all the good girls go to hell (Billie Eilish).mp3"
    }
    ,
    {
        id: 4,
        musicName: "Gheteh 19",
        artistName: "Babak Bayat",
        cover: "./Images/Lost-Dreams-Social-Media-min.jpg",
        file: "./Music/1647505673228-709949529-Babak Bayat - gheteh 19.mp3"
    }
    ,
    {
        id: 5,
        musicName: "Old Money",
        artistName: "Lana Del rey",
        cover: "./Images/sky-fall-min.jpg",
        file: "./Music/1647641200961-708278755-51 - Old Money.mp3"
    }

]
const mainSectionMusic = document.getElementById('main-section-music')
const fillTimeline = document.getElementById('fill')
const fillBtntimeline = document.getElementById('fill-btn-timeline')
const timeLineSection = document.getElementById('timeline')
const fillVolume = document.getElementById('fill-volume')
const fillBtnVolume = document.getElementById('fill-btn-volume')
const VolumeSection = document.getElementById('volume-section')
const download = document.getElementById('download-div')
const shuffle = document.getElementById('shuffle-div')
const before = document.getElementById('before-div')
const play = document.getElementById('play-div')
const next = document.getElementById('next-div')
const repeat = document.getElementById('repeat-div')
const volume = document.getElementById('volume-div')
const main = document.getElementById('main')
const timeLeft = document.getElementById('time-left')
const timeDuration = document.getElementById('time-duration')
const audio = document.getElementById('audio')
const backgroundCover = document.getElementById('back-cover')
const coverInDetail = document.getElementById('cover-in-detail')
const musicNameInDetail = document.getElementById('music-name-in-detail')
const artistNameInDetail = document.getElementById('artist-name-in-detail')
var musicIsPlay = false
var musicrepeat = false
var saveId = 0
var shuffleOff = true
var displayVolume = true

const sectionCart = document.createElement('section')

audio.addEventListener('timeupdate', () => {
    if (audio.ended) {
        audio.currentTime = 0
        fillTimeline.style.width = "0%"
        fillBtntimeline.style.left = "0%"
        play.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fafafa"
        class="bi bi-play" viewBox="0 0 16 16">
        <path
            d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
    </svg>`
    musicIsPlay = false
    } else {
        fillTimeline.style.width = (Math.floor(audio.currentTime) * 100 / Math.floor(audio.duration)).toFixed(3) + '%'
        fillBtntimeline.style.left = (Math.floor(audio.currentTime) * 100 / Math.floor(audio.duration)).toFixed(3) + '%'
        
    }
})

sectionCart.className = 'section-show-music-cart'
dataMusic.forEach(element => {
    const link = document.createElement('a')
    link.href = `#${element.id}`
    const divCart = document.createElement('div')
    divCart.className = 'hover'
    const coverMusic = document.createElement('img')
    coverMusic.className = 'cover'
    const musicName = document.createElement('p')
    const artistName = document.createElement('p')
    coverMusic.src = element.cover
    musicName.innerHTML = `Music Name : ${element.musicName}`
    artistName.innerHTML = `Music Name : ${element.artistName}`
    divCart.appendChild(coverMusic)
    divCart.appendChild(musicName)
    divCart.appendChild(artistName)
    link.appendChild(divCart)
    sectionCart.appendChild(link)
    divCart.addEventListener('click', () => {
        musicIsPlay = true
        saveId = element.id
        audio.src = element.file
        backgroundCover.id = element.id
        backgroundCover.style.backgroundImage = `url(${element.cover}) `
        coverInDetail.style.backgroundImage = `url(${element.cover}) `
        musicNameInDetail.innerHTML = element.musicName
        artistNameInDetail.innerHTML = element.artistName
        audio.addEventListener('timeupdate', () => {
            var musicTimeLeftmin = Math.floor(audio.currentTime) / 60
            var musicTimeLeftsec = Math.floor(audio.currentTime) % 60
            if (musicTimeLeftsec < 10) {
                timeLeft.innerHTML = `0${Math.floor(musicTimeLeftmin)}:0${Math.floor(musicTimeLeftsec)}`
            } else {
                timeLeft.innerHTML = `0${Math.floor(musicTimeLeftmin)}:${Math.floor(musicTimeLeftsec)}`
            }
        })
        setTimeout(() => {
            var musicDurationmin = Math.floor(audio.duration) / 60
            var musicDurationsec = Math.floor(audio.duration) % 60
            if (musicDurationsec < 10) {
                timeDuration.innerHTML = `0${Math.floor(musicDurationmin)}:0${musicDurationsec}`
            } else {
                timeDuration.innerHTML = `0${Math.floor(musicDurationmin)}:${musicDurationsec}`
            }
            audio.play()
        }, 500)
        mainSectionMusic.style.display = 'flex'
        var a = ((Math.floor(audio.currentTime) * 100))
    })
});

main.appendChild(sectionCart)

function repeatMusic() {
    if (audio.loop) {
        audio.loop = false
        repeat.className = 'music-elements'
    } else {
        audio.loop = true
        repeat.className = 'element-select'
    }
}
function nextAndBeforMusicPlay(id) {
    musicIsPlay = true
    saveId = dataMusic[id].id
    audio.src = dataMusic[id].file
    backgroundCover.id = dataMusic[id].id
    backgroundCover.style.backgroundImage = `url(${dataMusic[id].cover}) `
    coverInDetail.style.backgroundImage = `url(${dataMusic[id].cover}) `
    musicNameInDetail.innerHTML = dataMusic[id].musicName
    artistNameInDetail.innerHTML = dataMusic[id].artistName
    audio.addEventListener('timeupdate', () => {
        var musicTimeLeftmin = Math.floor(audio.currentTime) / 60
        var musicTimeLeftsec = Math.floor(audio.currentTime) % 60
        if (musicTimeLeftsec < 10) {
            timeLeft.innerHTML = `0${Math.floor(musicTimeLeftmin)}:0${Math.floor(musicTimeLeftsec)}`
        } else {
            timeLeft.innerHTML = `0${Math.floor(musicTimeLeftmin)}:${Math.floor(musicTimeLeftsec)}`
        }
    })
    setTimeout(() => {
        var musicDurationmin = Math.floor(audio.duration) / 60
        var musicDurationsec = Math.floor(audio.duration) % 60
        if (musicDurationsec < 10) {
            timeDuration.innerHTML = `0${Math.floor(musicDurationmin)}:0${musicDurationsec}`
        } else {
            timeDuration.innerHTML = `0${Math.floor(musicDurationmin)}:${musicDurationsec}`
        }
        audio.play()
    }, 500)
    mainSectionMusic.style.display = 'flex'
}
function playAndPauseMusic() {
    if (musicIsPlay) {
        audio.pause()
        musicIsPlay = false
        play.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fafafa"
        class="bi bi-play" viewBox="0 0 16 16">
        <path
            d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
    </svg>`
    } else {
        audio.play()
        musicIsPlay = true
        play.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fafafa" class="bi bi-pause" viewBox="0 0 16 16">
        <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
      </svg>`
    }
}

next.addEventListener('click', () => {
    if (shuffleOff) {
        if (saveId === 5) {
            saveId = 0
            nextAndBeforMusicPlay(saveId)
        } else {

            nextAndBeforMusicPlay(saveId)
        }
    } else {
        saveId = Math.floor(Math.floor(Math.random() * 10) / 2)
        nextAndBeforMusicPlay(saveId)
    }
})
before.addEventListener('click', () => {
    if (shuffleOff) {
        if (saveId == 1) {
            saveId = 4
            nextAndBeforMusicPlay(saveId)
        } else {
            saveId = saveId - 2
            nextAndBeforMusicPlay(saveId)
        }
    } else {
        saveId = Math.floor(Math.floor(Math.random() * 10) / 2)
        nextAndBeforMusicPlay(saveId)
    }
})
shuffle.addEventListener('click', () => {
    if (shuffleOff) {
        shuffleOff = false
        shuffle.className = 'element-select'
    } else {
        shuffleOff = true
        shuffle.className = 'music-elements'
    }

})
repeat.addEventListener('click', () => {
    repeatMusic()
})
volume.addEventListener('click', () => {
    if (displayVolume) {

        volume.className = 'element-select'
        VolumeSection.style.display = 'flex'
        displayVolume = false
        
    } else {
        
        volume.className = 'music-elements'
        VolumeSection.style.display = 'none'
        displayVolume = true

    }
})
download.addEventListener('click', () => {
    window.open(audio.src);
})
fillBtntimeline.addEventListener('mousedown', () => {
    audio.pause()
    play.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fafafa"
        class="bi bi-play" viewBox="0 0 16 16">
        <path
            d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
    </svg>`
})
fillBtntimeline.addEventListener('mouseup', () => {
    audio.play()
    play.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fafafa" class="bi bi-pause" viewBox="0 0 16 16">
        <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
      </svg>`
})
VolumeSection.addEventListener('click', () => {
    var posVolumX = Math.floor((window.event.clientX)) - 1296
    var posVolumXBtn = 100-posVolumX
    if (posVolumXBtn >80) {
        posVolumXBtn = 80
    }
    fillVolume.style.width = posVolumX + '%'
    fillBtnVolume.style.right = (posVolumXBtn) + '%'
    audio.volume = posVolumX / 100
    if (audio.volume < 0.7 && audio.volume > 0.2) {

        volume.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fafafa" class="bi bi-volume-down" viewBox="0 0 16 16">
        <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zM6.312 6.39 8 5.04v5.92L6.312 9.61A.5.5 0 0 0 6 9.5H4v-3h2a.5.5 0 0 0 .312-.11zM12.025 8a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>
      </svg>`
        
    } else if(audio.volume <= 0.2) {

        volume.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fafafa" class="bi bi-volume-off" viewBox="0 0 16 16">
        <path d="M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM10 5.04 8.312 6.39A.5.5 0 0 1 8 6.5H6v3h2a.5.5 0 0 1 .312.11L10 10.96V5.04z"/>
      </svg>`
        
    } else {

        volume.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fafafa"
        class="bi bi-volume-up" viewBox="0 0 16 16">
        <path
            d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
        <path
            d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
        <path
            d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z" />
    </svg>`

    }

})
timeLineSection.addEventListener('click', () => {
    var timeLineWidth = timeLineSection.clientWidth
    var posX = Math.floor(((window.event.clientX - 80) * 100 )/ timeLineWidth)
    fillTimeline.style.width = posX + '%'
    fillBtntimeline.style.left = posX + '%'
    audio.currentTime = Math.floor(posX * audio.duration / 100)

})
play.addEventListener('click', () => {
    playAndPauseMusic()
})
