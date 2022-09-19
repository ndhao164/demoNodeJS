import express from 'express';
import {handleUploadMiddleware} from "../service/aws.service.js";


const aws = express.Router()

// (Swagger 2.0) Upload single file using Multer
aws.post('/upload', handleUploadMiddleware.array('input_files'), (req, res, next) => {
    /*
      #swagger.consumes = ['multipart/form-data']
      #swagger.parameters['singleFile'] = {
          in: 'formData',
          type: 'file',
          required: 'true',
    } */
    return res.json({
        msg: "Uploaded!",
        files: req.files
    });
} )

export function awsController(app) {
    app.use('/aws', aws)
}