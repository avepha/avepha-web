import React, {useState} from 'react'
import {Modal, ModalBody} from 'reactstrap'
import dynamic from 'next/dynamic'
// @ts-ignore
const LineIcon: any = dynamic(() => import ('react-lineicons'), {ssr: false})

const DevModal: React.FC = () => {
  const [devModal, setDevModal] = useState(false)
  
  return (
    <Modal isOpen={devModal} centered backdrop toggle={() => setDevModal(!devModal)}>
      <ModalBody className="text-center" style={{fontSize: '1.5rem'}}>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/avepha/avepha-web" style={{fontSize: '2rem'}}>
          <LineIcon name="github"/>
        </a>
        <span className="d-block">This project is in the <strong>development process</strong>.</span>
        <span className="d-block">There are a lot more things to do. ;)</span>
      </ModalBody>
    </Modal>
  )
}

export default DevModal
