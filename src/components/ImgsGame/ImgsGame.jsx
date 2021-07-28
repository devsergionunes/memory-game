import React from 'react'
import { useDates } from '../../hooks/useDates'
import { CongradulationsModal } from '../CongradulationsModal/CongradulationsModal'

import './ImgsGameStyle.scss'

import imgJavascript from '../../assests/imagens/javascript.svg'
import imgCmaisMais from '../../assests/imagens/cmais.svg'
import imgCss from '../../assests/imagens/css3.svg'
import imgGithub from '../../assests/imagens/github.svg'
import imgHtml from '../../assests/imagens/html-5.svg'
import imgJava from '../../assests/imagens/java-coffee-cup.svg'
import imgReact from '../../assests/imagens/react.svg'
import imgPython from '../../assests/imagens/python.svg'
import imgNode from '../../assests/imagens/nodejs.svg'

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

function randomList() {
  let randomNumber;
  let tmp;
  for (let i = imgList.length; i;) {
      randomNumber = Math.random() * i-- | 0;
      tmp = imgList[randomNumber];
      imgList[randomNumber] = imgList[i];
    imgList[i] = tmp;
  }
  return imgList;
}
randomList();

export function ImgsGame({ setIsCronometro, timeSpan,isReset,setIsReset}) {
  const [modal, setModal] = React.useState(false)
  const [imgComparatorOne, setImgComparatorOne] = React.useState(false)
  const [attempt, setAttempt] = React.useState(0);
  const [congratulations, setCongratulations] = React.useState(0);
  let timeout = React.useRef(null)
  let imgComparatorTwo;
  
  function comparator(target) {
    if (timeout.current) return;
    if (!imgComparatorOne) {
      setIsCronometro(true)
      target.classList.add('visible')
      setImgComparatorOne(target)
      imgComparatorTwo = null
    } else {
      target.classList.add('visible')
      imgComparatorTwo = target
      setAttempt((attempt) => attempt += 1)
      timeout.current = setTimeout(() => {
        if (imgComparatorOne.childNodes[0].alt === imgComparatorTwo.childNodes[0].alt ) {
          setCongratulations((congratulations) => congratulations += 1)
          setImgComparatorOne(false)
          imgComparatorTwo = null
          timeout.current = null
        } else {
          imgComparatorOne.classList.remove('visible')
          imgComparatorTwo.classList.remove('visible')
          setImgComparatorOne(false)
          imgComparatorTwo = null
          timeout.current = null
        }
      }, 650)

    }
  }
  React.useEffect(() => {
    if (congratulations === (imgList.length / 2)) {
      setIsCronometro(false)
      setModal(true)
    }
  }, [congratulations === (imgList.length / 2)])
  
  React.useEffect(() => {
    if (isReset) {
      randomList();
      setIsCronometro(false);
      setImgComparatorOne(false);
      setModal(false);
      setAttempt(0);
      setCongratulations(0);
      timeout.current = null;
      imgComparatorTwo = ''
      setIsReset(false)
      const icons = document.querySelectorAll('.icon')
      icons.forEach(icon => icon.classList.remove('visible'))
    }
  }, [isReset, setIsReset])
  
  React.useEffect(() => randomList(),[])
  return (
      <section className='imagens'>
        {imgList.map((img, index) => (
          <div className='icon' key={index} onClick={({target}) => comparator(target)}>
            <img
              src={img.image}
              alt={img.alt}
            />
          </div>
        ))}
      <CongradulationsModal
        modal={modal}
        setModal={setModal}
        congratulations={congratulations}
        attempt={attempt}
        timeSpan={timeSpan}
      />
      </section>
  )
}