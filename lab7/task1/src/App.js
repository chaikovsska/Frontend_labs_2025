import React, { Component, useState } from 'react';
import './App.css'; 
import cityImage from './assets/city-barcelona.jpg';

// ---------------------------------------------------------
// 1. Компонент HEADER
// ---------------------------------------------------------
function Header() {
  return (
    <header>
      <h2>Чайковська Софія Володимирівна</h2>
    </header>
  );
}

// ---------------------------------------------------------
// 2. Компонент CONTENT (ОНОВЛЕНА ЛОГІКА)
// ---------------------------------------------------------
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Тепер зберігаємо не true/false, а назву класу ('color1', 'color2' або '')
      cls1: '', 
      cls2: ''
    };
  }

  // Логіка для 1-го елемента
  handleElement1Click = () => {
    const { cls1, cls2 } = this.state;
    const myColor = 'color1'; // Рідний колір цього елемента

    // 1. Якщо елемент ще не зафарбований -> фарбуємо
    if (cls1 === '') {
      this.setState({ cls1: myColor });
    } 
    // 2. Якщо вже зафарбований
    else {
      // Якщо сусід теж зафарбований -> МІНЯЄМОСЯ кольорами
      if (cls2 !== '') {
        this.setState({
          cls1: cls2, // Я беру колір сусіда
          cls2: cls1  // Сусіду віддаю свій
        });
      } 
      // Якщо сусід вимкнений -> просто вимикаюсь
      else {
        this.setState({ cls1: '' });
      }
    }
  };

  // Логіка для 2-го елемента (аналогічна)
  handleElement2Click = () => {
    const { cls1, cls2 } = this.state;
    const myColor = 'color2'; // Рідний колір цього елемента

    if (cls2 === '') {
      this.setState({ cls2: myColor });
    } else {
      // Якщо обидва активні -> міняємося
      if (cls1 !== '') {
        this.setState({
          cls1: cls2,
          cls2: cls1
        });
      } else {
        this.setState({ cls2: '' });
      }
    }
  };

  render() {
    return (
      <main>
        <p>Дата народження: 15.12.2005, Місто: Запоріжжя</p>
        <p>
          Освіта:<br />
          Запорізька гімназія №6;<br />
          НТУУ "КПІ", м. Київ
        </p>

        <h3>Хобі</h3>
        <ul>
          {/* Елемент №1 */}
          <li 
            onClick={this.handleElement1Click}
            className={this.state.cls1} // Підставляємо клас зі стейту
            style={{cursor: 'pointer'}}
          >
            Читання
          </li>

          {/* Елемент №2 */}
          <li 
            onClick={this.handleElement2Click}
            className={this.state.cls2} // Підставляємо клас зі стейту
            style={{cursor: 'pointer'}}
          >
            Подорожі
          </li>
          
          <li>Кулінарія</li>
        </ul>

        <h3>Улюблені книги</h3>
        <ol>
          <li>Пауло Коельйо — «Алхімік»</li>
          <li>Агата Крісті — «Вбивство в “Східному експресі”»</li>
          <li>Олександр Дюма — «Граф Монте-Крісто»</li>
        </ol>

        <h3>Моє улюблене місто — Барселона</h3>
        <p>
          Барселона — це місто, яке поєднує історію та сучасність. Воно відоме своєю архітектурою Антоніо Ґауді, 
          зокрема храмом Саграда Фамілія та парком Ґуель. Тут відчувається особлива атмосфера середземноморського узбережжя.
        </p>
      </main>
    );
  }
}

// ---------------------------------------------------------
// 3. Компонент IMAGE (Функціональний)
// Відповідає за галерею та кнопки керування (Завдання 2)
// ---------------------------------------------------------
function Image() {
  // Початкове статичне зображення (якщо потрібно)
  // Але завдання просить додавати нові. 
  
  // Стан для збереження масиву доданих зображень
  const [images, setImages] = useState([]);
  
  // Константи
  const defaultWidth = 400;
  const step = 50;
  const minWidth = 50;

  // 1. Додати зображення
  const addImage = () => {
    const newImage = {
      id: Date.now(), // Унікальний ID
      src: cityImage, // Імпортоване зображення
      width: defaultWidth
    };
    setImages([...images, newImage]);
  };

  // 2. Збільшити (останнє зображення)
  const enlargeImage = () => {
    if (images.length === 0) return;
    
    // Створюємо копію масиву
    const newImages = [...images];
    // Змінюємо останній елемент
    newImages[newImages.length - 1].width += step;
    setImages(newImages);
  };

  // 3. Зменшити (останнє зображення)
  const shrinkImage = () => {
    if (images.length === 0) return;

    const newImages = [...images];
    const currentWidth = newImages[newImages.length - 1].width;
    
    // Перевірка, щоб не зменшити менше ліміту
    if (currentWidth > minWidth) {
      newImages[newImages.length - 1].width -= step;
      setImages(newImages);
    }
  };

  // 4. Видалити (останнє зображення)
  const removeImage = () => {
    if (images.length === 0) return;
    
    // Видаляємо останній елемент (slice(0, -1) повертає масив без останнього)
    setImages(images.slice(0, -1));
  };

  return (
    <div className="image-wrapper">
      {/* Статичне посилання, як у завданні */}
      <a href="https://www.barcelona.cat/en">
        <img src={cityImage} alt="Barcelona Static" width="400" />
      </a>

      {/* Контейнер для динамічно доданих зображень */}
      <div id="image-container">
        {images.map((img) => (
          <img 
            key={img.id}
            src={img.src}
            alt="Barcelona Added"
            width={img.width}
            className="added-image"
          />
        ))}
      </div>

      {/* Кнопки керування */}
      <div className="controls">
        <button onClick={addImage}>Додати</button>
        <button onClick={enlargeImage}>Збільшити</button>
        <button onClick={shrinkImage}>Зменшити</button>
        <button onClick={removeImage}>Видалити</button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// Головний компонент App
// ---------------------------------------------------------
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Image />
    </div>
  );
}

export default App;