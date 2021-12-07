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
            YearReleased = new DateTime(2007, 01, 01),
        }, new Book()
        {
            Id = Guid.NewGuid(),
            Author = "V. Moberg",
            Title = "Utvandrarna",
            Rating = 5,
            YearReleased = new DateTime(1949, 01, 01),
        }, new Book()
        {
            Id = Guid.NewGuid(),
            Author = "Daniel Defoe",
            Title = "Robinson Crusoe",
            Rating = 4,
            YearReleased = new DateTime(1719, 01, 01),
        }, new Book()
        {
            Id = Guid.NewGuid(),
            Author = "Marcel Proust",
            Title = " In Search of Lost Time",
            Rating = 4,
            YearReleased = new DateTime(1913, 01, 01),
        }, new Book()
        {
            Id = Guid.NewGuid(),
            Author = "Miguel de Cervantes",
            Title = "Don Quixote",
            Rating = 5,
            YearReleased = new DateTime(1605, 01, 01),
        }, new Book()
        {
            Id = Guid.NewGuid(),
            Author = "Herman Melville",
            Title = "Moby Dick",
            Rating = 5,
            YearReleased = new DateTime(1851, 01, 01),
        });
    }




}
