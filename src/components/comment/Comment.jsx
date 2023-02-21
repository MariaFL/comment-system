import React, { useEffect } from 'react';
import { Avatar, Collapse, Grid, ListItem , ListItemAvatar, Typography } from '@mui/material';
import DateText from "./DateText";
import RatingBlock from "./RatingBlock";

const Comment = (props) => {
    const {id, avatar, author, rating, text, date} = props.comment;
    const {onChangeRating} = props;

    const handleAddRating = () => {
        onChangeRating(id, rating + 1);
    }

    const handleDeductRating = () => {
        onChangeRating(id, rating - 1);
    }

    return (
        <ListItem 
            alignItems="flex-start" 
            divider
        >
            <ListItemAvatar>
                <Avatar src={avatar} alt={author}>
                    {!avatar ? author[0] : null}
                </Avatar>
            </ListItemAvatar>
            <Grid container>
                <Grid container justifyContent="flex-start" alignItems="baseline">
                    <Typography 
                        variant="subtitle1" 
                        gutterBottom
                        mr={1}
                    >
                        {author}
                    </Typography>
                    <Typography variant="body2">
                        <DateText date={date}/>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <CommentBlock text={text} rating={rating}/>
                </Grid>
                
                    <RatingBlock rating={rating} onAdd={handleAddRating} onDeduct={handleDeductRating}/>
            
                
            </Grid>
        </ListItem>
    );
}

const CommentBlock = ({text, rating}) => {
    const [openText, setOpenText] = React.useState(rating >= -10);

    useEffect(() => {
        setOpenText(rating >= -10);
    }, [rating])

    const handleOpenChange = () => setOpenText(true);

    return (
        <>
            <Collapse in={!openText}><div onClick={handleOpenChange}>Открыть комментарий</div></Collapse>
            <Collapse in={openText}>{text}</Collapse>
        </>
    )
}

export default Comment;