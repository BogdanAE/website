!(() => {
    $.ajax({
        type: "GET",
        url: '/testimonials',
        dataType: 'json',
        success: function (data) {
            for (let i = 0; i < data.length; i++) {
                var div = document.createElement('div');
                document.getElementById("testiPage").appendChild(div);
                div.setAttribute('id', 'divv');
                var figure = document.createElement('figure');
                div.appendChild(figure);
                var img = document.createElement('img');
                img.src = data[i].avatar;
                img.setAttribute('height', '150px');
                img.setAttribute('border', '2px');
                figure.appendChild(img);
                var figcaption = document.createElement('figcaption');
                figcaption.innerHTML = data[i].name;
                figure.appendChild(figcaption);
                var title = document.createElement('h4');
                title.innerHTML = 'Titlu:  <u>' + data[i].title + '</u>';
                div.appendChild(title);
                var txt = document.createElement('p');
                txt.innerHTML = '<b>A spus:</b>  <q>' + data[i].message + '</q>';
                div.appendChild(txt);
            }
            for (let i = 1; i <= 3; i++) {
                var div = document.createElement('div');
                document.getElementById('text' + i).appendChild(div);
                div.setAttribute('id','testiDiv');
                var figure = document.createElement('figure');
                div.appendChild(figure);
                var img = document.createElement('img');
                img.src = data[data.length - i].avatar;
                img.setAttribute('height', '150px');
                img.setAttribute('border', '2px');
                figure.appendChild(img);
                var figcaption = document.createElement('figcaption');
                figcaption.innerHTML = data[data.length - i].name;
                figure.appendChild(figcaption);
                var title = document.createElement('h4');
                title.innerHTML = 'Titlu:  <u>' + data[data.length - i].title + '</u>';
                div.appendChild(title);
                var txt = document.createElement('p');
                txt.innerHTML = '<b>A spus:</b>  <q>' + data[data.length - i].message + '</q>';
                div.appendChild(txt);
            }
            document.getElementById('loaded').style.display = 'block';
            document.getElementById('loading').style.display = 'none';
        }
    });
    $.ajax({
        type: "GET",
        url: "/images",
        dataType: 'json',
        success: (data) => {
            console.log(data);
            for (let i = 0; i < data.length - 1; i++) {
                document.getElementById('img' + (i + 1)).src = data[i].pathIMG;
            }
        }
    });
})();




