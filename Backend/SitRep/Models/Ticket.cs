using System;
using SitRep.Models.Types;

namespace SitRep.Models;

public class Ticket
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public StatusType Status { get; set; }
    public PriorityType Priority { get; set; }
    public TicketType Type { get; set; }
    public DateTime DueDate { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime LastUpdatedDate { get; set; }
    public List<User> Assignees { get; set; } = new List<User>();
    public int CreatorID { get; set; }


    public Ticket(int id, string title, string description, PriorityType priority, TicketType type,DateTime dueDate)
    {
        Id = id;
        Title = title;
        Description = description;
        Priority = priority;
        Type = type;
        DueDate = dueDate;
        CreatedDate = DateTime.Now;
        Status = StatusType.OPEN;
        LastUpdatedDate = DateTime.Now;
    }
    public Ticket(string title, string description)
    {
        Title = title;
        Description = description;
        CreatedDate = DateTime.Now;
        Status = StatusType.OPEN;
        LastUpdatedDate = DateTime.Now;
    }

    public Ticket()
    {
        CreatedDate = DateTime.Now;
        Status = StatusType.OPEN;
        LastUpdatedDate = DateTime.Now;
    }
    
    public Ticket(TicketDTO ticketDTO)
    {
        Id = ticketDTO.Id;
        Title = ticketDTO.Title;
        Description = ticketDTO.Description;
        Status = ticketDTO.Status;
        Priority = ticketDTO.Priority;
        Type = ticketDTO.Type;
        DueDate = ticketDTO.DueDate;
        CreatedDate = ticketDTO.CreatedDate;
        LastUpdatedDate = ticketDTO.LastUpdatedDate;
        Assignees = ticketDTO.Assignees;
        CreatorID = ticketDTO.CreatorID;
        
    }
}