AFRAME.registerComponent('movecontrol', {
    schema: {
        zoffset: {
            default: 0
        },
        analyserEl: { type: 'selector', default: '#analyser' },
        beat: { default: 'high' },
    },
    

    init: function () {
      // Do something when component first attached.
        this.start = false;
        this.el.sceneEl.addEventListener('start', () => {
            this.startt();
        });
        
        // const analyserEl = this.data.analyserEl || this.el;

        // analyserEl.addEventListener(`audioanalyser-beat-${this.data.beat}`,() => {
        //     let pos = this.el.getAttribute("position");
        //     pos.z = 0;
        // });
        
    },

    startt: function() {
        let box = document.getElementById('startbox');
        console.log(box);
        box.setAttribute('class', '');

        console.log('this???')
        setTimeout(() => {
            console.log(this.el);
            this.start = true;
        }, 9000);
        this.genfirst();
    },

    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
        if (this.start) {
            let pos = this.el.getAttribute("position");
            pos.z += 0.1;
            if (pos.z >= 30) pos.z = 0;

            // if (pos.z - this.prevz >= 1) {
            //     this.prevz += 1;
            //     let arr = this.gen(this.i);
            //     this.i++;
            //     this.elArray.push(arr);
            //     this.remove();
            // }
        }
      

    },

    // remove: function() {
    //     let planepool = this.el.sceneEl.components.pool__plane;
    //     let els = this.elArray.shift();
    //     for (let i=0; i<20; i++) {
    //         planepool.returnEntity(els[i]);
    //     }
    // },

    gen: function(i) {
        let elarr = [];
        let planepool = this.el.sceneEl.components.pool__plane;
        for (let j=0; j<20; j++) {
            var el = planepool.requestEntity();
            el.setAttribute("position", `${j-10} 0 ${i*-1}`);
            el.play();
            //elarr.push(el);
        }
       // return elarr;
    },

    genfirst: function() {
        let planepool = this.el.sceneEl.components.pool__plane;
        
        for(let i=0; i<100; i++) {
            for (let j=0; j<1; j++) {
                setTimeout(()=> {
                    var el = planepool.requestEntity();
                    el.setAttribute("position", `${j-0} 0 ${i*-1 + this.data.zoffset}`);
                    el.play();
                }, i*200)
            }
            
           
            // setTimeout(()=>{
            //     let arr = this.gen(i);
            //     //this.elArray.push(arr);
            // }, i*200);
        }
        //this.i = 30;
    }
});
