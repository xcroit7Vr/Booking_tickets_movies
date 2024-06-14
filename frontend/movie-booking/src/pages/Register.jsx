import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Localhost from '../variable';
import { Navigate } from 'react-router-dom';

function RegisterForm() {

  const [noHpState, setNoHpState] = useState('');
  const [nameState, setNameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [addressState, setAddressState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [provinceState, setProvinceState] = useState('DKI JAKARTA');
  const [provinceListState, setProvinceListState] = useState([]);
  const [cityListState, setCityListState] = useState([]);
  const [cityState, setCityState] = useState('KOTA JAKARTA PUSAT');
  const [genderState, setGenderState] = useState('Male');
  const [dayState, setDayState] = useState(1);
  const [monthState, setMonthState] = useState(1);
  const [yearState, setYearState] = useState(2024);

  const [createdState, setCreatedState] = useState(false);

  async function getOption() {
    try {

      await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`).then(response => response.json()).then(provinces => setProvinceListState(provinces));
      await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/31.json`)
        .then(response => response.json())
        .then(regencies => setCityListState(regencies));
    } catch (error) {
      console.log(error)
    }
  }

  async function getCityOpt() {
    try {

      const province = provinceListState.find(item => item.name == provinceState);


      if (province) {
        const id = province.id
        await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`)
          .then(response => response.json())
          .then(regencies => {
            setCityListState(regencies)
            setCityState(regencies[0].name);
          });
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function signup() {
    try {
      const data = await axios.post(`${Localhost}/user/signup`, {
        email: emailState,
        password : passwordState,
        name: nameState,
        phone: noHpState,
        bDay: `${dayState}/${monthState}/${yearState}`,
        province: provinceState,
        city: cityState,
        gender: genderState,
      });

      console.log(data);

      if (data.status = 201) {

        setCreatedState(true);
      } else {
        // setShowAlert(true);
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOption();
  }, [])

  useEffect(() => {
    getCityOpt()
  }, [provinceState])

  const handleSubmit = (event) => {

    event.preventDefault();

    signup()

  };

  // async function getOption() {
  //   fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`).then(response => response.json()).then(provinces => console.log(provinces));
  // }

  if(createdState){
    return <Navigate to="/loginForm" />;
  }

  return (
    <div className='register-style'>
      <Form className='form-style' onSubmit={handleSubmit}>
        <h1 className="d-flex justify-content-center">
          <strong className="mt-1">REGISTER FORM</strong>
        </h1>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridHandphone">
            <Form.Label>Handphone*</Form.Label>
            <Form.Control onChange={(val) => setNoHpState(val.target.value)} type="text" placeholder="Handphone Number" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFullName">
            <Form.Label>Full Name*</Form.Label>
            <Form.Control onChange={(val) => setNameState(val.target.value)} type="text" placeholder="Your Name" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control onChange={(val) => setEmailState(val.target.value)} type="email" placeholder="Your Valid Email" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password*</Form.Label>
            <Form.Control onChange={(val) => setPasswordState(val.target.value)} type="password" placeholder="Your Password" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address as per your ID*</Form.Label>
            <Form.Control onChange={(val) => setAddressState(val.target.value)} placeholder="Correspondence address based on ID/KTP" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridProvince">
            <Form.Label>Province</Form.Label>
            <Form.Select onChange={(val) => {
              setProvinceState(val.target.value)
            }} value={provinceState}>
              {
                provinceListState.map((val, i) => <option key={`provinceOpt${i}`} value={val.name} >{val.name}</option>)
              }


            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Select onChange={(val) => setCityState(val.target.value)} value={cityState} >
              {
                cityListState.map((val, i) => <option key={`cityOpt${i}`} value={val.name} >{val.name}</option>)
              }
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridGender">
            <Form.Label>Gender</Form.Label>
            <Form.Select onChange={(val) => setGenderState(val.target.value)} defaultValue="Male">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Label>Birth Date</Form.Label>
          <Form.Group as={Col} controlId="formGridDay">
            <Form.Label>Day</Form.Label>
            <Form.Select onChange={(val) => setDayState(val.target.value)} defaultValue="Choose...">
              <option  >Choose...</option>
              {[...Array(31).keys()].map((day) => (
                <option key={day + 1}>{day + 1}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridMonth">
            <Form.Label>Month</Form.Label>
            <Form.Select onChange={(val) => setMonthState(val.target.value)} defaultValue="Choose...">
              <option>Choose...</option>
              {[...Array(12).keys()].map((month) => (
                <option key={month + 1}>{month + 1}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridYear">
            <Form.Label>Year</Form.Label>
            <Form.Select onChange={(val) => setYearState(val.target.value)} defaultValue="Choose...">
              <option>Choose...</option>
              {[...Array(101).keys()].map((year) => (
                <option key={2024 - year}>{2024 - year}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <div className="button-container">
          <Button type='submit' variant="primary" size="sm, sl," className="small-button">
            Sign Up!
          </Button>
        </div>
        <p>
          <a href="LoginForm">Already have an account? Sign In!</a>
        </p>
      </Form>
    </div>
  );
}

export default RegisterForm;
