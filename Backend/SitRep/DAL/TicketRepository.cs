

using System;
using System.Collections.Generic;
using System.Linq;
using SitRep.DAL;
using SitRep.Models;

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


    
    
}