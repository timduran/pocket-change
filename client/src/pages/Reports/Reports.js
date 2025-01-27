import axios from 'axios'
import { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Reports = () => {


  // useEffect(() => {
  //   const fetchData = async () => {

  //     const { data } = await axios.get("/api/users/profile", {
  //       headers: {
  //         'Authorization': `Bearer ${localStorage.getItem('user')}`
  //       }
  //     })

  //     console.log("data from /api/users/profile: ", data);
  //     setUsers(...users, { data: data.categories })
  //     console.log(users.data)
  //   }

  //   fetchData();
  // }, [])

  const [users, setUsers] = useState({ categories: [] })
      useEffect(() => {
        axios.get('/api/users/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('user')}`
          }
        }
        )
          .then(res => {
            console.log(res)
            setUsers ({...users, categories: res.data.categories})
            console.log(users.categories)
          })
      }, [])

  return (
    <>
      <NavBar></NavBar>
      <br></br>      <br></br>
      <h1 style={{ color: "white", textAlign: "center", fontSize: "50px" }}>Budget Summary</h1>
      <br></br>      <br></br>

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={0} md={1}>
          </Grid>
          <Grid item xs={12} md={10}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ fontSize: "25px" }}>Categories</StyledTableCell>
                    <StyledTableCell style={{ fontSize: "25px" }} align="right">Spent</StyledTableCell>
                    <StyledTableCell style={{ fontSize: "25px" }} align="right">Goals</StyledTableCell>
                    <StyledTableCell style={{ fontSize: "25px" }} align="right">Results</StyledTableCell>
                    <StyledTableCell style={{ fontSize: "25px" }} align="right"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.categories.map(category => (
                    <StyledTableRow key={category.name}>
                      <StyledTableCell component="th" scope="row">
                        {category.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{category.actualValue}</StyledTableCell>
                      <StyledTableCell align="right">{category.goalValue}</StyledTableCell>
                      <StyledTableCell align="right">{category.result}</StyledTableCell>
                      <StyledTableCell align="right"></StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={0} md={1}>
          </Grid>
        </Grid>
      </Container>
      <br></br><br></br>
      <hr style={{ color: "white" }}></hr>
      <Footer></Footer>
    </>
  )
}

export default Reports