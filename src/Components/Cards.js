import React, { useState} from 'react';
import './Pagination.css';
import { Card, Row, Col, Container } from "react-bootstrap";

import data from './heliverse.json'
import ReactPaginate from 'react-paginate';

function Cards() {
  const [pageNumber, setPageNumber] = useState(1)
  const[filter,setFilter] = useState('');
  const dataPerPage = 20
  const PagesVisited = pageNumber * dataPerPage

  const searchText =(event)=>{
    setFilter(event.target.value) }  

// let dataSearch =data.data.filter(item=>{
//   return Object.keys(item).some(key=>item[key].toString().toLowerCase().includes
//   (filter.toString().
//   toLowerCase()))
// })
  

  const pageCount = Math.ceil(data.length / dataPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div className='container'>
   
   <Container className='my-2'>
        <Row className='my-2'>
          <h1 className='text-center'>Heliverse</h1>

<div className='col-12 mb-5'>
  <div className='mb-3 col-4 mx-auto text-center'>
    <label className='form-lable h4'> Search </label>
    <input
    type='text'
    className='form-control'
    value={filter}
    onChange={searchText.bind(this)}
    
    />
  </div>
</div>



            {data.slice(PagesVisited,PagesVisited+dataPerPage).map((data) => (
                <Col key={data.id} xs={12} md={4} lg={3}>
                    <Card className='my-4' >
                        <Card.Img src={data.avatar} />

                        <Card.Body>
                            <Card.Title>{data.first_name} {data.last_name}</Card.Title>
                            <Card.Title>{data.domain}</Card.Title>
                            <Card.Text>{data.gender}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
        
  








      <ReactPaginate 
        previousLabel={'Previous'}
        nextLabel={ 'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationbtns"}
        previousLinkClassName={'previousbtn'}
        nextLinkClassName={'nextbtn'}
        disabledClassName={'paginationdisabled'}
        activeClassName={'paginationactive'}




      />

    </div>
  )

}

export default Cards
