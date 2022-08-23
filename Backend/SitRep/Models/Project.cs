namespace SitRep.Models;

public class Project
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<Ticket> Tickets { get; set; } = new List<Ticket>();
}