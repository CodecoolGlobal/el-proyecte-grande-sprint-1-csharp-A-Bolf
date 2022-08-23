namespace SitRep.Models;

public class Project
{
    public int Id;
    public string Name { get; set; }
    public List<Ticket> Tickets { get; set; } = new List<Ticket>();
}