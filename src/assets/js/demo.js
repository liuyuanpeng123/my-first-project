// 实现如下效果
const obj1 = {
  a: 100,
  b: {
    x: 100,
    y: 200
  }
}
const obj2 = {
  a: 100,
  b: {
    x: 100,
    y: 200
  }
}

// isEqual(obj1, obj2) === true

//判断对象是否为数组
function isObject(obj){
  return typeof obj === 'object' || obj !== null
}
//全相等
function isEqual(obj1,obj2){
  if(!isObject(obj1) || !isObject(obj2)){
    return obj1 === obj2
  }
  if(obj1 === obj2){
    return true
  }
  //两个都是对象或者数组，而且不相等
  //1、先出去obj1和obj2的keys，比较个数
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)
  if(obj1Keys.length  !== obj2Keys.length){
    return false
  }

  //2、以obj1为基准，和obj2一次递归比较
  for(let key in obj1){
    const res = isEqual(obj1[key],obj2[key])
      if(!res){
        return false
      }
    
  }
  return true
}
const res = isEqual(obj1, obj2) 
console.log(res)

//防抖

function debounce(fn,dalay = 500){
  let timer = null

  return function(){
    if(timer){
      clearTimeout(timer)
    }
  
    timer = setTimeout( ()=>{
      fn.apply(this,arguments)
      timer = null
    },dalay)
  }
  

}
//节流
function jieliu (fn,dalay=1000){
  let timer = null
  return function (){
    if(!timer){
      timer = setTimeout(()=>{
        fn.apply(this,arguments)
        timer =null
      },dalay)
    }
  }
}
//时间戳版本的节流
function jieliu_date (fn,dalay=1000){
  let lastTime = 0
  return function(){
    let now = new date()
    if(now - lastTime >= dalay){
      fn.apply(this,arguments)
      lastTime = now
    }
  }
}

//手写instanceof
function myInstanceof(left,right){
  if(typeof left  !== 'object' || left === null) return false
  if(typeof right !== 'function') throw new TypeError('不是构造函数')
  
  let proto = Object.getPrototypeOf(left)
  let targetPrototype = right.prototype;

  while(proto !== null){
    if(proto === targetPrototype) return true
    proto = Object.getPrototypeOf(proto)
  }

  return false
}
console.log(myInstanceof([],Array))