import imgJavascript from '../../assests/imagens/javascript.svg'
import imgCmaisMais from '../../assests/imagens/cmais.svg'
import imgCss from '../../assests/imagens/css3.svg'
import imgGithub from '../../assests/imagens/github.svg'
import imgHtml from '../../assests/imagens/html-5.svg'
import imgJava from '../../assests/imagens/java-coffee-cup.svg'
import imgReact from '../../assests/imagens/react.svg'
import imgPython from '../../assests/imagens/python.svg'
import imgNode from '../../assests/imagens/nodejs.svg'
import './Roomstyle.scss'
import React from 'react'

const imgArray =[
  {
    image: imgJavascript,
    alt: 'javacript icon'
  },
  {
    image: imgCmaisMais,
    alt: 'C++ icon'
  },
  {
    image: imgCss,
    alt: 'css icon'
  },
  {
    image: imgGithub,
    alt: 'github icon'
  },
  {
    image: imgHtml,
    alt: 'html icon'
  },
  {
    image: imgJava,
    alt: 'java icon'
  },
  {
    image: imgReact,
    alt: 'react icon'
  },
  {
    image: imgPython,
    alt: 'python icon'
  },
  {
    image: imgNode,
    alt: 'node icon'
  },
]
const imgList = [...imgArray, ...imgArray]

let randomNumber;
let tmp;
for (let i = imgList.length; i;) {
    randomNumber = Math.random() * i-- | 0;
    tmp = imgList[randomNumber];
    imgList[randomNumber] = imgList[i];
  imgList[i] = tmp;
}
export function Room() {
  const [imgComparatorOne, setImgComparatorOne] = React.useState(false)
  let imgComparatorTwo;

  function comparator(target) {
    if (!imgComparatorOne) {
      target.classList.add('visible')
      setImgComparatorOne(target)
      imgComparatorTwo = ''
      //console.log(target.children)
      //console.log(target.childNodes)
      return;
    } else {
      target.classList.add('visible')
      imgComparatorTwo = target
      setTimeout(() => {
        if (imgComparatorOne.childNodes[0].alt === imgComparatorTwo.childNodes[0].alt ) {
          console.log('sim')
          setImgComparatorOne(false)
          imgComparatorTwo = ''
        } else {
          console.log('nao')
          imgComparatorOne.classList.remove('visible')
          imgComparatorTwo.classList.remove('visible')
          setImgComparatorOne(false)
          imgComparatorTwo = ''
        }
      }, 500)

    }
  }

  return (
    <div className='room-container'>
      <section className='details'>
        <h2>Sergio</h2>
        <span>00:00:00</span>
      </section>
      <section className='imagens'>
        {imgList.map((img, index) => (
          <div key={index} onClick={({target}) => comparator(target)}>
            <img
              src={img.image}
              alt={img.alt}
            />
          </div>
        ))}
      </section>
    </div>
  )
}