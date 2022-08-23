using Microsoft.EntityFrameworkCore;
using SitRep.Models;

namespace SitRep.DAL;

public class SitRepContext:DbContext
{
    public SitRepContext(DbContextOptions<SitRepContext> options):base(options)
    {
        
    }

    public DbSet<Ticket> Tickets { get; set; }
    public DbSet<User> Users { get; set; }
}