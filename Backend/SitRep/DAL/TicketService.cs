using SitRep.DAL;
using SitRep.Models;
using SitRep.Models.Types;

namespace SitRep.DAL;

public class TicketService : ITicketService
{
    private readonly IRepository<Ticket> _Repository;

    public IEnumerable<Ticket> GetAll()
    {
        _Repository.Add(new Ticket(5));
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