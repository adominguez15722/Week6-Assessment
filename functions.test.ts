const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return not a number', () => {
        let shuffled = shuffleArray([1, 2, 3])
        expect(shuffled).not.toBeNaN()
        
    }),

    
    test('not return the same input in the same order', () => {
        let newArr = [1, 2, 3]
        
        expect(shuffleArray([1, 2, 3])).not.toBe(newArr)
    })
    
})
// expect((shuffleArray([1, 2, 3].length).toBe(2))}