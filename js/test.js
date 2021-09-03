AFRAME.registerComponent('test', {
    schema: {
        
    },

    init: function () {
        this.firstTime = true;
        //console.log('yo', this.el.getAttribute('position'));
      // Do something when component first attached.
        this.add = 0.01;
        this.count = 0;
        
        //console.log(this.el.components.material.material.color);
        //this.el.components.material.material.color.r = Math.random();
        //this.el.components.material.material.color.g = 0.5;
        //this.el.components.material.material.color.b = 0.5;
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
      //this.el.sceneEl.removeEventListener('checkmove');
    },

    tick: function (time, timeDelta) {
       
        // Do something on every scene tick or frame.
        let pos = this.el.getAttribute("position");
        //console.log(pos);
        // if (pos.y > 0.3) this.add = -0.005;
        // if (pos.y < -0.3) this.add = 0.005;

        // pos.y += this.add;

        // let parent = this.el.parentElement;
        // if (parent.getAttribute('position').z < pos.z) {
            // var sceneEl = document.querySelector('a-scene');
            // var planepool = sceneEl.components.pool__plane;
            // planepool.returnEntity(this.el);
            // return;
        // } 

        // if (this.count != 0) {
        //     this.count++;
        //     if (this.count > 200) {
        //         this.el.components.material.material.color.b = 1;

        //         this.el.components.material.material.color.g = 1;
        //         this.el.components.material.material.color.r = 1;
        //         //console.log('this.el.components.material.material.color.r');
        //         this.count = 0;
        //     }
        // } else if (Math.random() < 0.0005) {
        //     this.count++;
        //     this.el.components.material.material.color.g = Math.random();
        //     this.el.components.material.material.color.r = Math.random();
        //     this.el.components.material.material.color.b = Math.random();

        // }

    },

    // checkmove: (e) => {
    //         let pos = this.el.getAttribute('position');
    //         let planepool = this.el.sceneEl.components.pool__plane;

    //         if (e.detail.z + pos.z < -3) {
    //             this.el.sceneEl.removeEventListener('checkmove', this.checkmove.bind(this,));
    //             planepool.returnEntity(this.el);
    //         }
    // },

    // test: function() {
    //     //console.log('test');
    //     this.el.sceneEl.addEventListener('checkmove', this.checkmove.bind(this, e));
    // },

    events: {
       
    }
});
