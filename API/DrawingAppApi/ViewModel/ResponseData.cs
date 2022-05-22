using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrawingAppApi.ViewModel
{
    public class ResponseData<T> where T : class
    {
        public Status Status { get; set; }
        public string Message { get; set; }
        
        public T Data { get; set; }
        public ResponseData()
        {
            this.Status = Status.NoDataAvailable;
            this.Message = Status.NoDataAvailable.ToString();
            Data = null;
        }
    }

    public enum Status
    {
        Success = 200,
        Created = 201,
        NoDataAvailable = 204,
        BadRequest = 400,
        Unauthorized = 401,
        AlreadyExists = 403,
        NotFound = 404,
        InternalServerError = 500
    }
}
