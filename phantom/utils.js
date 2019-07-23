const func = (inner) => {
    const a = (b) => {
        const c = () => {

        }
        console.log('this is func -> funca')
    }
    inner(a)
    console.log('This is first console.log')

}

const inner = (a) => {
    a()
    console.log(`This is inner func`)
}




func(inner);


const prom = new Promise(executor)
const executor = (resolve, reject) => {
    
}

