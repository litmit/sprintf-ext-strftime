"use strict";

function SprintfExt(sprintf,strftime,specifier)
{
   this.sprintf = sprintf;
   this.strftime = strftime;
   this.specifier = specifier;
}

SprintfExt.prototype.format = function(options,arg) 
{
   return this.strftime(options.format,arg);
};

function bind(sprintf,strftime,specifier)
{
   specifier = specifier || "D";
   var ext = new SprintfExt(sprintf,strftime,specifier);
   sprintf.register_extension(specifier,ext.format.bind(ext));
}

exports.bind = bind;
