import Modal from 'react-modal'
import { useDates } from '../../hooks/useDates'
import btnCloseModal from '../../assests/imagens/closeModal.svg'
import './CongradulationsModalStyle.scss'

Modal.setAppElement('#root')
export function CongradulationsModal({ setModal, modal , attempt, congratulations, timeSpan}) {
  const { user } = useDates();

  function closeModal() {
    setModal(false)
  }

  return (
    <Modal
      isOpen={modal}
      onRequestClose={closeModal}
      overlayClassName='overlay-modal'
      className='content-modal'  
    >
      <h1>Parabens {user} 👏🏻🎉🎉💯</h1>
      <p>Voce acertou {congratulations} de {attempt} tentativas, no tempo de {timeSpan} ⏳</p>
      <img
        src={btnCloseModal}
        alt='fechar Modal'
        onClick={closeModal}
      />
    </Modal>
  )
}