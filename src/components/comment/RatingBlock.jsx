import React from 'react';
import { ButtonGroup, Button } from '@mui/material';

const RatingBlock = (props) => {
    const {rating} = props;
    return (
        <div>
            {rating > 0 ? '+' : null}{rating}
            <ButtonGroup
                variant="contained"
                aria-label="Rating"
            >
                <Button onClick={props.onAdd}>+</Button>
                <Button onClick={props.onDeduct}>-</Button>
            </ButtonGroup>
        </div>
    );
}


export default RatingBlock;