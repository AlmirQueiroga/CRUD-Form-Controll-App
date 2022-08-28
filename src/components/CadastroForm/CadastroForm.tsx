import { useState, useEffect } from 'react';
import { useFormik, FormikHelpers } from 'formik'
import Cadastro from '../../models/cadastro'
import * as Yup from 'yup'
import api from "../../resources/api";
import { TextInput, Form } from "./cadastro.styles";
import { useSelector, useDispatch } from 'react-redux';
import { Button, InputAdornment } from "@mui/material";
import { EditarState } from '../../store/edit/type.d';

import { removeEditar } from '../../store/edit/actions'
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface CadastroFormProps {
  onFinish: () => void
}

export default function CadastroForm(props: CadastroFormProps): JSX.Element {
  const initialValues: Cadastro | undefined = useSelector((state: any) => state.editar.editar)
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [enableReinitialize, setEnableReinitialize] = useState<boolean>(false)
  const { onFinish } = props

  const onSubmit = (value: any, formikHelpers: FormikHelpers<Cadastro>) => {
    let valid = true
    
    Object.keys(value).forEach(key => {
      if (value[key] === '' || value[key] === undefined) {
        setFieldError(key, 'Campo obrigatório')
        valid = false
      }      
    })
    Object.keys(value.name).forEach(key => {
      if (value.name[key] === '' || value.name[key] === undefined) {
        setFieldError(`name.${key}`, 'Campo obrigatório')
        valid = false
      }      
    })
    Object.keys(value.address).forEach(key => {
      if (value.address[key] === '' || value.address[key] === undefined) {
        setFieldError(`address.${key}`, 'Campo obrigatório')
        valid = false
      }      
    })
    if (valid){
      
      if(initialValues){
        api.put(`/users/${initialValues.id}`, values)
        dispatch(removeEditar())
      }else{
        api.post("/users",values).then(res=>console.log(res))
      }
      onFinish()
    }
  }

  const handlePassword = () => setShowPassword(!showPassword)

  
  const { values, setFieldError, setFieldValue,  errors, handleSubmit, isValid, handleBlur } = useFormik<Cadastro>({
    validateOnBlur: true, 
    validateOnChange: false,
    enableReinitialize,
    initialValues: initialValues ?? {
      email: '',
      username: '',
      password: '',
      name: {
        firstname:'',
        lastname:''
      },
      address : {
        city:'',
        street:'',
        number:0,
        zipcode:'',
        geolocation: {
          lat: 0,
          long: 0
        }
      },
      phone: ''
    },
    onSubmit: onSubmit,
    validationSchema: Yup.object().shape({
      email: Yup.string(),
      username: Yup.string(),
      password: Yup.string(),
      name: Yup.object({
        firstname: Yup.string(),
        lastname: Yup.string()
      }),
      address: Yup.object({
        city: Yup.string(),
        street: Yup.string(),
        number: Yup.number(),
        zipcode: Yup.string()
      }),
      phone: Yup.string()
    })
  })

  useEffect(() => {
    if (!initialValues) setEnableReinitialize(true)
  }, [initialValues])

  return (
   <div>
    <div style={{display:"flex"}}>
      <Form style={{marginRight:"30px"}}>
        <div data-testid= "email">
          <TextInput
            label="Email"
            value={values.email}
            onChange={e => setFieldValue('email', e.target.value)}
            error={errors.email !== undefined}
            onBlur={handleBlur}
          />

        </div>
        <br />
        <div data-testid="username">
          <TextInput
            label="Username"
            name='username'
            value={values.username}
            onChange={e => setFieldValue('username', e.target.value)}
            error={errors.username !== undefined}
            onBlur={handleBlur}
          />
        </div>
        <br />
        <div data-testid="password">
          <TextInput
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={e => setFieldValue('password', e.target.value)}
            error={errors.password !== undefined}
            InputProps={{
              endAdornment: 
                <InputAdornment position='end'>
                  {showPassword ? (<VisibilityOff onClick={handlePassword} />) : (<Visibility onClick={handlePassword} />)}
                </InputAdornment>
            }}
            onBlur={handleBlur}
          />
        </div>
        <br />
        <div data-testid="fname">
          <TextInput
            label="First Name"
            value={values.name.firstname}
            onChange={e => setFieldValue('name.firstname', e.target.value)}
            error={errors.name?.firstname !== undefined}
            onBlur={handleBlur}
          />
        </div>
        <br />
        <div data-testid="lname">
          <TextInput
            label="Last Name"
            value={values.name.lastname}
            onChange={e => setFieldValue('name.lastname', e.target.value)}
            error={errors.name?.lastname !== undefined}
            onBlur={handleBlur}
          />
        </div>
        <br />
      </Form>
      <Form>
        <div data-testid="zipcode">
          <TextInput
            label="Zip Code"
            value={values.address.zipcode}
            onChange={e => setFieldValue('address.zipcode', e.target.value)}
            error={errors.address?.zipcode !== undefined}
            onBlur={handleBlur}
          />
        </div>
        <br />
        <div data-testid="city">
          <TextInput
            label="City"
            value={values.address.city}
            onChange={e => setFieldValue('address.city', e.target.value)}
            error={errors.address?.city !== undefined}
            onBlur={handleBlur}
          />
        </div>
        <br />
        <div data-testid="street">
          <TextInput
            label="Street"
            value={values.address.street}
            onChange={e => setFieldValue('address.street', e.target.value)}
            error={errors.address?.street !== undefined}
            onBlur={handleBlur}
          />
        </div>
        <br />
        <div data-testid="number">
          <TextInput
            label="Address Number"
            value={values.address.number}
            onChange={e => setFieldValue('address.number', e.target.value)}
            error={errors.address?.number !== undefined}
            onBlur={handleBlur}
          />
        </div>
        <br />
        <div data-testid="phone">
          <TextInput
            label="Phone Number"
            value={values.phone}
            onChange={e => setFieldValue('phone', e.target.value)}
            error={errors.phone !== undefined}
            onBlur={handleBlur}
          />
        </div>
        <br />
      </Form>
    </div>
    <div style={{ display: 'flex', width: '100%', justifyContent: initialValues ? 'space-between' : 'center' }}>
      {initialValues && <Button variant="contained" onClick={(e: any) => dispatch(removeEditar())}>Cancelar</Button>}
      <Button variant="contained" onClick={(e: any) => handleSubmit(e)} disabled={!isValid}>{initialValues ? 'Salvar' : 'Adicionar'}</Button>
    </div>
  </div> 
  )
}