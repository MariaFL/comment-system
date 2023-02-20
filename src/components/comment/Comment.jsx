import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';
import { Grid, Typography } from '@mui/material';



const Comment = (props) => {
    const {avatar, author, rating, text} = props.comment;
    return (
        <ListItem 
            alignItems="flex-start" 
            divider 
            // secondaryAction={
            //     <CommentBlock text={text} rating={rating}/>
            // }
        >
            <ListItemAvatar>
                <Avatar src={avatar} alt={author}>
                    {!avatar ? author[0] : null}
                </Avatar>
            </ListItemAvatar>
            <Grid>
                <Typography 
                    variant="subtitle2" 
                    gutterBottom
                >
                    {author}
                </Typography>
                <CommentBlock text={text} rating={rating}/>
            </Grid>
        </ListItem>
    );
}

const CommentBlock = ({text, rating}) => {
    const [openText, setOpenText] = React.useState(rating > -10);

    const handleOpenChange = () => setOpenText(true);

    return (
        <>
            <Collapse in={!openText}><div onClick={handleOpenChange}>Открыть комментарий</div></Collapse>
            <Collapse in={openText}>{text}</Collapse>
        </>
    )
}

export default Comment;