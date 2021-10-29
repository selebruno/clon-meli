/**
* @jest-environment node
*/ 
import '@testing-library/jest-dom';
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3001"