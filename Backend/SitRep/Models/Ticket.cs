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
    public User Assignee { get; set; }
    public DateTime DueDate { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime LastUpdatedDate { get; set; }
    public User CreatedBy { get; set; }


    public Ticket(int id, string title, string description, PriorityType priority, TicketType type, User assignee, DateTime dueDate, User Creator)
    {
        Id = id;
        Title = title;
        Description = description;
        Priority = priority;
        Type = type;
        Assignee = assignee;
        DueDate = dueDate;
        CreatedDate = DateTime.Now;
        Status = StatusType.OPEM;
        CreatedBy = Creator;
        LastUpdatedDate = DateTime.Now;
    }

    public Ticket(int id)
    {
        Id = id;
    }
}