AFRAME.registerComponent('generatefloor', {
    // for pool obj container
    schema: {
        
    },

    init: function () {
        // Do something when component first attached.
        this.el.sceneEl.addEventListener('start', ()=>{
            this.gen();
            //....
        });
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    },

    gen: function() {
        //alert('ya!!!!');
        let planepool = this.el.sceneEl.components.pool__plane;

        for(let i=0; i<30; i++){
            //alert(i);
            setTimeout(()=>{
                let el = planepool.requestEntity();
                el.setAttribute('position', '0 0 '+(i*-1));
                el.play();
            }, i*200);
            
        }
        
    }
});
