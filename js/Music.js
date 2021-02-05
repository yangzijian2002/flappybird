// export let playbgm = function(){
//   let audio = wx.createInnerAudioContext();
//   audio.src = "audio/bgm.mp3";
//   // audio.autoplay = true; // 设置是否自动播放
//   audio.loop = true; // 设置循环播放
//   // 手动调用播放的方法
//   audio.play()
// }
function playMusic(src="",loop=false){
  return function(){
    let audio = wx.createInnerAudioContext();
    audio.src = src;
    audio.loop = loop;
    audio.play();
  }
}
export let playbgm = playMusic("audio/bgm.mp3", true);

export let boom = playMusic("audio/boom.mp3");

export let go = playMusic("audio/bullet.mp3");