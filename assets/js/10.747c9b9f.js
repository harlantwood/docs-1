(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{357:function(e,t,a){"use strict";a.r(t);var i=a(42),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"numeric-sizes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#numeric-sizes"}},[e._v("#")]),e._v(" Numeric sizes")]),e._v(" "),a("h2",{attrs:{id:"integers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integers"}},[e._v("#")]),e._v(" Integers")]),e._v(" "),a("p",[e._v("In principle, we consider the range of integers to be infinite.\nIn practice, many libraries may choose to implement things in such a way that numbers may have limited sizes.")]),e._v(" "),a("p",[e._v("We require that IPLD libraries support integers up to at least size 2^53 in order to be considered a full-featured core-compliant IPLD library.")]),e._v(" "),a("p",[e._v("We love IPLD libraries that support arbitrarily large numbers.  But 2^53 is the critical minimum.")]),e._v(" "),a("h3",{attrs:{id:"why"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[e._v("#")]),e._v(" Why?")]),e._v(" "),a("p",[e._v("Because.")]),e._v(" "),a("p",[e._v("But let's ask more detailed questions, and answer those:")]),e._v(" "),a("h3",{attrs:{id:"why-have-size-limits-at-all"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-have-size-limits-at-all"}},[e._v("#")]),e._v(" Why have size limits at all?")]),e._v(" "),a("p",[e._v("Most programming languages and compilers already have size limits when working with numbers.")]),e._v(" "),a("p",[e._v('Being in denial about this when we describe IPLD is unconstructive:\nIt\'s important for us to be able to provide concrete recommendations about what we expect from IPLD libraries --\nand if that guidance is "always use a bigint type, regardless of whether you language and ecosystem provides a usable and widely adopted one",\nthen that guidance will be frequently ignored, regardless of how principled and well-intentioned it may be.')]),e._v(" "),a("h3",{attrs:{id:"why-2-53"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-2-53"}},[e._v("#")]),e._v(" Why 2^53?")]),e._v(" "),a("p",[e._v("This 2^53 number is chosen because it's reasonably high (e.g., you can use it for timestamps),\nand also because it's reasonably practical (it happens to be the number above which javascript's handling of numbers gets Interesting).")]),e._v(" "),a("p",[a("strong",[e._v("Above this number, it's likely that you'll want to consider application-level and language-level numeric compatibility issues which are bigger in scope than IPLD "),a("em",[e._v("anyway")]),e._v(".")])]),e._v(" "),a("p",[e._v('32-bit signed, 32-bit unsigned, 64-bit signed, and 64-bit unsigned integers are also all common numeric sizes to consider,\nbecause those are often the well-supported numeric types in programming languages.\nWhen writing a new IPLD library, we suggest you pick "64-bit signed" if these are your options.')]),e._v(" "),a("p",[e._v("(32-bit numbers are definitely small enough to get you into trouble;\nthe "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Year_2038_problem",target:"_blank",rel:"noopener noreferrer"}},[e._v("2038 problem"),a("OutboundLink")],1),e._v(" is coming up "),a("em",[e._v("very")]),e._v(" soon now.\nBy contrast, a 53-bit integer used to represent a second-granularity timestamp should get you to about the year 285,618,384.\nSo... it should suffice.)")]),e._v(" "),a("h3",{attrs:{id:"what-if-i-want-to-write-an-ipld-library-that-supports-arbitrarily-large-ints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-if-i-want-to-write-an-ipld-library-that-supports-arbitrarily-large-ints"}},[e._v("#")]),e._v(" What if I want to write an IPLD library that supports arbitrarily large ints?")]),e._v(" "),a("p",[a("strong",[e._v("Go for it.")])]),e._v(" "),a("p",[e._v('If it is possible to support arbitrary "BigInt" in your library, that\'s fantastic.  Do it.')]),e._v(" "),a("p",[e._v("We just don't "),a("em",[e._v("mandate")]),e._v(" this as part of the minimum core feature checklist for IPLD libraries,\nbecause we understand that it's impractical in some programming languages,\neither because the \"BigInt\" types have different performance characteristics,\nor aren't widely agreed upon in the community,\nor are otherwise simply syntactically or ergonomically clunky to handle, etc.\nBut if you see it as easy to support: "),a("em",[e._v("go for it")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"what-if-i-ship-an-ipld-library-that-only-supports-2-47"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-if-i-ship-an-ipld-library-that-only-supports-2-47"}},[e._v("#")]),e._v(" What if I ship an IPLD library that only supports 2^47?")]),e._v(" "),a("p",[e._v("(... or some other completely arbitrary number.)")]),e._v(" "),a("p",[e._v("Fine.")]),e._v(" "),a("p",[e._v("Please be very clear about that in your documentation.")]),e._v(" "),a("p",[e._v("We won't list your library in our own docs as being a full-featured core-compliant IPLD library.")]),e._v(" "),a("p",[e._v("But go nuts; nobody's going to stop you.\nYour library may run into hard times processing data that's produced by other IPLD libraries, but that's a choice you're free to make.")]),e._v(" "),a("h3",{attrs:{id:"what-if-my-ipld-library-encounters-serialized-numbers-that-are-bigger-than-it-supports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-if-my-ipld-library-encounters-serialized-numbers-that-are-bigger-than-it-supports"}},[e._v("#")]),e._v(" What if my IPLD library encounters serialized numbers that are bigger than it supports?")]),e._v(" "),a("p",[e._v("Then it must error.  Clearly, one would hope.")]),e._v(" "),a("p",[e._v("IPLD libraries must not quietly round down to their max (or up to their min) supported values -- they must error.")]),e._v(" "),a("p",[e._v("Fortunately, this rule gets us pretty far, pretty easily -- because we don't "),a("em",[e._v("do math")]),e._v(" in IPLD,\nthese errors can really only arise during deserialization,\nand should fit naturally into the error reporting flow that deserialization already naturally needs.")]),e._v(" "),a("h2",{attrs:{id:"floating-point"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#floating-point"}},[e._v("#")]),e._v(" Floating point")]),e._v(" "),a("p",[e._v("// a lot of text can go here.")]),e._v(" "),a("p",[e._v('// it would be nice if at least some of it can talk about the inherent issues of precision ambiguity in floating point,\n// and how fixed point is actually an important consideration in many sufficiently scientific applications.\n// discussion of fractions and how floating point approximations of them are necessarily wrong would also be appropriate.\n// in general it would be great if this document can remind people that floats are rarely "the answer", and are certainly not the only answer.')])])}),[],!1,null,null,null);t.default=r.exports}}]);