namespace SitRep.Models;

public class User
{
    public int id { get; set; }
    public string name { get; set; }
    public IList<Ticket> tickets { get; set; }
}