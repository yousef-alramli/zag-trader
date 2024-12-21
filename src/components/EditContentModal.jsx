import { useEffect, useState } from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import Modal from 'react-modal';
import { object, string } from 'yup';

import '../styles/editContentModal.scss';

Modal.setAppElement('#root');

const EditContentModal = ({ columns, contentName, isOpen, setOpen, onSubmit }) => {
  const [schemaShape, setSetSchemaShape] = useState({});
  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    const values = {};
    const shape = {};

    columns.forEach((column) => {
      values[column.header.toLocaleLowerCase()] = '';
      if (column.header === 'Email') {
        shape[column.header.toLocaleLowerCase()] = string().required().email();
      } else {
        shape[column.header.toLocaleLowerCase()] = string().required().min(2);
      }
    });

    delete values.actions
    delete shape.actions
    setInitialValues(values)
    setSetSchemaShape(shape);
  }, []);

  const userSchema = object().shape(schemaShape);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setOpen(false)}
      style={{
        overlay: {
          backgroundColor: '#00000042'
        },
        content: {
          backgroundColor: '#ecf0f3'
        }
      }}
      contentLabel='New Content'
      className='edit-content-modal'
    >
      <h3 className='title'>Edit {contentName}</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, errorMessage }) => (
          <div className='inputs-container'>
            <div>
              {columns.map((col) => col.header !== 'Actions' && (
                <div key={col.header}>
                  <label className='content-label' htmlFor={col.header.toLocaleLowerCase()}>{col.header}</label>
                  <Field
                    className='content-input'
                    name={col.header.toLocaleLowerCase()}
                    type='text'
                    placeholder={col.header}
                  />
                  <p className='validation-error'>
                    <ErrorMessage name={col.header.toLocaleLowerCase()} render={errorMessage} />
                  </p>
                </div>
              ))}
            </div>
            <button
              className='submit-button'
              onClick={handleSubmit}
              type='submit'
            >
              Submit
            </button>
          </div>
        )}
      </Formik>
    </Modal>
  )
}

export default EditContentModal