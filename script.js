/* задания с семинара
localStorage.setItem("name", "Rada");
localStorage.setItem("lastname", "Ibatova");
localStorage.setItem("email", "rada.bikreva@mail.ru");

localStorage.removeItem("name");

const email = localStorage.getItem("email");
console.log(email);


//localStorage.user = {name: 'Aleksey'};
localStorage.user = JSON.stringify({name: 'Rada'});

const user = JSON.parse(localStorage.user);
console.log(user);

localStorage.clear();

*/


const getAsyncAwaitData = async (api) => {
    const res = await fetch(api);
    const json = await res.json();
    return json;
};

const api = 'https://jsonplaceholder.typicode.com/users';


try {
    const newData = await getAsyncAwaitData(api);
    console.log(newData);
    const pictureBoxEl = document.querySelector('.cards-box');
    newData.forEach((element) => {
        const picture = `
        <div class="card">
            <h3>Пользователь ${element.id}</h3>
            <p class="name">Имя: ${element.name}</p>
            <p class="username">Ник: ${element.username}</p>
            <p class="email">Email: ${element.email}</p>
            <button class="btn__del">Удалить пользователя</button>
        </div>
        `

        pictureBoxEl.insertAdjacentHTML("beforeend", picture)
    })
    const deleteBtn = document.querySelectorAll('.btn__del');
        deleteBtn.forEach((button) => {
            button.addEventListener('click', () => {
                const product = button.closest('.card');       
                product.remove();
            })
        })
} catch (error) {
    console.error('Ошибка');
}