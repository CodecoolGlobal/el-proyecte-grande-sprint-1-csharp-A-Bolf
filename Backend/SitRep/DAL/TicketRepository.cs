

using System;
using System.Collections.Generic;
using System.Linq;
using SitRep.DAL;
using SitRep.Models;
using SitRep.Models.Types;

public class TicketRepository : IRepository<Ticket>
{
    //this is a singleton
    public IList<Ticket> Tickets = new List<Ticket>();


    IEnumerable<Ticket> IRepository<Ticket>.GetAll()
    {
        return Tickets;
    }

    public Ticket GetById(int id)
    {
        return Tickets.FirstOrDefault(t => t.Id == id);
    }

    public void Add(Ticket item)
    {
        if (!Tickets.Contains(item))
        {
            Tickets.Add(item);
        }
    }

    public void Update (Ticket item)
    {
        var UpdatedTicket =  Tickets.FirstOrDefault(t => t.Id == item.Id);
        if (UpdatedTicket != null)
        {
            item.LastUpdatedDate = DateTime.Now;
            Tickets[Tickets.IndexOf(UpdatedTicket)] = item;

        }
        
    }

    public void Delete(int id)
    {
        Tickets.Remove(GetById(id));
    }

    public void SetUpMockData()
    {
        //create example Tickets
        Tickets.Add(new Ticket
        {
            Id = 1,
            Title = "Ticket 1",
            Description = "This is a test ticket",
            Priority = PriorityType.LOW,
            Type = TicketType.BUG,
            Assignee = new User(1,"user1"),
            DueDate = DateTime.Now.AddDays(1),
            CreatedBy = new User(1,"user1")

        });
        Tickets.Add(new Ticket
        {
            Id = 2,
            Title = "Ticket 2",
            Description = "This is a test ticket",
            Priority = PriorityType.LOW,
            Type = TicketType.BUG,
            Assignee = new User(1,"user1"),
            DueDate = DateTime.Now.AddDays(1),
            CreatedBy = new User(1,"user1")

        });
        Tickets.Add(new Ticket
        {
            Id = 3,
            Title = "Ticket 3",
            Description = "This is a test ticket",
            Priority = PriorityType.LOW,
            Type = TicketType.BUG,
            Assignee = new User(1,"user1"),
            DueDate = DateTime.Now.AddDays(1),
            CreatedBy = new User(1,"user1")

        });
        Tickets.Add(new Ticket
        {
            Id = 4,
            Title = "Ticket 4",
            Description = "This is a test ticket",
            Priority = PriorityType.LOW,
            Type = TicketType.BUG,
            Assignee = new User(1, "user1"),
            DueDate = DateTime.Now.AddDays(1),
            CreatedBy = new User(1, "user1")
        });
    }
}