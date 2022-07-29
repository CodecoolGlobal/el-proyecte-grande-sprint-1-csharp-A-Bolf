namespace SitRep.Controllers;

public class Ticket
{
    //constructor 
    public Ticket(string Title, string Description,string TimeAgo)
    {
        this.Id= Guid.NewGuid();
        this.Title = Title;
        this.Description = Description;
        this.TimeAgo = TimeAgo;
    }
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string TimeAgo { get; set; }
    // public string Category { get; set; }
    // public string Type { get; set; }
    // public string Priority { get; set; }
    // public string Assignee { get; set; }
    // public string CreatedBy { get; set; }
    // public string CreatedDate { get; set; }
    // public string UpdatedBy { get; set; }
    // public string UpdatedDate { get; set; }
    
}