(function(){
function newCls(options) {

    return Function(`return class ${options.name ?? ''} {};`)()
}
function createConstructor(args) {
    return `constructor(...args) {
    ${args.toString}
}`
}
function createGetter() {

}
function createSetter() {

}
function createPrivateProperty(name) { return `this.#${name}` }
function createProtectedProperty() { return `this._${name}` }
function createStaticProperty() { return `static ${name}` }
function createProperty(name, value, isStatic isAsync, isGenerator, accessable) { return `this.#${name}` }
function createPrivateMethod(name, args, body) { return `#${name}(${args}){${body}}` }
function createProtectedMethod(name, args, body) { return `_${name}(${args}){${body}}` }
function createPublicMethod(name, args, body) { return `${name}(${args}){${body}}` }
function createStaticMethod(name, args, body) { return `static ${name}(${args}){${body}}` }
function createMethodName(name, isStatic isAsync, isGenerator, accessable) {
    const modifiers = []
    if (isStatic) modifiers.push('static')
    if (isAsync) modifiers.push('async')
    if (['#','private'].some(v=>v===accessable)) name = '#' + name
    else if (['_','protected'].some(v=>v===accessable)) name = '_' + name
    if (isGenerator) name = '*' + name
    return [...modifiers, name].join(' ')
}

}
window.newCls = newCls
})

