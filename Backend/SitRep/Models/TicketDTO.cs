using SitRep.Models.Types;

namespace SitRep.Models;

public class TicketDTO
{
    public string Title { get; set; }
    public string Description { get; set; }
    public StatusType Status { get; set; }
    public string[] UserIDs { get; set; }
  
}