import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';



const Comment = (props) => {
    const {avatar, author, rating, text} = props.comment;
    return (
        <ListItem alignItems="flex-start" divider>
            <ListItemAvatar>
                <Avatar src={avatar} alt={author}>
                    {!avatar ? author[0] : null}
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={author}
                secondary={<CommentBlock text={text} rating={rating}/>}
            />
        </ListItem>
    );
}

const CommentBlock = ({text, rating}) => {
    const [openText, setOpenText] = React.useState(rating > -10);

    const handleOpenChange = () => setOpenText(true);

    return (
        <>
            <Collapse in={!openText}><span onClick={handleOpenChange}>Открыть комментарий</span></Collapse>
            <Collapse in={openText}><p>{text}</p></Collapse>
        </>
    )
}

export default Comment;