import {prerender} from 'vike/prerender'

async function prerenderFunction() {
    try {
        await prerender()
    } catch (e) {
        console.log(e)
        return e
    }
}

prerenderFunction()
