function* core(seed){
    let next = seed
    while(1) {
        next = next * 1103515245 + 12345 
        next = (next /65536) % 32768
        yield next
    }
}




export const syncRandom = seed => {
    const generator = core(seed) 
    return () => generator.next().value
}