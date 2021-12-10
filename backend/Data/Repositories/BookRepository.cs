using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Data.Entities;
using Data.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Data.Repositories
{
    public class BookRepository : IBookRepository
    {
        private readonly IDbContextFactory<BookContext> _dbContextFactory;

        public BookRepository(IDbContextFactory<BookContext> dbContextFactory)

        {
            _dbContextFactory = dbContextFactory ?? throw new ArgumentNullException(nameof(dbContextFactory));
        }

        public async Task<Book> AddAsync(Book book)
        {
            using (var context = _dbContextFactory.CreateDbContext())
            {

                book.Id = book.Id == Guid.Empty ? Guid.NewGuid() : book.Id;
                context.Books.Add(book);
                await context.SaveChangesAsync().ConfigureAwait(false);
                return book;
            }
        }

        public async Task DeleteAsync(Guid id)
        {
            using (var context = _dbContextFactory.CreateDbContext())
            {

                var book = await context.Books.FindAsync(id);
                if (book != null)
                {
                    context.Books.Remove(book);
                    await context.SaveChangesAsync().ConfigureAwait(false);
                }
            }
        }

        public async Task<Book> FindAsync(Guid id)
        {
            using (var context = _dbContextFactory.CreateDbContext())
                return await context.Books.FindAsync(id);
        }

        public async Task<IEnumerable<Book>> GetBooks()
        {
            using (var context = _dbContextFactory.CreateDbContext())

            {
                return await context.Books.ToListAsync();

            }

        }


        public async Task<Book> PutAsync(Book book)
        {
            using (var context = _dbContextFactory.CreateDbContext())
            {
                var localBook = context.Books.Local.FirstOrDefault(t => t.Id == book.Id);
                if (localBook != null)
                {
                    context.Entry(localBook).State = EntityState.Detached;
                }
                context.Entry(book).State = EntityState.Modified;
                await context.SaveChangesAsync().ConfigureAwait(false);
                return book;
            }
        }
    }
}
