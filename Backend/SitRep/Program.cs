using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using SitRep.DAL;
using SitRep.Models;

const string AllowedDevelopmentOrigin = "_allowedDevelopmentOrigin";
const string AllowedProductionOrigin = "_allowedProductionOrigin";
var builder = WebApplication.CreateBuilder(args);


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSingleton<ITicketService, TicketService>();
builder.Services.AddSingleton<IRepository<Ticket>, TicketRepository>();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<SitRepContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("MSSQL");
    options.UseSqlServer(connectionString);
});
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowedDevelopmentOrigin,
        policy => { policy.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod(); });
});
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowedProductionOrigin,
        policy =>
        {
            policy.WithOrigins("https://zealous-flower-0589cae03.1.azurestaticapps.net").AllowAnyHeader()
                .AllowAnyMethod();
        });
});
builder.Services.AddTransient<SitRepSeed>();


var app = builder.Build();
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
var initializer = services.GetRequiredService<SitRepSeed>();
initializer.Seed();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();

if(app.Environment.IsDevelopment())
{
    app.UseCors(AllowedDevelopmentOrigin);
}
else
{
    app.UseCors(AllowedProductionOrigin);
}

app.UseAuthorization();

app.MapControllers();

app.Run();