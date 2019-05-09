jQuery(document).ready(function () {

    var apiBase = 'https://jsonplaceholder.typicode.com/photos';


    axios.get(apiBase).then(function (response) {

        $('.submit-btn').on('click', function () {

            var imageHTML = response.data.map(function (image) {

                var imgTag = '<img src=" ' + image.url + '" alt="' + image.title + '">' + '<p>' + image.title + '</p>';
                console.log(imgTag);
                return $('<div>').addClass('image').html(imgTag);
            });

            $('#tasks').html(imageHTML);

        });

    });
});

