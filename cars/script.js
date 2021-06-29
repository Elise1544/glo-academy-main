document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    const showCars = () => {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', './cars.json');
            request.setRequestHeader('Content-type', 'application/json');
            request.send();
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    resolve(request.responseText)
                    const data = JSON.parse(request.responseText);
                    data.cars.forEach(item => {
                        if (item.brand === select.value) {
                            const { brand, model, price } = item;
                            output.innerHTML = `Тачка ${brand} ${model} <br>
                                Цена: ${price}$`;
                        }
                    });
                } else {
                    reject(request.statusText)
                    output.innerHTML = `Произошла ошибка ${request.statusText}`;
                }
            });
        })
    }

    select.addEventListener('change', () => {
        showCars()
            .then()
            .catch(error => console.error(error));
    });

});