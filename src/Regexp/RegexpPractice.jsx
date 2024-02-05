import React from 'react'

const RegexpPractice = () => {


// const str=`1hi navya, hello Navya
// navya hi`
const str=`i am navya & i 2   navyakrishna`

const ans= str.match(/navya/gi)

// console.log(str.match(/\d/),'d')
// console.log(str.match(/\w/),'w')
// console.log(str.match(/\s/),'s')
// console.log(str.replace(/navya/ig,'$& krishna'),'inserts the whole match')
// console.log(str.replace(/navya/ig,'$$ krishna'),'replace the match')
// console.log(str.replace(/navya/ig,'$` krishna'),'replace befor match')
// console.log(str.replace(/navya/ig,"$' krishna"),'replace after match')
// console.log(str.replace(/navya/ig,'$` krishna'),'')
// console.log(str.match(/\b\W\w\b/ig),'boundaries')
// console.log(str.match(/\b\D\D\b/ig),'+++++')
// console.log(str.match(/\b\S\S\b/g),'sss')
// console.log(str.match(/\b\s\w\d\\b/gmi),'digit,space,word')
// console.log('navya @ 123.com'.match(/./g),'......')
// console.log('Navya@123.com'.match(/\w/g),'wwwww')
// console.log('navya@123.com'.match(/\d/g),'ddddddddd')
// console.log('navya @ 123.com'.match(/\s/g),'sssssssss')
// console.log('Navya @ 123.com'.match(/\S/g),'SSSSSSSSS')
// console.log('Navya@123.com'.match(/\D/g),'DDD')
// console.log('Navya@123.com'.match(/\W/g),'WWWWWWW')

// console.log('Navya@123.com'.match(/^\w/g),'DDD')
// console.log('Navya@123.com'.match(/\w$/g),'DDD')
// const regex=/^\w\w\w@\d\d\d$/
// console.log(regex.test('Nav@123'),'^^^')
// console.log('Navya@123.com'.match(/^\bNavya\b/g),'bbbbbbbbb')

// alert(ans.index)
// alert(ans.input)
// undefined

console.log('navya@123A@2'.match(/\w@\d/g))
console.log('navya@123A@2'.match( new RegExp( "\w@\d")))
const r= new RegExp("\\w\\@\\d")
console.log('navya@123A@2'.match(  r))
console.log('navya @123 A@2'.match( /[na]vy/gi))
console.log('navya @123 A@2'.match( /[a-z]vya/gi))
console.log('navya @123 A@2'.match( /[a-z]+/gi))
console.log('navya @123 A@2'.match( /[\w\W\d]+/gi))
console.log('navya @123 A@2'.match( /[\S]+/gi))
console.log('navya @123 A@2'.match( /[^\s\d\w]+/gi))
console.log('navya @123 A@2'.match( /[a-z]*vya+/gi))
console.log('nawxyzvya @123 A@2'.match( /[a-z^wxyz ]*vya/gi))
console.log('nawxyzvya @123 A@2'.match(/[[a-m]*^wxyzz ]vya/gi))
console.log("Breakfast at 09:00. Dinner at 21-30".match(/\d\d[:-]\d\d/g))
console.log('nawxyzvya @123 A@2'.match(/\w{5,}/g))
console.log('nawxyzvya @12356787 A@2'.match(/\w{1,5}/g))
console.log('nawxyzvya @123 A@2'.match(/\w+/g))
console.log('navya & navyaa @123 A@2'.match(/navy?a/g))
console.log('navya ka@123 A@2'.match(/\w\wa*/g))
console.log('nawxyzvya @123 A@2 '.match(/\w\@\d/g))
console.log('nawxyzvya @12.3 A@2'.match(/\d+\.\d+/g))
console.log('nawxyzvya @123 A@2'.match(/\D+/g))
console.log( "Hello!... How goes?.....".match(/\.{3,}/g) )
console.log('1234  5678'.match(/\w+?/g))
console.log('1234 " 5678'.match(/.+/g))
console.log('12"34" 5678'.match(/"\d+?"/g))
console.log('12"34" 5678'.match(/"[^"]+/g))
console.log('12"34" 5678'.match(/(\d)*/g))
console.log('navya @123 A@2'.match(/([a-z])+/g))
console.log('navyna @123 A@2'.match(/(\w+ @\d+)+/gi))
console.log('navyna @123 A@2'.match(/[\w+ @\d+]+/gi))
console.log('navyna @123 A@2'.match(/([a-z]*@)+\d/gi))
console.log('navyna @123 A@2'.match(/(\w+)/gi))
console.log('navyna @123 A@2'.match(/[\w]+/gi))
const ymd ='2023-09-22, 2022-05-25'
console.log(ymd.match(/(?<date>[\d]{2})$/g))
console.log(ymd.match(/(?:[\d]{4})-\d/g))
const regexp= /([\w]{2}ab$)/gi
console.log(regexp.test('01:32:54:67:89'))
console.log('navya krishna a'.replace(/(\w+) (\w+) (\w+)/,'$2 $1 $3'))
console.log(`navya "krishna's" a`.match(/"(.*)+"/g))
console.log(`navya "krishna's" a`.match(/(?<name>["])(.*?)\k<name>/))
console.log("qwertyauiopasdfghjklzxcvbnm".match(/n|a|v|y(u)/g))
console.log("Java JavaScript PHP C++ C".match(/java(script)?|php|c(\+\+)?/gi)); 
console.log("Java JavaScript PHP C++ C".match(/(java(script)*|php|c(\+\+)*)/gi)); 





  return (
    <div>
     <h2> RegexpPractice</h2>
      
      <p>A regular expression  consists of a pattern and optional flags</p>
      <p>Regular expressions are patterns that provide a powerful way to search and replace in text.</p>
      <p>Regular expressions may have flags that affect the search. 6 were used in javascript.</p>
        result = {ans}
    </div>
  )
}

export default RegexpPractice
