var pinyin = require("pinyin");

hexo.extend.tag.register('ruby', function(args) {

  var splited = args.join(' ').split('|');

  var origin = splited[0].trim();

  var ruby = origin;
  if (splited.length > 1) {
  	ruby = splited[1].trim();
  }

  var pinyinic_ruby = [].concat.apply([],pinyin(ruby, {
    segment: true
  }));
  
  var origins = origin.split(" ");
  var rubys = pinyinic_ruby.toString().split(" ");

  var ruby_results = new Array();
  for (i=0; i < origins.length; i++) {
    ruby_results.push("<ruby>" + origins[i].replace(/\*\*(.*)\*\*/,"<strong>$1</strong>") + "<rp> (</rp><rt>" + rubys[i].replace(/,/g," ") + "</rt><rp>) </rp></ruby>");
  }
  return ruby_results.join("");
});
