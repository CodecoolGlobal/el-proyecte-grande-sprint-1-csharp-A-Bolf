using System.Collections.Generic;
using SitRep.Models;

namespace SitRep.DAL;

public interface IUserService
{
    public IEnumerable<User> GetAll();
    public User GetById(int id);
    public void Add(User user);
    public void Update(User user);
    public void Delete(int id);
}