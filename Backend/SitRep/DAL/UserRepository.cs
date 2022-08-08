using System.Collections.Generic;
using System.Linq;
using SitRep.Models;

namespace SitRep.DAL;

public class UserRepository: IRepository<User>
{
    public IList<User> Users = new List<User>();
    public IEnumerable<User> GetAll()
    {
        return Users;
    }

    public User GetById(int id)
    {
        return Users.FirstOrDefault(x => x.id == id);
    }

    public void Add(User item)
    {
        if (!Users.Contains(item))
        {
            Users.Add(item);
        }
    }

    public void Update(User item)
    {
        var user = Users.FirstOrDefault(x => x.id == item.id);
        if (user != null)
        {
            user.name = item.name;
            user.id = item.id;
            user.tickets = item.tickets;
        }
    }

    public void Delete(int id)
    {
        var user = Users.FirstOrDefault(x => x.id == id);
        if (user != null)
        {
            Users.Remove(user);
        }
    }
}