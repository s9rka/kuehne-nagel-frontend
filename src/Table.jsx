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
  } from '@chakra-ui/react';
import './Table.css';
import ModalWindow from './Modal';
import shipmentsData from "./assets/Shipments";
import { Link } from 'react-router-dom';
import EditData from './Edit';

function TableData() {

    const [stored, setStored] = useState([]);

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
                    <Th>Date</Th>
                    <Th>Customer</Th>
                    <Th>Tracking Number</Th>
                    <Th>Status</Th>
                    <Th>Consignee</Th>
                    <Th>Actions</Th>
                </Tr>
            </Thead>
            <Tbody>
            { shipmentsData.map(element => 
                <Tr>
                    <Td>{element.orderNo}</Td>
                    <Td>{element.date}</Td>
                    <Td>{element.customer}</Td>
                    <Td>{element.trackingNo}</Td>
                    <Td>{element.status}</Td>
                    <Td>{element.consignee}</Td>
                    <Td className='actions'>
                        < ModalWindow 
                        orderNo = {element.orderNo}
                        date = {element.date}
                        customer = {element.customer}
                        trackingNo = {element.trackingNo}
                        status = {element.status}
                        consignee = {element.consignee}
                        />
                        <Button onClick={() => deleteRow(element)} variant='outline' colorScheme='red'><img src={trashicon} alt="trash-icon"></img></Button>
                    </Td>
                </Tr>)}
            </Tbody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default TableData;