(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{358:function(t,e,a){"use strict";a.r(e);var s=a(42),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ipld-in-the-interplanetary-ecosystem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipld-in-the-interplanetary-ecosystem"}},[t._v("#")]),t._v(" IPLD in the Interplanetary Ecosystem")]),t._v(" "),a("p",[t._v('IPLD is a part of the "Interplanetary Ecosystem".\nYou can it without any of the other projects in that ecosystem, but it may be useful to understand this history;\nand if you come to IPLD via one of the other Interplanetary projects (such as IPFS),\nthis document can help you understand the relationship and the distinctions.')]),t._v(" "),a("h2",{attrs:{id:"ipld"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipld"}},[t._v("#")]),t._v(" IPLD")]),t._v(" "),a("p",[t._v('IPLD is short for "InterPlanetary Linked Data".')]),t._v(" "),a("p",[t._v("As the name suggests, IPLD is all about "),a("em",[t._v("data")]),t._v(":\ndefining data structures, defining data serialization,\ndefining ways we can expect to traverse data,\nand defining ways we can link data.")]),t._v(" "),a("p",[t._v("IPLD is primarily a set of specs and a series of libraries:\nit's meant to help others write decentralized applications,\nand is not an application itself.")]),t._v(" "),a("p",[t._v("See IPFS for an application that uses IPLD.")]),t._v(" "),a("p",[t._v("See libp2p for libraries that can be used to transport IPLD data over networks.")]),t._v(" "),a("h2",{attrs:{id:"ipfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipfs"}},[t._v("#")]),t._v(" IPFS")]),t._v(" "),a("p",[t._v("IPFS is best understood as an application that glues together:")]),t._v(" "),a("ul",[a("li",[t._v("IPLD, to describe data,")]),t._v(" "),a("li",[t._v("libp2p, to transmit data around,")]),t._v(" "),a("li",[t._v("some concrete implementations of data storage,")]),t._v(" "),a("li",[t._v('and some fun features that make a concept of "files" and "directories" readily accessible to users of IPFS.')])]),t._v(" "),a("p",[t._v('(There\'s also a bunch of neat features like a web interface that accesses the abstraction of "files",\nvarious APIs, etc -- but check out the IPFS documentation for details of this, not ours 😉)')]),t._v(" "),a("p",[t._v("In short: IPFS depends on IPLD.")]),t._v(" "),a("p",[t._v("IPLD does not depend on IPFS.")]),t._v(" "),a("h3",{attrs:{id:"history"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history"}},[t._v("#")]),t._v(" history")]),t._v(" "),a("p",[t._v("The IPFS project is the first project of the Interplanetary ecosystem.\nMany early ideas emerged in this project... and were only extracted sometime later!")]),t._v(" "),a("p",[t._v("IPLD is one such idea that incubated in the IPFS project, and was only extracted later.\n(libp2p is another project with a similar origin story!)")]),t._v(" "),a("p",[t._v("You may see stretch marks around this for some time:\ncomments in old code which, read today, seem ambiguous about the separations; etcetera.")]),t._v(" "),a("p",[t._v("We're working to increase the clarity of roles and responsibilities of all of these projects over time.\nNewly written work in IPLD will generally not refer to IPFS at all;\nand you can definitely count on it to not have direct dependencies on IPFS code.\nWe regard IPFS as just one consumer of the IPLD libraries.")]),t._v(" "),a("h2",{attrs:{id:"libp2p"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#libp2p"}},[t._v("#")]),t._v(" libp2p")]),t._v(" "),a("p",[t._v("libp2p is a project which handles networking and transport of data.")]),t._v(" "),a("p",[t._v('The features of libp2p of the features range from\nthe basic (simple streaming transport APIs)\nto the useful (NAT traversal, "hole punching", protocol negociations, etc)\nto the neat (pubkey-based persistent network peer identity toolkits)\nto the awesome (DHTs and other advanced network routing and distributed storage components).')]),t._v(" "),a("p",[t._v("libp2p is developed by some of the same people as IPLD, IPFS, and the other Interplanetary projects.\nLike IPLD, libp2p is a project that historically emerged from IPFS when it became apparent that it would be widely reusable;\nnow, many other projects also use libp2p as a networking abstraction, or lean on its routing and storage components.")]),t._v(" "),a("p",[t._v("libp2p doesn't have any explicit dependency on IPLD, nor vice-versa.\nWe do design them to work well together, though!\nlibp2p is a great thing to check out if you want to build a distributed application with IPLD, and you need to handle networking.")]),t._v(" "),a("p",[t._v("libp2p uses several of the Multiformats specifications in describing their data and their protocol negotiation systems.\n(However, they're often different subsets of the Multiformats than those that IPLD is most concerned with.)")]),t._v(" "),a("h2",{attrs:{id:"cids"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cids"}},[t._v("#")]),t._v(" CIDs")]),t._v(" "),a("p",[t._v("CIDs -- "),a("strong",[t._v("C")]),t._v("ontent "),a("strong",[t._v("ID")]),t._v("entifiers -- are a specification for identifying content based on cryptographic hashing.\nSee wikipedia on "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Content-addressable_storage#Content-addressed_vs._location-addressed",target:"_blank",rel:"noopener noreferrer"}},[t._v("Content Addressing"),a("OutboundLink")],1),t._v(" for a general introduction to this concept.")]),t._v(" "),a("p",[t._v('We use CIDs for "linking" in IPLD.  "Linking" in IPLD just has the semantic requirement of using immutable identifiers;\nin practice, we satisfy this aim by using CIDs for links.')]),t._v(" "),a("p",[t._v("See also "),a("a",{attrs:{href:"https://docs.ipfs.io/concepts/content-addressing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CIDs in the IPFS documentation"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"multiformats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiformats"}},[t._v("#")]),t._v(" Multiformats")]),t._v(" "),a("h3",{attrs:{id:"multihash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multihash"}},[t._v("#")]),t._v(" multihash")]),t._v(" "),a("p",[t._v("Multihash indicators are a part of CIDs.  Therefore, you may see multihash in IPLD through linking, which uses CIDs.")]),t._v(" "),a("h3",{attrs:{id:"multicodecs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multicodecs"}},[t._v("#")]),t._v(" multicodecs")]),t._v(" "),a("p",[t._v("Multicodec indicators are a part of CIDs.  Therefore, you may see multicodec in IPLD through linking, which uses CIDs.")]),t._v(" "),a("h3",{attrs:{id:"multiaddrs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiaddrs"}},[t._v("#")]),t._v(" multiaddrs")]),t._v(" "),a("p",[t._v("Multiaddrs are one of the multiformats that IPLD has the "),a("em",[t._v("least")]),t._v(" to do with.")]),t._v(" "),a("p",[t._v("Multiaddrs are used to describe networking locations in libp2p.")]),t._v(" "),a("p",[t._v("IPLD is concerned with data formats, and not with networking;\ntherefore, it does not have direct interactions with Multiaddrs.")]),t._v(" "),a("h2",{attrs:{id:"other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[t._v("#")]),t._v(" Other")]),t._v(" "),a("h3",{attrs:{id:"graphsync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graphsync"}},[t._v("#")]),t._v(" graphsync")]),t._v(" "),a("p",[t._v("Graphsync is the name of a protocol and set of libraries for exchanging blocks of data containing IPLD data\n(and it uses IPLD Selectors to allow a high degree of user power for saying what to exchange).")]),t._v(" "),a("p",[t._v("IPLD doesn't depend on graphsync, but they play together very nicely.")]),t._v(" "),a("p",[t._v("Graphsync has a comparable purpose to bitswap, although it is more recently created.")]),t._v(" "),a("h3",{attrs:{id:"bitswap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitswap"}},[t._v("#")]),t._v(" bitswap")]),t._v(" "),a("p",[t._v("Bitswap is the name of another protocol and set of libraries for exchanging blocks of data containing IPLD data.")]),t._v(" "),a("p",[t._v("IPLD doesn't depend on bitswap, but bitswap is often used to exchange IPLD data.")]),t._v(" "),a("p",[t._v("Bitswap is a long-standing part of IPFS.  It's also comparable in purpose to Graphsync.")])])}),[],!1,null,null,null);e.default=i.exports}}]);