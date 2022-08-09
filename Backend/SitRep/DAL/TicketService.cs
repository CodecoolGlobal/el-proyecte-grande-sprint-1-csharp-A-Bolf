using System.Collections.Generic;
using SitRep.DAL;
using SitRep.Models;
using SitRep.Models.Types;

namespace SitRep.DAL;

public class TicketService : ITicketService
{
    private readonly IRepository<Ticket> _Repository;

    public Dictionary<StatusType,int> GetStatusCounts()
    {
        var statusCounts = new Dictionary<StatusType, int>
        {
            { StatusType.OPEN, _Repository.GetAll().Count(t => t.Status == StatusType.OPEN) },
            { StatusType.IN_PROGRESS, _Repository.GetAll().Count(t => t.Status == StatusType.IN_PROGRESS) },
            { StatusType.RESOLVED, _Repository.GetAll().Count(t => t.Status == StatusType.RESOLVED) },
            { StatusType.CLOSED, _Repository.GetAll().Count(t => t.Status == StatusType.CLOSED) }
        };
        return statusCounts;
    }
    public IEnumerable<Ticket> GetAll()
    {
        return _Repository.GetAll();
    }

    public Ticket GetById(int id)
    {
        return _Repository.GetById(id);
    }

    public void Add(Ticket ticket)
    {
        _Repository.Add(ticket);
    }

    public void Update(Ticket ticket)
    {
        _Repository.Update(ticket);
    }

    public void Delete(int id)
    {
        _Repository.Delete(id);
    }
    
    
    public TicketService(IRepository<Ticket> repository)
    {
        _Repository = repository;
    }
}