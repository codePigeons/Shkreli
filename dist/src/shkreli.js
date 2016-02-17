function Shkreli(objects) {
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
    enlarge: function() {
        if (this.element) {
            if (this.element.charAt(0) == '#') {
                // If div ID
                this.width = document.getElementById(this.element.slice(1)).offsetWidth;
                this.height = document.getElementById(this.element.slice(1)).offsetHeight;
            }
            return true;
        } else {
            return false;
        }
    },
    broadcast: function(objects) {
        if (objects) {
            this.video = objects;
            if (this.video.hasOwnProperty('start') && this.video.hasOwnProperty('end')) {
                this.start = this.video.start;
                this.end = this.video.end;
            } else if (this.video.hasOwnProperty('start')) {
                this.start = this.video.start;
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
                    if (this.video.hasOwnProperty('mp4')) {
                        var mp4 = document.createElement('SOURCE');
                        if (this.start && this.end) {
                            mp4.src = this.video.mp4 + '#t=' + this.start + ',' + this.end;
                        } else if (this.start) {
                            mp4.src = this.video.mp4 + '#t=' + this.start;
                        } else {
                            mp4.src = this.video.mp4;
                        }
                        mp4.type = 'video/mp4';
                        shkreli.appendChild(mp4);
                    }
                    if (this.video.hasOwnProperty('ogv')) {
                        var ogv = document.createElement('SOURCE');
                        if (this.start && this.end) {
                            ogv.src = this.video.ogv + '#t=' + this.start + ',' + this.end;
                        } else if (this.start) {
                            ogv.src = this.video.ogv + '#t=' + this.start;
                        } else {
                            ogv.src = this.video.ogv;
                        }
                        ogv.type = 'video/ogg';
                        shkreli.appendChild(ogv);
                    }
                    if (this.video.hasOwnProperty('webm')) {
                        var webm = document.createElement('SOURCE');
                        if (this.start && this.end) {
                            webm.src = this.video.webm + '#t=' + this.start + ',' + this.end;
                        } else if (this.start) {
                            webm.src = this.video.webm + '#t=' + this.start;
                        } else {
                            webm.src = this.video.webm;
                        }
                        webm.type = 'video/webm';
                        shkreli.appendChild(webm);
                    }
                    if (this.video.hasOwnProperty('cover')) {
                        alert('cover');
                        newNode.setAttribute(this.video.cover);
                    }
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