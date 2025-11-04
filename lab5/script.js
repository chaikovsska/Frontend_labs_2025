//Завдання 1
const form = document.getElementById('infoForm');
const fields = {
    pib: { regex: /^[А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІ]\.[А-ЯІ]\.$/, error: 'Невірний формат ПІБ. Приклад: Чайковська С.І.' },
    group: { regex: /^[А-ЯІЇЄҐ]{2}-\d{2}$/, error: 'Невірний формат групи. Приклад: ІА-32' },
    faculty: { regex: /^[А-ЯІЇЄҐ]{4}$/, error: 'Факультет має містити 4 великі літери (напр.: ФІОТ)' },
    address: { regex: /^м\.\s?[А-ЯІЇЄҐ][а-яіїєґ']+$/, error: 'Невірна адреса. Приклад: м. Київ' },
    telegram: { regex: /^@[A-Za-z_][A-Za-z0-9_]{2,}$/, error: 'Telegram починається з @ та містить літери/цифри/_.' }
};

document.getElementById('submitBtn').addEventListener('click', () => {
    let allValid = true;
    for (let id in fields) {
        const input = document.getElementById(id);
        const errorDiv = document.getElementById(id + 'Error');
        if (!fields[id].regex.test(input.value.trim())) {
            input.classList.add('error');
            errorDiv.textContent = fields[id].error;
            allValid = false;
        } else {
            input.classList.remove('error');
            errorDiv.textContent = '';
        }
    }

    if (allValid) {
        let resultWindow = window.open("", "Введені дані", "width=400,height=300");
        let html = `<h3>Дані форми</h3><table>`;
        html += `<tr><td><b>ПІБ</b></td><td>${document.getElementById('pib').value}</td></tr>`;
        html += `<tr><td><b>Група</b></td><td>${document.getElementById('group').value}</td></tr>`;
        html += `<tr><td><b>Факультет</b></td><td>${document.getElementById('faculty').value}</td></tr>`;
        html += `<tr><td><b>Адреса</b></td><td>${document.getElementById('address').value}</td></tr>`;
        html += `<tr><td><b>Telegram</b></td><td>${document.getElementById('telegram').value}</td></tr>`;
        html += `</table><p>✔ Валідацію пройдено успішно.</p>`;
        resultWindow.document.write(html);
    } else {
        alert("Будь ласка, виправте помилки перед підтвердженням!");
    }
});

//Завдання 2
const table = document.getElementById('myTable');
const variant = 15; // клітинка №15
const colorPicker = document.getElementById('colorPicker');

let count = 1;
for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement('td');
        cell.textContent = count;

        if (count === variant) {
            let clickCount = 0;
            let clickTimer;

            cell.addEventListener('mouseenter', () => {
                cell.style.backgroundColor = getRandomColor();
            });

            cell.addEventListener('click', () => {
                clickCount++;
                clearTimeout(clickTimer);
                clickTimer = setTimeout(() => {
                    if (clickCount === 1) {
                        cell.style.backgroundColor = colorPicker.value;
                    }
                    clickCount = 0;
                }, 300);
            });

            cell.addEventListener('dblclick', () => {
                clearTimeout(clickTimer);
                clickCount = 0;
                const allCells = table.querySelectorAll('td');
                allCells.forEach(td => {
                    if (td !== cell) {
                        td.style.backgroundColor = colorPicker.value;
                    }
                });
            });
        }

        row.appendChild(cell);
        count++;
    }
    table.appendChild(row);
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
