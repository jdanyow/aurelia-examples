/* */ 
(function(process) {
  var Parser = require("./Parser"),
      DomHandler = require("domhandler");
  function defineProp(name, value) {
    delete module.exports[name];
    module.exports[name] = value;
    return value;
  }
  module.exports = {
    Parser: Parser,
    Tokenizer: require("./Tokenizer"),
    ElementType: require("domelementtype"),
    DomHandler: DomHandler,
    get FeedHandler() {
      return defineProp("FeedHandler", require("./FeedHandler"));
    },
    get Stream() {
      return defineProp("Stream", require("./Stream"));
    },
    get WritableStream() {
      return defineProp("WritableStream", require("./WritableStream"));
    },
    get ProxyHandler() {
      return defineProp("ProxyHandler", require("./ProxyHandler"));
    },
    get DomUtils() {
      return defineProp("DomUtils", require("domutils"));
    },
    get CollectingHandler() {
      return defineProp("CollectingHandler", require("./CollectingHandler"));
    },
    DefaultHandler: DomHandler,
    get RssHandler() {
      return defineProp("RssHandler", this.FeedHandler);
    },
    parseDOM: function(data, options) {
      var handler = new DomHandler(options);
      new Parser(handler, options).end(data);
      return handler.dom;
    },
    parseFeed: function(feed, options) {
      var handler = new module.exports.FeedHandler(options);
      new Parser(handler, options).end(feed);
      return handler.dom;
    },
    createDomStream: function(cb, options, elementCb) {
      var handler = new DomHandler(cb, options, elementCb);
      return new Parser(handler, options);
    },
    EVENTS: {
      attribute: 2,
      cdatastart: 0,
      cdataend: 0,
      text: 1,
      processinginstruction: 2,
      comment: 1,
      commentend: 0,
      closetag: 1,
      opentag: 2,
      opentagname: 1,
      error: 1,
      end: 0
    }
  };
})(require("process"));
