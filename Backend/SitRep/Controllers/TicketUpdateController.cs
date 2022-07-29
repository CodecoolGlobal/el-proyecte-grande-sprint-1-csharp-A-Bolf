using Microsoft.AspNetCore.Mvc;

namespace SitRep.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TicketUpdateController : ControllerBase
{
    public List<Ticket> Tickets { get; set; } = new List<Ticket>();
    
    [HttpGet]
    [Route("[action]/{count}")]
    public JsonResult GetTickets([FromRoute] int count)
    {
        for (int i = 0; i < count; i++)
        {
            Tickets.Add(new Ticket("asd", "asd", "5mins ago"));
        }
        
        return new JsonResult(Tickets);

    }
}