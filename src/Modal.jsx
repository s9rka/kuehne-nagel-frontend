import { useDisclosure, useEditableControls, Spacer } from '@chakra-ui/react'
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
    Editable,
    EditableInput,
    EditablePreview,
    Input,
    ButtonGroup,
    IconButton,
  } from '@chakra-ui/react';

import {
    CheckIcon,
    CloseIcon,
    EditIcon,
  } from '@chakra-ui/icons';
import './Modal.css';

function ModalWindow(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();

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
        <IconButton aria-label='Search database' icon={<EditIcon />} onClick={onOpen}/>
        <Modal id='mymodal' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width='1000px'>
          <ModalHeader>{props.orderNo}
            
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>                           {/* Fields can be edited in the UI, but the values are not saved */}
            <div className="shipment-details"> 
                <div className="field"><label>Order Number</label> 
                    <Editable
                        padding='.2rem'
                        fontWeight='bold'
                        defaultValue={props.orderNo}
                        isPreviewFocusable={false}
                    >
                    <EditablePreview />
                    {/* Here is the custom input */}
                    <Input as={EditableInput} />
                    <EditableControls />
                    </Editable>
                </div>

                <div className="field"><label>Date</label>
                    <Editable
                        padding='.2rem'
                        fontWeight='bold'
                        defaultValue={props.date}
                        isPreviewFocusable={false}
                    >
                    <EditablePreview />
                    {/* Here is the custom input */}
                    <Input as={EditableInput} />
                    <EditableControls />
                    </Editable>                
                </div>

                <div className="field"><label>Customer</label>
                    <Editable
                        padding='.2rem'
                        fontWeight='bold'
                        defaultValue={props.customer}
                        isPreviewFocusable={false}
                    >
                    <EditablePreview />
                    {/* Here is the custom input */}
                    <Input as={EditableInput} />
                    <EditableControls />
                    </Editable>
                </div>

                <div className="field"><label>Tracking Number</label>
                    <Editable
                        padding='.2rem'
                        fontWeight='bold'
                        defaultValue={props.trackingNo}
                        isPreviewFocusable={false}
                    >
                    <EditablePreview />
                    {/* Here is the custom input */}
                    <Input as={EditableInput} />
                    <EditableControls />
                    </Editable>
                </div>

                <div className="field"><label>Status</label>
                    <Editable
                        padding='.2rem'
                        fontWeight='bold'
                        defaultValue={props.status}
                        isPreviewFocusable={false}
                    >
                    <EditablePreview />
                    {/* Here is the custom input */}
                    <Input as={EditableInput} />
                    <EditableControls />
                    </Editable>
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
                    <Input as={EditableInput} />
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