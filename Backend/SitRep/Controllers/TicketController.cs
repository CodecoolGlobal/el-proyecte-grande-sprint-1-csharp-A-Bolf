using Microsoft.AspNetCore.Mvc;
using SitRep.DAL;
using SitRep.DAL;
using SitRep.Models;

namespace SitRep.Controllers;
[ApiController]
public class TicketController:ControllerBase
{
    private readonly ITicketService _ticketService ;
    
    public TicketController(ITicketService ticketService)
    {
        _ticketService = ticketService;
    }
    
    [HttpGet("/api/ticket")]
    public IActionResult GetAll()
    {
        return Ok(_ticketService.GetAll());
    }

}