import * as express from 'express';
import * as service from '../services/functions-services';

export function getStatus(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.status(200).send('OK');
}

export function getIsNullOrEmpty(req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    const inputParam = req.body.inputParam;
    let result = false;
    result = service.isNullOrEmpty(inputParam);
    res.status(200).send(result);
  } catch(err){
    console.log(`ERROR - ${err}`);
    next(err);
  }
}

export function getpositiveDivisors(req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    const originalNumber = req.body.number;
    const result = service.positiveDivisors(originalNumber);
    res.status(200).send(result);
  } catch(err){
    console.log(`ERROR - ${err}`);
    next(err);
  }
}

export function getTriangleArea(req: express.Request, res: express.Response, next: express.NextFunction) {
  try { 
    const first = req.body.a;
    const second = req.body.b;
    const third = req.body.c;
    const result = service.getTriangleArea(first, second, third);
    res.status(200).send(JSON.stringify(result));
  } catch(err){
    console.log(`ERROR - ${err}`);
    next(err);
  }
}

export function getMostCommon(req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    const inputArray = req.body.inputArray;
    const result = service.getMostCommon(inputArray);
    res.status(200).send(result);
  } catch(err){
    console.log(`ERROR - ${err}`);
    next(err);
  }
}