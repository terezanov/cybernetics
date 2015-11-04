window.onload = function() {
  var cyber = {
    width: function() {
      return window.innerWidth;
    },
    init: function() {
      var self = this;
      var blocks = document.querySelectorAll('.news li');
      window.onresize = function() {
        self.addEmptyBlock();
      };
      this.checkWidth(blocks);
    },
    checkWidth: function(blocks) {
      if(this.width() > 600 && this.width() < 900) {
        this.trimText('.news .title', 36);
      } else if(this.width() > 900 && this.width() < 1200) {
        this.trimText('.news .title', 20);
      } else {
        this.trimText('.news .title', 18);
      }
      this.blocksHeight(blocks);
      this.addEmptyBlock();
    },
    trimText: function(selector, count) {
      var titles = document.querySelectorAll(selector);
      for(var i = 0, len = titles.length; i < len; i++) {
        if(titles[i].innerHTML.length > 18) {
          titles[i].innerHTML = titles[i].innerHTML.slice(0,count) + '...';
        }
      }
    },
    blocksHeight: function(blocks) {
      var maxHeight = 0;
      for(var i = 0, len = blocks.length; i < len; i++) {
        var h = blocks[i].clientHeight;
        if(h > maxHeight) maxHeight = h;
      }
      for(var j = 0; j < len; j++) {
        blocks[j].style.height = maxHeight + 'px';
      }
    },
    addEmptyBlock: function() {
      if(this.width() > 900 && this.width() < 1200) {
        var container = document.querySelector('.offers ul'),
            countBlocks = document.querySelectorAll('.offers li').length;
        if(countBlocks % 3) {
          var li = document.createElement('li');
          container.appendChild(li);
        }
      }
    }
  }.init();
}