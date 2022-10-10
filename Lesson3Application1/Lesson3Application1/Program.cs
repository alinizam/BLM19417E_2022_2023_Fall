using Lesson3Application1.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddMvc();
builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository>();
var app = builder.Build();

app.UseRouting();

app.MapControllerRoute(name: "default", pattern: "{controller=Employee}/{action=Index}/{id?}");

app.Run();
