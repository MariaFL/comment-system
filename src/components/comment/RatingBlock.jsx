import React from 'react';
import { ButtonGroup, Button, Grid, Typography } from '@mui/material';

const RatingBlock = (props) => {
    const {rating} = props;
    return (
        <Grid container columnSpacing={1} justifyContent="flex-end" alignContent="baseline">
            <Grid item alignSelf="center">
                <Typography>
                    {rating > 0 ? '+' : null}{rating}
                </Typography>
            </Grid>
            <Grid item>
                <ButtonGroup
                    variant="contained"
                    aria-label="Rating"
                >
                    <Button onClick={props.onAdd}>+</Button>
                    <Button onClick={props.onDeduct}>-</Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    );
}


export default RatingBlock;