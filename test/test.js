"use strict";

const assert = require("assert");
const strftime = require("strftime");
const sprintfjs = require("sprintf-js");
const sprintf = sprintfjs.sprintf;
const vsprintf = sprintfjs.vsprintf;

require("../index").bind(sprintf,strftime.timezone(0).localizeByIdentifier("en_US"));
require("../index").bind(sprintf,strftime.timezone("+0300").localizeByIdentifier("ru_RU"),"L");

const date = new Date(Date.UTC(2222,11,22,0,33,44,555));

describe("sprintf-ext-strftime", function() 
{
   it("should return correctly formatted UTC date/time", function() 
   {
      assert.equal("Now [December 22, 2222 00:33:44]", sprintf("Now [%[%B %d, %Y %H:%M:%S]D]", date));
      assert.equal("Now 2222-12-22 00:33:44",          sprintf("Now %[%F %T]D", date));
   });

   it("should return correctly formatted localized date/time", function() 
   {
      assert.equal("Now [Декабрь 22, 2222 03:33:44]",  sprintf("Now [%[%B %d, %Y %H:%M:%S]L]", date));
      assert.equal("Now 2222-12-22 03:33:44",          sprintf("Now %[%F %T]L", date));
   });

});

