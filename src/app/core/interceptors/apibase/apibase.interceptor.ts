import { HttpInterceptorFn } from '@angular/common/http';
import { EndPoints } from '../../models';

export const apibaseInterceptor: HttpInterceptorFn = (req, next) => {

  const url= req.url.includes('assets')? req.url : `${EndPoints.API_BASE_URL}${req.url}`;
  req = req.clone({
    url 
  });

  return next(req);
};
