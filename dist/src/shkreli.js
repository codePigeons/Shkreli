function Shkreli() {
    this.element;
    this.video;
    this.width;
    this.height;
}

Shkreli.prototype = {
    constructor: Shkreli,
    elarge:function(){
        alert(this.element);
    },
    broadcast: function (objects) {
        if (objects) {
            if (objects.hasOwnProperty('element')) {
                this.element = objects.element;
                this.elarge();
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