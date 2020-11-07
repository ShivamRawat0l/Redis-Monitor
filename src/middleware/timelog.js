import cache from 'memory-cache';

let memCache = new cache.Cache();
let logTime = (req, res, next) => {
    let key = req.originalUrl || req.url;
    console.time(key);
    next();
}
let printTime = (url) => {
    let key =url;
    console.timeEnd(key);
}
export {
    logTime,
    printTime
}