AFRAME.registerComponent('changecolor', {
    schema: {
        analyserEl: { type: 'selector' },
        beat: { default: 'high' },
    },
    
    init: function () {
        const analyserEl = this.data.analyserEl || this.el;
    
        analyserEl.addEventListener(`audioanalyser-beat-${this.data.beat}`,() => {
            
            var secondCameraEl = document.querySelector('#secondcam');
            let x = Math.random() * (-90);
            let y = Math.random() * 90 - 45;
            secondCameraEl.setAttribute('rotation', `${x} ${y} 0`)
            secondCameraEl.setAttribute('camera', 'active', true);

            let r = Math.floor(Math.random() * 360);
            let g = Math.floor(Math.random() * 360);
            let b = Math.floor(Math.random() * 360);
            this.el.setAttribute("light", 'color', `rgb(${r}, ${g}, ${b})`);
            setTimeout(()=>{
                var firstCameralEl = document.querySelector('#firstcam');
                secondCameraEl.setAttribute('camera', 'active', false);
                firstCameralEl.setAttribute('camera', 'active', true);
                this.el.setAttribute("light", 'color', 'white');
            }, 300);

            console.log(this.el.sceneEl.components);
        });
      // Do something when component first attached.
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
        const analyserEl = this.data.analyserEl || this.el;
        //console.log(analyserEl);
        const analyserComponent = analyserEl.components.audioanalyser;
        if (analyserComponent) {
            const volume = analyserComponent.volume;
            this.el.setAttribute("light", 'intensity', volume/100);
            //console.log(volume);
        }
        //const volume = analyserComponent.volume;
        //this.el.setAttribute("light", 'intensity', volume/120);
      // Do something on every scene tick or frame.
    }
});
