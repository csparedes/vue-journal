export default ()=>({
    isLoading: true,
    entries:[
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Soy un texto :v',
            picture: null
        },
        {
            id: new Date().getTime()+1,
            date: new Date().toDateString(),
            text: 'Soy un texto :v',
            picture: null
        },
        {
            id: new Date().getTime()+2,
            date: new Date().toDateString(),
            text: 'Soy un texto :v',
            picture: null
        },
    ],
})