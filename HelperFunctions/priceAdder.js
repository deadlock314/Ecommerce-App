
export const priceAdder=(p1,p2,mode,count=1)=>{
  
const val=(mode=='sub')?-1:1;

   if(typeof(p2)=='undefined')
   return p1;
   
   else{
        const strP1=(typeof(p1)=='string')?p1:p1.toString();
        const strP2=(typeof(p2)=='string')?p2:p2.toString();
    const filterComma=(str)=>{
      return parseInt(str.replace(/,/g,''))
    }
    
    const priceStr=filterComma(strP1)+filterComma(strP2.substring(1))*val*count;
    return (priceStr >=0)?priceStr:0;

   }
}