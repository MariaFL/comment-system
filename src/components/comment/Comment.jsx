import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import CommentText from './CommentText';

const Comment = (props) => {
    const {avatar, author, rating, text} = props.comment;
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar src={avatar} alt={author}>
                    {!avatar ? author[0] : null}
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={author}
                secondary={rating < -10 ? "NOOO" : text}
            />
        </ListItem>
    );
}

export default Comment;