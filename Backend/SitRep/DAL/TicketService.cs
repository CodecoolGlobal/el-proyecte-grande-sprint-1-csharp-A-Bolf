using System.Collections.Generic;
using SitRep.DAL;
using SitRep.Models;
using SitRep.Models.Types;

namespace SitRep.DAL;

public class TicketService : ITicketService
{
    private readonly IRepository<Ticket> _Repository;

    public Dictionary<StatusType, int> GetStatusCounts()
    { 
        var Tickets= _Repository.GetAll();
        return new Dictionary<StatusType, int>
        {
            { StatusType.OPEN, Tickets.Count(t => t.Status == StatusType.OPEN) },
            { StatusType.IN_PROGRESS, Tickets.Count(t => t.Status == StatusType.IN_PROGRESS) },
            { StatusType.RESOLVED, Tickets.Count(t => t.Status == StatusType.RESOLVED) },
            { StatusType.CLOSED, Tickets.Count(t => t.Status == StatusType.CLOSED) }
        };
    }

    public IEnumerable<Ticket> GetRecentUpdates()
    {
        //return last 4 tickets updated
        return _Repository.GetAll().OrderByDescending(t => t.LastUpdatedDate).Take(3);
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
        if (!_Repository.GetAll().Any())
        {
            SetUpMockData();
        }
    }

    public void SetUpMockData()
    {
        _Repository.SetUpMockData();
    }
}