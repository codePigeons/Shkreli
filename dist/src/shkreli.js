function Shkreli(objects) {
    this.nodeType;
    this.element;
    this.video;
    this.width;
    this.height;
    this.start;
    this.end;
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
            if (objects.hasOwnProperty('start') && objects.hasOwnProperty('end')) {
                this.start = objects.start;
                this.end = objects.end;
            } else if (objects.hasOwnProperty('start')) {
                this.start = objects.start;
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
                    shkreli.style.top = "50%";
                    shkreli.style.left = "50%";
                    shkreli.style.minWidth = "100%";
                    shkreli.style.width = this.width;
                    shkreli.style.minHeight = "100%"
                    shkreli.style.height = this.height;
                    shkreli.style.webkitTransform = "translateX(-50%) translateY(-50%)";
                    var mp4 = document.createElement('SOURCE');
                    if (this.start && this.end) {
                        mp4.src = this.video + '#t=' + this.start + ',' + this.end;
                    } else if (this.start) {
                        mp4.src = this.video + '#t=' + this.start;
                    } else {
                        mp4.src = this.video;
                    }
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