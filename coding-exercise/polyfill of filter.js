Array.prototype.filterAlbums = function(callback, context) {
    arr = []
    for (var i = 0; i < this.length; i++) {
      if (callback.call(context, this[i], i, this)) {
        arr.push(this[i])
      }
    }
    return arr
  }