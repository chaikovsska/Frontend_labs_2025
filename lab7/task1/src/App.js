import React, { Component, useState } from 'react';
import './App.css'; 
import cityImage from './assets/city-barcelona.jpg';

function Header() {
  return (
    <header>
      <h2>Чайковська Софія Володимирівна</h2>
    </header>
  );
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cls1: '', 
      cls2: ''
    };
  }

  handleElement1Click = () => {
    const { cls1, cls2 } = this.state;
    const myColor = 'color1'; 

    if (cls1 === '') {
      this.setState({ cls1: myColor });
    } 
    else {
      if (cls2 !== '') {
        this.setState({
          cls1: cls2, 
          cls2: cls1  
        });
      } 
      else {
        this.setState({ cls1: '' });
      }
    }
  };

  handleElement2Click = () => {
    const { cls1, cls2 } = this.state;
    const myColor = 'color2';

    if (cls2 === '') {
      this.setState({ cls2: myColor });
    } else {
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
          <li 
            onClick={this.handleElement1Click}
            className={this.state.cls1} 
            style={{cursor: 'pointer'}}
          >
            Читання
          </li>

          <li 
            onClick={this.handleElement2Click}
            className={this.state.cls2} 
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

function Image() {
  const [images, setImages] = useState([]);
  
  const defaultWidth = 400;
  const step = 50;
  const minWidth = 50;

  const addImage = () => {
    const newImage = {
      id: Date.now(), 
      src: cityImage, 
      width: defaultWidth
    };
    setImages([...images, newImage]);
  };

  const enlargeImage = () => {
    if (images.length === 0) return;
    
    const newImages = [...images];
    newImages[newImages.length - 1].width += step;
    setImages(newImages);
  };

  const shrinkImage = () => {
    if (images.length === 0) return;

    const newImages = [...images];
    const currentWidth = newImages[newImages.length - 1].width;
    
    if (currentWidth > minWidth) {
      newImages[newImages.length - 1].width -= step;
      setImages(newImages);
    }
  };

  const removeImage = () => {
    if (images.length === 0) return;
    
    setImages(images.slice(0, -1));
  };

  return (
    <div className="image-wrapper">
      <a href="https://www.barcelona.cat/en">
        <img src={cityImage} alt="Barcelona Static" width="400" />
      </a>

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

      <div className="controls">
        <button onClick={addImage}>Додати</button>
        <button onClick={enlargeImage}>Збільшити</button>
        <button onClick={shrinkImage}>Зменшити</button>
        <button onClick={removeImage}>Видалити</button>
      </div>
    </div>
  );
}

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
