AFRAME.registerComponent('emitonclick', {
    schema: {
        event: {
            type: 'string',
            default: 'start'
        }
    },
    init: function() {
        console.log('start?');
    },

    events: {
        click: function() {
            this.el.emit(this.data.event);
            this.el.removeAttribute('class');
            //this.el.emit('start');
            //var entity = document.querySelector('[sound]');
            //console.log(entity.components.sound);
            let analyser = document.getElementById('analyser');
            analyser.setAttribute('audioanalyser', 'src:#intro;');
            
        }
    }
});
