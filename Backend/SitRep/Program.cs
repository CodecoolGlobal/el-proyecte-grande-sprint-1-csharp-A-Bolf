using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SitRep.DAL;
using SitRep.Models;

var  AllowedSpecificOrigins = "_AllowedSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSingleton<ITicketService, TicketService>();
builder.Services.AddSingleton<IRepository<Ticket>,TicketRepository>();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowedSpecificOrigins,
        policy  =>
        {
            policy.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod();
            policy.WithOrigins("https://zealous-flower-0589cae03.1.azurestaticapps.net/").AllowAnyHeader().AllowAnyMethod();
            
        });
});


var app = builder.Build();
    
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();

app.UseCors(AllowedSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();