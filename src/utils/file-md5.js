'use strict';
import '../plugins/js-spark-md5.js'

export default function (file, callback) {
  var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
    file = file,
    chunkSize = 4194304,                             // Read in chunks of 4MB 即 4 * 1024 * 1024
    chunks = Math.ceil(file.size / chunkSize),
    currentChunk = 0,
    spark = new SparkMD5.ArrayBuffer(),              //向上取整，因为最后一块不一定满4MB
    fileReader = new FileReader();

  fileReader.onload = function (e) {
    console.log('read chunk nr', currentChunk + 1, 'of', chunks);
    spark.append(e.target.result);                   // Append array buffer
    currentChunk++;

    if (currentChunk < chunks) {
      loadNext();
    } else {
      let data = {
        "etag": spark.end(),
        "chunks": chunks,
        "size": file.size,
        "blockToken": "",
      }
      callback(null, data);
      console.log('finished loading');
    }
  };

  fileReader.onerror = function () {
    callback('oops, something went wrong.');
  };

  function loadNext() {
    var start = currentChunk * chunkSize,
      end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;

    fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
  }

  loadNext();
};