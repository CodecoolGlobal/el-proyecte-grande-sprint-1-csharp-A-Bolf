using System.Collections.Generic;

namespace SitRep.Models;

public class User
{
    public int id { get; set; }
    public string name { get; set; }

    
    //ctor
    public User(int id, string name)
    {
        this.id = id;
        this.name = name;
    }
    
    public User()
    {
    }
}