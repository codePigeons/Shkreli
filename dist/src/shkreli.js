function Shkreli() {
    this.element;
    this.video;
    this.width;
    this.height;
}

Shkreli.prototype = {
    constructor: Shkreli,
    enlarge:function(){
        
        this.width = document.getElementById(this.element).offsetWidth;
        this.height = document.getElementById(this.element).offsetWidth;
    },
    broadcast: function (objects) {
        if (objects) {
            if (objects.hasOwnProperty('element')) {
                this.element = objects.element;
            } else {
                return false;
            }
            if (objects.hasOwnProperty('video')) {
                this.video = objects.video;
            } else {
                return false;
            }
        } else {
            // no objects
            return false;
        }
    },

}