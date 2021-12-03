using Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace Data;
public class BookContext : DbContext
{
    public BookContext(DbContextOptions<BookContext> options) : base(options)
    {

    }

    public DbSet<Book> Books { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        modelBuilder.Entity<Book>().HasData(new Book
        {
            Id = Guid.NewGuid(),
            Author = "J.Guillou",
            Title = "Ondskan",
            Rating = 5,
            YearReleased = new DateTime(2007, 05, 01),
        }, new Book()
        {
            Id = Guid.NewGuid(),
            Author = "V. Moberg",
            Title = "Utvandrarna",
            Rating = 5,
            YearReleased = new DateTime(1949, 05, 01),
        }, new Book()
        {
            Id = Guid.NewGuid(),
            Author = "D. Owens",
            Title = "Där kräftorna sjunger ",
            Rating = 5,
            YearReleased = new DateTime(2020, 01, 01),
        });
    }




}
