import { sumByState } from './solution';
//const sumByState = require ('./solution')

test('properly adds up active customers by state', ()=>{
    const sampleData1 = [
        {id: 25, firstName: "Stephanie", lastName: "York", address: "Flat 58\n 37 Williams Parade\nSouth Penny, SA, 0890", active: false}, 
        {id: 26, firstName: "Justin", lastName: "Villarreal", address: "94 Amanda Intersection\nAtkinston, SA, 2258", active: true}
    ]
    expect(sumByState(sampleData1)).toEqual((
       {
            ACT: 0,
            NSW: 0,
            NT: 0,
            QLD: 0,
            SA: 1,
            TAS: 0,
            VIC: 0,
            WA: 0,
          })
    )
})