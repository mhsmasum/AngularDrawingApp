using DrawingAppApi.Models;
using DrawingAppApi.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DrawingAppApi.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    public class DrawController : ControllerBase
    {

        private string jsonFile = "data/rectangle.json";
        [HttpGet("GetRect")]
        public async Task<IActionResult> GetRectangle()
        {
            var response = new ResponseData<Rectangle>();
            try
            {
                Rectangle aRectangle = new Rectangle();
                using (StreamReader r = new StreamReader("data/rectangle.json"))
                {
                    string json = r.ReadToEnd();
                    aRectangle = JsonConvert.DeserializeObject<Rectangle>(json);

                }
                response = aRectangle != null ? new ResponseData<Rectangle>()
                {
                    Status = Status.Success,
                    Message = Status.Success.ToString(),
                    Data = aRectangle
                } : response;
               
            }
            catch (Exception ex)
            {
                response.Message = ex.ToString();
                response.Status = Status.InternalServerError;
                response.Data = null;
                throw;
            }
            
            return Ok(response);

        }

        [HttpPost("update")]
        public async Task<IActionResult> Update(Rectangle rectangle)
        {
            var response = new ResponseData<Rectangle>();
            try
            {
                string json = System.IO.File.ReadAllText(jsonFile);
                var output = JsonConvert.SerializeObject(rectangle);
                System.IO.File.WriteAllText(jsonFile, output);
                response.Status = Status.Success;
                response.Message = Status.Success.ToString();
                response.Data = rectangle;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Message = ex.ToString();
                response.Status = Status.InternalServerError;
                response.Data = null;

                throw;
            }
            return Ok(response);
        }
    }
}
