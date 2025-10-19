const express = require('express')
require('dotenv').config()
const port = process.env.port || 3000
const API_KEY = process.env.OMDB_API_KEY
if (!API_KEY) {
  console.error('Missing API KEY')
}