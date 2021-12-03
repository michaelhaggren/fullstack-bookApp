using Core.Interfaces;
using Core.Services;
using Data;
using Data.Interfaces;
using Data.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

{


    // Add services to the container.

    builder.Services.AddControllers();
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "API WSVAP (WebSmartView)", Version = "v1" });
        c.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());
    });
    builder.Services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
    {
        builder.
        AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin();
    }));
    builder.Services.AddDbContextFactory<BookContext>(opt => opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
    builder.Services.AddScoped<IBookService, BookService>();
    builder.Services.AddScoped<IBookRepository, BookRepository>();


    var app = builder.Build();

    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI(c => c.SwaggerEndpoint("./v1/swagger.json", "Book.Api v1"));
    }

    app.UseHttpsRedirection();
    app.UseCors("MyPolicy");
    app.UseAuthorization();

    app.MapControllers();

    app.Run();

}