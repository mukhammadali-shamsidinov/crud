import { Table, TableContainer, TableHead, TableRow, TableCell, Button,TableBody, Avatar } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
function TodoItem({posts}) {

    function deleteItem(id){
        axios.delete(`http://localhost:5000/posts/${id}`).then(res=>{
            console.log(res.status);
        })
    }
    return (
        <div>
            <TableContainer component={Paper} sx={{width:750,margin:'50px auto'}}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                        <TableCell>Avatar</TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">user</TableCell>
                            <TableCell align="right">email</TableCell>
                            <TableCell align="right">phone</TableCell>
                            <TableCell align="right">action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

          {posts.length && posts.map((item,idx)=>(
              <TableRow
                key={idx+1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                              <TableCell component="th" scope="row">
             <Avatar src={item.avatar} />
              </TableCell>
              <TableCell component="th" scope="row">
              {item.id}
              </TableCell>
              <TableCell align="right">{item.lname}</TableCell>
              <TableCell align="right">{item.username}</TableCell>
              <TableCell align="right">{item.phone}</TableCell>
              <TableCell align="right">
                <Button variant='outlined' color='primary'>
                <ModeIcon />
                </Button>&nbsp;
                <Button onClick={()=>deleteItem(item.id)} variant='outlined' color='error'>
                    <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}

export default TodoItem;