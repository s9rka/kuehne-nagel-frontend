import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Badge,
  } from '@chakra-ui/react';

import './Modal.css';

function ModalWindow(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
        <Button onClick={onOpen}>Open Panel</Button>
        <Modal id='mymodal' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width='1000px'>
          <ModalHeader>{props.orderNo}
            
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="shipment-details">
                <div className="field">Order Number
                    <Badge fontSize='1rem'>{props.orderNo}</Badge>
                </div>

                <div className="field">Date
                    <Badge fontSize='1rem'>{props.date}</Badge>
                </div>

                <div className="field">Customer
                    <Badge fontSize='1rem'>{props.customer}</Badge>
                </div>

                <div className="field">Tracking Number
                    <Badge fontSize='1rem'>{props.trackingNo}</Badge>
                </div>

                <div className="field">Status
                    <Badge fontSize='1rem'>{props.status}</Badge>
                </div>

                <div className="field">Consignee
                    <Badge fontSize='1rem'>{props.consignee}</Badge> 
                </div>            
            </div>
          </ModalBody>

          <ModalFooter id="modalfoot">
            <Button colorScheme='blue' mr={3}>
              Edit
            </Button>
            <Button colorScheme='blackAlpha' onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ModalWindow