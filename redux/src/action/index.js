export function movieList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1,name:'Avenger'},
            {id:2,name:'DeathRace'},
            {id:3,name:'Madmax'}
        ]
    }
}