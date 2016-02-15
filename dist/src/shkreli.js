function Shkreli() {
    this.element;
    this.video;
    this.width;
    this.height;
}

Shkreli.prototype = {
    constructor: Shkreli,
    elarge:function(){
        if(this.element) {
            if (this.element.charAt(0) == '#'){
                // If div ID
                alert();
                this.width = document.getElementById(this.element).offsetWidth;
                this.height = document.getElementById(this.element).offsetHeight;
            } else {
                // If class
                this.width = document.getElementsByClassName(this.element).offsetWidth;
                this.height = document.getElementsByClassName(this.element).offsetHeight;
            }
            return true;
        } else {
            return false;
        }
    },
    broadcast: function (objects) {
        if (objects) {
            if (objects.hasOwnProperty('element')) {
                this.element = objects.element;
                var enlargeMe = this.elarge();
                if(enlargeMe == true){
                    // Do stuff
                } else {
                    // Put Shkreli
                }
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