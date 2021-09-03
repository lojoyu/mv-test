AFRAME.registerComponent('genpool', {
    schema: {
        
    },

    init: function () {
        this.firstTime = true;
        this.time = 0;
      // Do something when component first attached.
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
      var sceneEl = document.querySelector('a-scene');
      //console.log(sceneEl.components.pool__plane);
      this.time += timeDelta;

      var planepool = sceneEl.components.pool__plane;
      if (this.start && this.time/1000 > 1) {
        let i = this.i;
        this.i ++;
        for (let j=0; j<20; j++) {
          var el = planepool.requestEntity();
          el.components.test.test();
          el.setAttribute("position", `${j-10} 0 ${i*-1}`);
          el.play();
        }
        this.time = 0;
      }
      
    },

    events: {
        click: function(e) {
          this.el.setAttribute("visible", false);
          // var cam = document.querySelector('[movecam]');
          // cam.components.movecam.startmove();
            //if (!this.firstTime) return;
            //this.firstTime = false;
            console.log(this.el);
            this.el.components.sound.playSound();

            var sceneEl = document.querySelector('a-scene');
            console.log(sceneEl.components.pool__plane);
            
            var planepool = sceneEl.components.pool__plane;
            this.start = true;
            this.i = 3;
            
            // for (let i=0; i< 20; i++) {
            //   for (let j=0; j<20; j++) {
            //     setTimeout(()=>{
            //         var el = planepool.requestEntity();
            //         el.components.test.test();
            //         el.setAttribute("position", `${j-10} 0 ${i*-1}`);
            //         el.play();
            //     }, i*300 + j*0);
            //   }
            //     //sceneEl.components.pool__plane.returnEntity(el);
            // }
            
        }
    }
});
