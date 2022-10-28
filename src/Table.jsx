import React, { useEffect } from 'react';
import { useState } from 'react';
import trashicon from './trashicon.svg';
import {
    Table,
    Thead,
    Tbody,
    Button,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    IconButton,
    ButtonGroup,
  } from '@chakra-ui/react';
import './Table.css';
import ModalWindow from './Modal';
import shipmentsData from "./assets/shipments";
import {
    DeleteIcon,
    EditIcon,
  } from '@chakra-ui/icons';


function TableData() {

    const [stored, setStored] = useState(shipmentsData);

    /* FOR GETTING DATA FROM URL
    const dbUrl = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";
    
    useEffect(() => {
        fetch(dbUrl).then(response => response.json())
        .then(responseBody => {
            const dataFromDb = [];
            for (const key in responseBody) {
                dataFromDb.push(responseBody[key]);
            }
            setStored(dataFromDb);
        })
    }, []);
    */

    function deleteRow(selectedRow) {
        setStored(shipmentsData);
        const index = shipmentsData.findIndex(element => element.orderNo === selectedRow.orderNo);
        shipmentsData.splice(index,1);
        setStored(stored.slice());
    }
    
  return (
    <div className='table-container'>
        <TableContainer>
        <Table size='sm' colorScheme='blue'>
            <TableCaption>Shipments Data</TableCaption>
            <Thead className="table-head">
                <Tr>
                    <Th>Order Number</Th>
                    <Th className="date">Date</Th>
                    <Th className='customer'>Customer</Th>
                    <Th className="less-important">Tracking Number</Th>
                    <Th className="less-important">Status</Th>
                    <Th className="less-important">Consignee</Th>
                    <Th>Actions</Th>
                </Tr>
            </Thead>
            <Tbody>
            { stored.map(element => 
                <Tr>
                    <Td>{element.orderNo}</Td>
                    <Td className="date">{element.date}</Td>
                    <Td className="customer">{element.customer}</Td>
                    <Td className="less-important">{element.trackingNo}</Td>
                    <Td className="less-important">{element.status}</Td>
                    <Td className="less-important">{element.consignee}</Td>
                    <Td className='actions'>
                        < ModalWindow 
                        orderNo = {element.orderNo}
                        date = {element.date}
                        customer = {element.customer}
                        trackingNo = {element.trackingNo}
                        status = {element.status}
                        consignee = {element.consignee}
                        />
                        <IconButton aria-label='Search database' icon={<DeleteIcon />} onClick={() => deleteRow(element)} variant='outline' colorScheme='red'></IconButton>
                    </Td>
                </Tr>)}
            </Tbody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default TableData;