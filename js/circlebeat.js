AFRAME.registerComponent('circlebeat', {
    schema: {
        timeout: {
            default: 3000
        }
    },

    init: function () {
        // Do something when component first attached.
        this.el.setAttribute('material', 'opacity', '0.8');
        //this.el.setAttribute('position', '0 0.1 0');
        this.el.setAttribute('rotation', '-90 0 0');
        setTimeout(() => {
            //this.el.removeAttribute('');
            //let circlepool = this.el.sceneEl.components.pool__circle;
            //circlepool.returnEntity(this.el);
            //console.log('???');
        }, this.data.timeout);
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
      //this.el.removeAttribute('');
    },

    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
        const scale = this.el.getAttribute('scale');
        this.el.setAttribute('scale', {
            x: scale.x * 1.06 + 0.05,
            y: scale.y * 1.06 + 0.05,
            z: scale.z,
        });
    }
});
