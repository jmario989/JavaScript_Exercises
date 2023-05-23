function zaSvaki(niz, callback){
    for(let i = 0; i < niz.length; i++){
        callback(niz[i]);
    }
}

module.exports = zaSvaki;