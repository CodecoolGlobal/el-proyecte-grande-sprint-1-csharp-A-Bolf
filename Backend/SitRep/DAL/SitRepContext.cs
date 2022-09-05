using Microsoft.EntityFrameworkCore;
using SitRep.Models;

namespace SitRep.DAL;

public class SitRepContext:DbContext
{
    public SitRepContext(DbContextOptions<SitRepContext> options):base(options)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Ticket>().ToTable("Ticket");
        modelBuilder.Entity<User>().ToTable("User");
        modelBuilder.Entity<Project>().ToTable("Project");
    }

    public DbSet<Ticket> Tickets { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Project> Projects { get; set; }
}