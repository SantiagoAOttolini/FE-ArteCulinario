import React from 'react'
import moment from 'moment'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { addReward } from '../../../_actions/rewards_actions'
import { useDispatch } from 'react-redux'

import { Form, Input, Button } from 'antd'

function AddReward(props) {
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{
        photo: '',
        name: '',
        Location: '',
        HoursOfAtention: '',
        description: '',
        Category: ''
      }}
      validationSchema={Yup.object().shape({
        photo: Yup.string().required('Una foto es requerida'),
        name: Yup.string().required('El nombre es requerido'),
        Location: Yup.string().required('La direccion del local es requerida'),
        HoursOfAtention: Yup.string().required(
          'Horarios de atencion requeridos'
        ),
        description: Yup.string().required(
          'Debe escribir la descripcion del local'
        ),
        Category: Yup.string().required('Debes seleccionar una categoria')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            photo: values.photo,
            name: values.name,
            Location: values.Location,
            HoursOfAtention: values.HoursOfAtention,
            description: values.description,
            Category: values.Category
          }

          dispatch(addReward(dataToSubmit)).then(response => {
            if (response.payload.success) {
              props.history.push('/')
            } else {
              alert(response.payload.err.errmsg)
            }
          })

          setSubmitting(false)
        }, 500)
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props
        return (
          <div className='mt-5 d-flex justify-content-center flex-column'>
            <div className='mb-4 d-flex justify-content-center'>
              <h2 className='text-center'>Agregar Local de gastronomia</h2>
            </div>
            <div className='d-flex justify-content-center'>
              <Form className='w-25' onSubmit={handleSubmit}>
                <Form.Item required label='Foto'>
                  <Input
                    id='photo'
                    placeholder='Escribe la ruta del archivo'
                    type='text'
                    value={values.photo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.photo && touched.photo
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.photo && touched.photo && (
                    <div className='inputFeedback'>{errors.photo}</div>
                  )}
                </Form.Item>

                <Form.Item required label='Nombre'>
                  <Input
                    id='name'
                    placeholder='Escribe el nombre del lugar'
                    type='text'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.name && touched.name
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.name && touched.name && (
                    <div className='inputFeedback'>{errors.name}</div>
                  )}
                </Form.Item>

                <Form.Item required label='Descripcion'>
                  <Input
                    id='description'
                    placeholder='Escribe la descripcion del lugar'
                    type='text'
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.description && touched.description
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.description && touched.description && (
                    <div className='inputFeedback'>{errors.description}</div>
                  )}
                </Form.Item>

                <Form.Item required label='Direccion'>
                  <Input
                    id='Location'
                    placeholder='Escribe la direccion del local'
                    type='text'
                    value={values.Location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.Location && touched.Location
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.Location && touched.Location && (
                    <div className='inputFeedback'>{errors.Location}</div>
                  )}
                </Form.Item>

                <Form.Item required label='Horarios de atencion'>
                  <Input
                    id='HoursOfAtention'
                    placeholder='Escribe el horario de atencion'
                    type='text'
                    value={values.HoursOfAtention}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.HoursOfAtention && touched.HoursOfAtention
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.HoursOfAtention && touched.HoursOfAtention && (
                    <div className='inputFeedback'>
                      {errors.HoursOfAtention}
                    </div>
                  )}
                </Form.Item>

                <Form.Item required label='Categoria'>
                  <Input
                    id='Category'
                    placeholder='Escribe la categoria del lugar'
                    type='text'
                    value={values.Category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.Category && touched.Category
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.Category && touched.Category && (
                    <div className='inputFeedback'>{errors.Category}</div>
                  )}
                </Form.Item>

                <div className='d-flex justify-content-center'>
                  <Form.Item>
                    <Button
                      onClick={handleSubmit}
                      type='primary'
                      disabled={isSubmitting}
                    >
                      Agregar
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        )
      }}
    </Formik>
  )
}

export default AddReward
