import { useDisclosure, EditableControls, useEditableControls, Spacer } from '@chakra-ui/react'
import React, { useState } from 'react'
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
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    Input,
    ButtonGroup,
    IconButton,
    Flex,
  } from '@chakra-ui/react';

import {
    CheckIcon,
    CloseIcon,
    EditIcon,
  } from '@chakra-ui/icons';

import './Modal.css';
import { useRef } from 'react';
import shipmentsData from "./assets/Shipments";

function ModalWindow(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const consigneeRef = useRef();

    function EditableControls() {
        const {
          isEditing,
          getSubmitButtonProps,
          getCancelButtonProps,
          getEditButtonProps,
        } = useEditableControls()

        return isEditing ? (
            <ButtonGroup size='sm'>
              <IconButton aria-label='Search database' icon={<CheckIcon />} {...getSubmitButtonProps()} />
              <IconButton aria-label='Search database' icon={<CloseIcon />} {...getCancelButtonProps()} />
            </ButtonGroup>
          ) : (
              <IconButton marginLeft="1rem"
              aria-label='Search database' icon={<EditIcon />} size='sm'  {...getEditButtonProps()} />
            
          )}
    
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

                <div className="field"><label>Consignee</label>
                <Editable
                    padding='.2rem'
                    fontWeight='bold'
                    defaultValue={props.consignee}
                    isPreviewFocusable={false}
                >
                <EditablePreview />
                {/* Here is the custom input */}
                <Input useRef={consigneeRef} as={EditableInput} />
                <EditableControls />
                </Editable>
                </div>            
            </div>
            <div>
            </div>
          </ModalBody>

          <ModalFooter id="modalfoot">
            
            <Button colorScheme='blackAlpha' onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ModalWindow