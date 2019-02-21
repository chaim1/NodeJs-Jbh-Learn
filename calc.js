function mult  (x,y,callback){
    callback(null,x*y); 
}
function divide(x,y,callback){
    if( y === 0 ){
        return callback('divide by 0');
    }
    callback(null, x, y );
}
module.exports = {
    mult: mult,
    divide: divide
}


