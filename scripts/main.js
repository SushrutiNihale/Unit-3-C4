async function apiCall(url) {


    //add api call logic here
    let res = await fetch(url);
    let data = await res.json();
    return data;

}


function appendArticles(data) {

    //add append logic here
    let i = 0;
    data.forEach((el) => {
        let div = document.createElement('div');
        let image = document.createElement('img');
        let title = document.createElement('p');

        image.src = el.urlToImage;
        title.textContent = el.title;

        div.append(image,title);
        div.setAttribute('id',i);
        div.setAttribute('class','article');
        document.getElementById('main').append(div);
        i++;
    })

}

export { apiCall, appendArticles }