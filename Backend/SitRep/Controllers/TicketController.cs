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
    
    [HttpGet("/api/ticket/statuscounts")]
    public IActionResult GetStatusCounts()
    {
        return Ok(_ticketService.GetStatusCounts());
    }
    
    [HttpGet("/api/ticket/{id}")]
    public IActionResult GetById([FromRoute]int id)
    {
        return Ok(_ticketService.GetById(id));
    }
    
    [HttpPost("/api/ticket/add")]
    public IActionResult Create([FromBody]Ticket ticket)
    {
        _ticketService.Add(ticket);
        return Ok(ticket);
    }
    
    [HttpPut("/api/ticket/update")]
    public IActionResult Update([FromBody]Ticket ticket)
    {
        _ticketService.Update(ticket);
        return Ok(ticket);
    }
    
    [HttpDelete("/api/ticket/delete/{id}")]
    public IActionResult Delete([FromRoute]int id)
    {
        _ticketService.Delete(id);
        return Ok();
    }
    
    

}