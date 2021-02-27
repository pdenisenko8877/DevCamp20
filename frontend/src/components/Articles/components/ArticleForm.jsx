import React, { useMemo } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function ArticleForm({ onSubmit, initialData }) {
  const contentSchema = Yup.object().shape({
    title: Yup.string().required('Required field'),
    intro: Yup.string().required('Required field'),
    content: Yup.string().required('Required field'),
  });

  const handleSubmit = data => {
    onSubmit(data);
  };

  const defaultData = {
    title: '',
    intro: '',
    content: '',
    visibility: 'all',
  };

  const initialValues = initialData || defaultData;

  const optionsVisibility = useMemo(
    () => [
      {
        value: 'all',
        label: 'All',
      },
      {
        value: 'friends',
        label: 'Friends',
      },
      {
        value: 'only_me',
        label: 'Only Me',
      },
    ],
    [],
  );

  return (
    <Formik initialValues={initialValues} validationSchema={contentSchema} onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Field name="title">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Title"
                    fullWidth
                    autoFocus
                    variant="outlined"
                    size="small"
                    required
                    error={errors.title && touched.title}
                    helperText={errors.title && touched.title && errors.title}
                    margin="normal"
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={4}>
              <Field name="visibility">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Visibility"
                    select
                    fullWidth
                    variant="outlined"
                    size="small"
                    margin="normal"
                  >
                    {optionsVisibility.map((option, i) => (
                      <MenuItem key={i} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              </Field>
            </Grid>
          </Grid>
          <Field name="intro">
            {({ field }) => (
              <TextField
                {...field}
                label="Short description"
                fullWidth
                multiline
                variant="outlined"
                rows={2}
                required
                error={errors.intro && touched.intro}
                helperText={errors.intro && touched.intro && errors.intro}
                margin="normal"
              />
            )}
          </Field>
          <Field name="content">
            {({ field }) => (
              <TextField
                {...field}
                label="Content"
                fullWidth
                multiline
                variant="outlined"
                rows={7}
                required
                error={errors.content && touched.content}
                helperText={errors.content && touched.content && errors.content}
                margin="normal"
              />
            )}
          </Field>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button type="submit" color="primary" variant="contained">
              Save
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

ArticleForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};

export default ArticleForm;
