module.exports = (url) => {

    const urlPaths = url.split('/')
        .filter(v => v !== '' && v !== undefined)
        .map(value => value);
        
    return urlPaths[urlPaths.length - 1];
}