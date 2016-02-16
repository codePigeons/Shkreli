function Shkreli(objects) {
    this.nodeType;
    this.element;
    this.video;
    this.width;
    this.height;
    this.broadcast(objects);
}

Shkreli.prototype = {
    constructor: Shkreli,
    enlarge: function () {
        if (this.element) {
            if (this.element.charAt(0) == '#') {
                // If div ID
                this.width = document.getElementById(this.element.slice(1)).offsetWidth;
                this.height = document.getElementById(this.element.slice(1)).offsetHeight;
                this.nodeType = 'id';
            } else {
                // If class
                this.width = document.getElementsByClassName(this.element)[0].offsetWidth;
                this.height = document.getElementsByClassName(this.element)[0].offsetHeight;
                this.nodeType = 'class';
            }
            return true;
        } else {
            return false;
        }
    },
    broadcast: function (objects) {
        if (objects) {
            if (objects.hasOwnProperty('video')) {
                this.video = objects.video;
            } else {
                return false;
            }
            if (objects.hasOwnProperty('element')) {
                this.element = objects.element;
                var enlargeMe = this.enlarge();
                if (enlargeMe == true) {
                    var node = document.getElementById(this.element.slice(1));
                    node.style.backgroundColor = 'transparent';
                    var newNode = document.createElement('VIDEO');
                    newNode.setAttribute('loop', true);
                    newNode.setAttribute('muted', true);
                    newNode.setAttribute('autoplay', true);
                    newNode.id = 'shkreli' + this.element.slice(1);
                    node.appendChild(newNode);
                    var shkreli = document.getElementById('shkreli' + this.element.slice(1));
                    shkreli.style.zIndex = '-100';
                    shkreli.style.position = "absolute";
                    shkreli.style.top = "0";
                    shkreli.style.left = "0";
                    shkreli.style.width = "100%";
                    shkreli.style.height = "100%";
                    var mp4 = document.createElement('SOURCE');
                    mp4.src = this.video;
                    mp4.type = 'video/mp4';
                    shkreli.appendChild(mp4);
                } else {
                    // Put Shkreli
                }
            } else {
                return false;
            }
        } else {
            // no objects
            return false;
        }
    },

}