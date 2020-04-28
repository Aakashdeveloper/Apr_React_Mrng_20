import reducer from '../reducers';

describe('Reducer Testing', () => {
    it('Should return inital state',() => {
        expect(JSON.stringify(reducer(undefined,{}))).toEqual(JSON.stringify({
            articles:{},
            gallery:{}
        }))
    })

    it('Return array on Action',() => {
        let state ={
            articles:[],
            gallery:[]
        }

        state = reducer(state,{action:'GET_ARTICLE'})

        expect(state).toEqual({
            articles:[],
            gallery:[]
        })
    }) 
})