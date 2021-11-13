using Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace Data;
public class BookContext : DbContext
{
    public BookContext(DbContextOptions<BookContext> options) : base(options)
    {

    }

    public DbSet<Reservation> Reservations { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        modelBuilder.Entity<Reservation>().HasData(new Reservation
        {
            Id = Guid.NewGuid(),
            Author = "J.Guillou",
            Title = "Ondskan",
            Price = 17,
            DateReserved = DateTime.UtcNow,
        });
    }




}
