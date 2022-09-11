function loader(source, sourceMap, data) {
    console.log('***************custom loader run*******************')

    return `
    /**
     * this is custom loader added.
     * 
    */
    ${JSON.stringify(source)}
    `
}

loader.pitch = function () {
    console.log("------------------- custom loader's pitch function run --------------------")
}

module.exports = loader