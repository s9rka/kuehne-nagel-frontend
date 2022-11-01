import React, { useEffect } from 'react';
import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, IconButton, } from '@chakra-ui/react';
import './Table.css';
import ModalWindow from './Modal';
import shipmentsData from "../assets/shipments.json";
import { DeleteIcon } from '@chakra-ui/icons';
import axios from 'axios';


function TableData() {
    const [stored, setStored] = useState(shipmentsData);
    const dbUrl = 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0';

    /*          // Getting data with fetch (commented out because of the URL overload) 
    useEffect(() => {     
        fetch(dbUrl).then(response => response.json())
        .then(response => {
            const dataFromDb = [];
            for (const key in response) {
                dataFromDb.push(response[key]);
            }
            setStored(dataFromDb);
        })
    }, []);
    */
    

/* GETTING DATA WITH AXIOS */   // Did not use because data from the URL kept renewing, worked with other URL, used 'https://fakestoreapi.com/products'
    /*
    useEffect(() => {
      axios.get(dbUrl)
      .then((response) => {
        setStored(response)
      })
    })
    */
    
    function deleteRow(selectedRow) {
        const index = stored.findIndex(element => element.orderNo === selectedRow.orderNo);
        stored.splice(index,1);
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
                        <IconButton aria-label='Search database'
                        onClick={() => deleteRow(element)}
                        icon={<DeleteIcon />} 
                        variant='outline' 
                        colorScheme='red'
                        />
                    </Td>
                </Tr>)}
            </Tbody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default TableData;