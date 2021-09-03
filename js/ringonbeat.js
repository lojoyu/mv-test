/**
 * Create expanding ring on audioanalyser beat.
 */
AFRAME.registerComponent('ring-on-beat', {
  schema: {
    analyserEl: { type: 'selector' },
    beat: { default: 'low' },
  },

  init: function () {
    const analyserEl = this.data.analyserEl || this.el;

    analyserEl.addEventListener(`audioanalyser-beat-${this.data.beat}`,() => {
      const analyserComponent = analyserEl.components.audioanalyser;
      const volume = analyserComponent.volume;
      console.log(this.el.sceneEl.components);
      // let circlepool = this.el.sceneEl.components.pool__circle;
      // let el = circlepool.requestEntity();
      // el.setAttribute('position', '0 0 0');
      // el.setAttribute('scale', '1 1 1');
      // //el.setAttribute('material', 'opacity', volume/110);
      // console.log(volume);
      // el.play();

      // setTimeout(()=> {
      //   circlepool.returnEntity(el);
      // }, 2000);

      
    });
  },
});

AFRAME.registerComponent('volume-change', {
  schema: {
    analyserEl: { type: 'selector' },
    multiplier: { type: 'number', default: 1 },
  },

  tick: function () {
    const analyserEl = this.data.analyserEl || this.el;
    const el = this.el;

    const analyserComponent = analyserEl.components.audioanalyser;
    if (!analyserComponent.analyser) {
      return;
    }

    const volume = analyserComponent.volume * this.data.multiplier;
    el.setAttribute('scale', {
      x: volume,
      y: volume,
      z: volume,
    });
  },
});