fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        //console.log(`Quantidade de itens: ${json.length}`)
    

        //O forEach é um laço que paça por todo o array mas não altera
        json.forEach(element => {
            //console.log(`Title: ${element.title}`);
        });

        json.forEach(element => {
                    if (element.userId === 10) {
                        console.log(element.title);
                    }
                
            });

    })