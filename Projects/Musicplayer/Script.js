// script.js
// Simple OOP + DOM example: Song, MusicPlayer, App

// --- Helper ---
function formatTime(sec) {
    if (!sec || isNaN(sec)) return '0:00';
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    const m = Math.floor(sec / 60);
    return `${m}:${s}`;
}

// --- Song class (model) ---
class Song {
    constructor(title, artist, file) {
        this.title = title;
        this.artist = artist;
        this.file = file; // path or URL
    }
}

// --- MusicPlayer class (controls playback) ---
class MusicPlayer {
    constructor(songs = []) {
        this.songs = songs;
        this.current = 0;
        this.audio = new Audio();
        this.isPlaying = false;
        // callback from UI to refresh view
        this.onUpdate = null;

        // audio events -> call onUpdate so UI can refresh progress etc.
        this.audio.addEventListener('loadedmetadata', () => { if (this.onUpdate) this.onUpdate(); });
        this.audio.addEventListener('timeupdate', () => { if (this.onUpdate) this.onUpdate(); });
        this.audio.addEventListener('ended', () => { this.next(); });
    }

    load(index) {
        if (!this.songs.length) return;
        if (index < 0) index = 0;
        if (index >= this.songs.length) index = 0;
        this.current = index;
        this.audio.src = this.songs[index].file;
        this.audio.load();
        if (this.onUpdate) this.onUpdate();
    }

    play() {
        if (!this.audio.src) this.load(this.current);
        this.audio.play();
        this.isPlaying = true;
        if (this.onUpdate) this.onUpdate();
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        if (this.onUpdate) this.onUpdate();
    }

    togglePlay() {
        if (this.isPlaying) this.pause(); else this.play();
    }

    next() {
        if (!this.songs.length) return;
        this.load((this.current + 1) % this.songs.length);
        this.play();
    }

    prev() {
        if (!this.songs.length) return;
        this.load((this.current - 1 + this.songs.length) % this.songs.length);
        this.play();
    }

    seek(percentage) {
        if (!this.audio.duration) return;
        const time = (percentage / 100) * this.audio.duration;
        this.audio.currentTime = time;
        if (this.onUpdate) this.onUpdate();
    }

    setVolume(v) {
        this.audio.volume = v;
        if (this.onUpdate) this.onUpdate();
    }
}

// --- App class (wires UI to player) ---
class App {
    constructor() {
        // initial songs (replace file paths with your own if needed)
        const initial = [
            new Song('Song One', 'Artist A', 'audio/song1.mp3'),
            new Song('Song Two', 'Artist B', 'audio/song2.mp3'),
            new Song('Song Three', 'Artist C', 'audio/song3.mp3')
        ];

        this.player = new MusicPlayer(initial);

        // UI elements
        this.playBtn = document.getElementById('play');
        this.prevBtn = document.getElementById('prev');
        this.nextBtn = document.getElementById('next');
        this.progress = document.getElementById('progress');
        this.volume = document.getElementById('volume');
        this.trackTitle = document.getElementById('track-title');
        this.trackArtist = document.getElementById('track-artist');
        this.playlistEl = document.getElementById('playlist');

        this.addSongForm = document.getElementById('addSongForm');
        this.noteForm = document.getElementById('noteForm');
        this.noteText = document.getElementById('noteText');
        this.notesList = document.getElementById('notesList');

        // bind methods
        this.player.onUpdate = () => this.updateUI();

        this.playBtn.addEventListener('click', () => this.player.togglePlay());
        this.prevBtn.addEventListener('click', () => this.player.prev());
        this.nextBtn.addEventListener('click', () => this.player.next());

        this.progress.addEventListener('input', (e) => {
            this.player.seek(e.target.value);
        });

        this.volume.addEventListener('input', (e) => {
            this.player.setVolume(e.target.value);
        });

        this.addSongForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('new-title').value.trim();
            const artist = document.getElementById('new-artist').value.trim();
            const file = document.getElementById('new-file').value.trim();
            if (!title || !artist || !file) return;
            const s = new Song(title, artist, file);
            this.player.songs.push(s);
            this.renderPlaylist();
            this.addSongForm.reset();
        });

        // notes form
        this.noteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = this.noteText.value.trim();
            if (!text) return;
            this.addNoteDOM(text);
            this.noteText.value = '';
        });

        this.renderPlaylist();
        // load first song if exists
        if (this.player.songs.length) this.player.load(0);
        this.updateUI();
    }

    renderPlaylist() {
        this.playlistEl.innerHTML = '';
        this.player.songs.forEach((s, idx) => {
            const item = document.createElement('div');
            item.className = 'song-item';
            item.innerHTML = `
        <div style="display:flex;align-items:center">
          <div style="width:28px;text-align:center;color:#666">${idx + 1}</div>
          <div class="s-meta">
            <strong>${s.title}</strong>
            <small>${s.artist}</small>
          </div>
        </div>
        <div class="s-actions">
          <button class="play-this">Play</button>
          <button class="remove">Delete</button>
        </div>
      `;
            // play this
            item.querySelector('.play-this').addEventListener('click', () => {
                this.player.load(idx);
                this.player.play();
            });
            // remove
            item.querySelector('.remove').addEventListener('click', () => {
                // if removing current song, try to adjust player state
                const wasCurrent = (idx === this.player.current);
                this.player.songs.splice(idx, 1);
                if (!this.player.songs.length) {
                    this.player.pause();
                    this.player.audio.src = '';
                } else if (wasCurrent) {
                    this.player.load(0);
                } else if (idx < this.player.current) {
                    // shift current index left
                    this.player.current = this.player.current - 1;
                }
                this.renderPlaylist();
                this.updateUI();
            });

            this.playlistEl.appendChild(item);
        });
    }

    addNoteDOM(text) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${text}</span> <button class="del">x</button>`;
        li.querySelector('.del').addEventListener('click', () => li.remove());
        this.notesList.prepend(li);
    }

    updateUI() {
        // update track text
        const currentSong = this.player.songs[this.player.current];
        this.trackTitle.textContent = currentSong ? currentSong.title : '—';
        this.trackArtist.textContent = currentSong ? currentSong.artist : '—';
        // play/pause symbol
        this.playBtn.textContent = this.player.isPlaying ? '⏸' : '▶️';

        // progress and times
        const aud = this.player.audio;
        document.getElementById('current').textContent = formatTime(aud.currentTime);
        document.getElementById('duration').textContent = formatTime(aud.duration);
        this.progress.value = aud.duration ? (aud.currentTime / aud.duration) * 100 : 0;
    }
}

// Start app when DOM ready
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
