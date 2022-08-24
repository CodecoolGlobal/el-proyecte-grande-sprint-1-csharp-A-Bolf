using System.Collections.Generic;
using SitRep.Models;

namespace SitRep.DAL;

public class UserService : IUserService
{
    
    private readonly SitRepContext _context;
    
    public UserService(SitRepContext context)
    {
        _context = context;
    }
    public IEnumerable<User> GetAll()
    {
        return _context.Users.ToList();
    }

    public User GetById(int id)
    {
        return _context.Users.FirstOrDefault(user => user.id == id);
    }

    public void Add(User user)
    {
        _context.Add(user);
        _context.SaveChanges();
    }

    public void Update(User user)
    {
        _context.Update(user);
        _context.SaveChanges();
    }

    public void Delete(int id)
    {
        _context.Remove(GetById(id));
    }
    
}