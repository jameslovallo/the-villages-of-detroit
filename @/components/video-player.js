import ardi, { html } from 'https://unpkg.com/ardi'

ardi({
  tag: 'video-player',
  props: { src: [String], poster: [String] },
  state: () => ({ playing: false }),
  template() {
    const pause = 'M14,19H18V5H14M6,19H10V5H6V19Z'
    const play = 'M8,5.14V19.14L19,12.14L8,5.14Z'
    return html`
      <video
        ref="video"
        src=${this.src}
        poster=${this.poster}
        playsinline
        @ended=${() => {
          this.playing = false
        }}
      ></video>
      <button
        aria-label=${this.playing ? 'pause' : 'play'}
        title=${this.playing ? 'pause' : 'play'}
        @click=${() => {
          this.playing = !this.playing
          this.refs.video[this.playing ? 'play' : 'pause']()
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d=${this.playing ? pause : play} />
        </svg>
      </button>
    `
  },
  css: /* css */ `
		:host {
			aspect-ratio: 16/9;
			position: relative;
		}
		video {
			aspect-ratio: 16/9;
			display: block;
			height: auto;
			object-fit: cover;
			width: 100%;
		}
		button {
			background: var(--primary);
			border: 2px solid var(--on-primary);
			border-radius: 50%;
			bottom: 1rem;
			cursor: pointer;
			height: 40px;
			left: 1rem;
			position: absolute;
			width: 40px;
		}
		button svg {
			display: block;
			fill: var(--on-primary);
		}
	`,
})
