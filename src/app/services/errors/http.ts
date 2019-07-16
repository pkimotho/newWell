import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export function handleHttpError(errorResponse: HttpErrorResponse){
  if(errorResponse.error instanceof ErrorEvent ){
    console.log("client error");
  } else {
    console.log("server error", errorResponse)
  }
  return throwError("Oops something went wrong! Try again");

}
