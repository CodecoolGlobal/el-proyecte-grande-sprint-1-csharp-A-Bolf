using System.Collections.Generic;
using SitRep.Models;

namespace SitRep.DAL;

public class UserService : IUserService
{
    private IRepository<User> _Repository;
    public IEnumerable<User> GetAll()
    {
        return _Repository.GetAll();
    }

    public User GetById(int id)
    {
        return _Repository.GetById(id);
    }

    public void Add(User user)
    {
        _Repository.Add(user);
    }

    public void Update(User user)
    {
        _Repository.Update(user);
    }

    public void Delete(int id)
    {
        _Repository.Delete(id);
    }
    
    public UserService(IRepository<User> repository)
    {
        _Repository = repository;
    }
}