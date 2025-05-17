// import { hsciistr } from "../../src/hsciistr"
const hsciistrmodule = require("../../src/hsciistr") ;
let hsciistrobz = new hsciistrmodule.hsciistr();
// hsciistrobz.istr = 'xjq fix xiomi ऋषि' ;
// let ing4str = hsciistrobz.duztr().istr ;
// console.log(`testscriptjs ing4str is  ${ing4str}`); 
// let gurmukhistr = hsciistrobz.ostrdict.gurmukhi ;
// console.log(`testscriptjs gurmukhistr is  ${gurmukhistr}`); 
// let tresult1 = hsciistrobz.settostr("inglish").setistr("ऋषि").duztr().istr ;
// console.log(`tresult1.istr is  ${tresult1}`); 

// describe("test1wrd function", () => {
//   it("test1wrd", () => {
//     expect(hsciistrobz.settostr("inglish").setistr("ऋषि").duztr().istr).toBe("risi")
//   })
// })
describe("test1wrd_hindi", () => {
  it("test1wrd_hindi", () => {
    expect(hsciistrobz.settostr(hsciistrmodule.hsciistr.tu_dikt.hindi).setistr("ऋषि").duztr().ostrdict.hindi).toBe("रiसi")
  })
})
// describe("test_line1_hindi", () => {
//   it("test_line1_hindi", () => {
//     expect(hsciistrobz.settostr("inglish").setistr("क्षत्रिय हिंदू समाज के चार वर्णों में से एक वर्ण है, जो योद्धा और शासक वर्ग के लोगों को दर्शाता है।")
//     .duztr().ostrdict.hindi).toBe("risi")
//   })
// })
// describe("test_line1_hindi", () => {
//   it("test_line1_hindi", () => {
//     expect(hsciistrobz.settostr("inglish").setistr("क्षत्रिय हिंदू समाज के चार वर्णों में से एक वर्ण है, जो योद्धा और शासक वर्ग के लोगों को दर्शाता है।")
//     .duztr().ostrdict.hindi).toBe("risi")
//   })
// })