import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, TextField, Button, Grid } from '@mui/material';

const commentHelper = {
    email: {
      required: "Поле Email обязательно",
      pattern: "Неправильный Email"
    },
    text: {
        required: "Поле Комментарий обязательно",
        pattern: "Пожалуйста введите комментарий"
    }
  };

const AddComment = (props) => {
    const { control, handleSubmit, reset } = useForm({
        reValidateMode: "onBlur"
      });

    const submitForm = (fields) => {
        props.onAddComment(fields);
        reset();
    }

    return (
        <Box component="form" onSubmit={handleSubmit(submitForm)}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Controller
                        control={control}
                        name="author"
                        defaultValue=""
                        rules={{
                            required: true,
                            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                label="Email"
                                type="email"
                                error={error !== undefined}
                                helperText={error ? commentHelper.email[error.type] : ""}
                                mb={1}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller 
                        control={control}
                        name="text"
                        defaultValue=""
                        rules={{
                            required: true,
                            pattern: /\w+/
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                fullWidth
                                label="Текст комментария"
                                type="text"
                                multiline 
                                rows={4}
                                error={error !== undefined}
                                helperText={error ? commentHelper.text[error.type] : ""}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button type="submit" variant="contained">Оставить комментарий</Button>
                </Grid>
            </Grid>
        </Box>
    )
}


export default AddComment;