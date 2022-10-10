class AudioPlayer {
  constructor(container, song) {
    this.container = null; // HTML container where player is rendered
    this.formats = ['mp3', 'mp4', 'flac'];
    this.song = song; //song that is being played
    this.album = null; // album of the song
    this.name = null; // name of AudioPlayer
    this.author_name = null; // name of artist of song
    this.playlist = []; // playlist being played
    this.timestamp = 0.0; // which second is being played
    this.song_length = null; // length of the song
    this.volume = 50; // 0-100 volume
    this.is_playing = false;  // playing or stopped
    this.next_track = null;
    this.previous_track = null;
    this.shuffle = false;
    this.repeat = false;
    this.menu_open = false;
    this.is_minimized = false;
  }

  start() {
    this.setPlayingState(true);
    this.setTimestamp(0.0);
  }

  stop() {
    this.setPlayingState(false);
    this.setTimestamp(0.0);
  }

  setTimestamp(timestamp) {
    if (this.timestamp >= 0 && this.timestamp <= this.song_length) {
      this.timestamp = timestamp;

      this.showTimestampOnTimebar();
    }
  }

  pause() {
    this.is_playing = false;
  }

  unpause() {
    this.is_playing = true;
  }

  setPlayingState(is_playing) {
    this.is_playing = is_playing;

    this.displayPlayStateOnButtons;
  }

  toggleShuffle() {
    this.shuffle = !this.shuffle;
  }

  toggleRepeat() {
    this.repeat = !this.repeat;
  }

  toggleMute() {

  }

  seek(time) {

  }

  playNextTrack() {

  }

  playPreviousTrack() {

  }


}