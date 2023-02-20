import React from "react";
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import FormControl from '@mui/material/FormControl';
import Comment from './comment/Comment';
import './comments.css'

const comments = [
    {
        id: 1,
        author: 'Daniel',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: 1676800056837,
        rating: 5,
    },
    {
        id: 2,
        author: 'David',
        text: 'Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Porta nibh venenatis cras sed felis eget velit. Proin fermentum leo vel orci porta non pulvinar neque. Lacus vestibulum sed arcu non odio. Adipiscing elit duis tristique sollicitudin nibh sit. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Dolor morbi non arcu risus quis varius quam. Habitasse platea dictumst vestibulum rhoncus. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Facilisis mauris sit amet massa. Nunc consequat interdum varius sit amet. Nisl nunc mi ipsum faucibus vitae aliquet. Amet facilisis magna etiam tempor orci eu lobortis elementum. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse.',
        date: 1676800056837,
        rating: 10,
    },
    {
        id: 3,
        author: 'Mary',
        text: 'Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Porta nibh venenatis cras sed felis eget velit. Proin fermentum leo vel orci porta non pulvinar neque. Lacus vestibulum sed arcu non odio. Adipiscing elit duis tristique sollicitudin nibh sit. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Dolor morbi non arcu risus quis varius quam. Habitasse platea dictumst vestibulum rhoncus. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Facilisis mauris sit amet massa. Nunc consequat interdum varius sit amet. Nisl nunc mi ipsum faucibus vitae aliquet. Amet facilisis magna etiam tempor orci eu lobortis elementum. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse.',
        date: 1676800056837,
        rating: -11,
    }
]

const Comments = () => {
    return (
        <Container maxWidth="md">
            <List>
                {comments.map((comment) => <Comment comment={comment} key={`comment-${comment.id}`}/>)}
            </List>
            <div>
            <Box component="form">
                <FormControl>
                    <TextField required label="Email" className="input-email" type="email"/>
                    <TextField required multiline label="Текст комментария" rows={4} fullWidth/>
                </FormControl>
            </Box>
            </div>
            
        </Container>
        
    )
}


export default Comments;